import Vue from "vue";
import VueRouter from "vue-router";

/**
 * 基本-组件
 */
import login from "@/page/login";
import layout from "@/page/layout";
/**
 * 菜单-组件
 */
import dashboard from "@/page/dashboard";
import documentation from "@/page/documentation";
import permission from "@/page/permission";

Vue.use(VueRouter);
/**
 * 默认路由,meta中没有role
 */
export const constantRouterMap = [
  {
    path: "/login",
    component: login
  },
  {
    path: "",
    component: layout,
    redirect:'dashboard',
    children: [
      {
        path: "dashboard",
        component: dashboard,
        name: "dashboard",
        meta: { title: "dashboard", icon: "dashboard", noCache: true }
      }
    ]
  },
  {
    path: "/documentation",
    component: layout,
    children: [
      {
        path: "index",
        component: documentation,
        name: "documentation",
        meta: { title: "documentation", icon: "documentation", noCache: true }
      }
    ]
  },
//多级菜单 children必须要2项以上才可以显示分级
//   {
//     path: "/a1",
//     component: layout,
//     name: 'a1',
//     meta: {
//       title: 'a1',
//       icon: 'component'
//     },
//     children: [
//       { path: '/a1-1',
//         component:layout, 
//         name: 'a1-1', 
//         meta: { title: 'a1-1',icon:'component'},
//         children:[{ path: 'a1-1-2',component:layout, name: 'a1-1-2', meta: { title: 'a1-1-2'}},{ path: 'a1-1-2',component:layout, name: 'a1-1-2', meta: { title: 'a1-1-2'}}]
//       },
//       { path: 'a1-2',component:layout, name: 'a1-2', meta: { title: 'a1-2'}}
//     ]
//   },
 ];
/**
 * 需要权限的路由 meta中没有role，所有用户都有权限
 */
export const asyncRouterMap = [
  {
    path: "/permission",
    component: layout,
    //redirect:'/permission/index',
    meta: { role: ["admin"] },
    children: [
      {
        path: "index",
        component: permission,
        meta: {
          title: "permission",
          icon: "lock",
          role: ["admin"]
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes: constantRouterMap
});

export default router;
