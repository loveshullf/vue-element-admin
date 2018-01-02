import permission from "@/store/app/modules/permission";
import getters from '@/store/app/getters'
import {testAction} from './testAction';
jest.mock('@/router');
import {constantRouterMap,asyncRouterMap} from '@/router'

const { mutations } = permission;
const { actions }= permission;

describe("permission模块mutations测试", () => {
    test('SET_ROUTERS（添加路由）,公共路由目前3条，动态路由1条',()=>{
        const { SET_ROUTERS } = mutations;
        const state= {
            routers: constantRouterMap,
            addRouters: []
        }
        expect(state.routers.length).toBe(3);
        SET_ROUTERS(state,asyncRouterMap);
        expect(state.routers.length).toBe(4);
    })
});
describe('permission模块action测试',()=>{
    describe('GenerateRoutes测试',()=>{
        test('GenerateRoutes,过滤角色为admin的动态路由',(done)=>{
            const { SET_ROUTERS } = mutations;
            const { GenerateRoutes }=actions
            const state= {
                routers: constantRouterMap,
                addRouters: []
            }  
            testAction(GenerateRoutes,[{roles:['admin']}],state,[{fun:SET_ROUTERS,type:'SET_ROUTERS',payload:asyncRouterMap}],done)
            expect(state.routers.length).toBe(4);
            //权限模块路由
            expect((state.addRouters.find((Router)=>Router.meta.title==='permission'))!==undefined).toBeTruthy();
        })
    })
})
describe('permission模块getters测试',()=>{
    describe('permission_routers测试',()=>{
        test('permission_routers,获取路由',()=>{
            const {permission_routers} =getters;
            const state= {permission:{
                routers: constantRouterMap,
                addRouters: []
                }
            }  
            const result=permission_routers(state);
            expect(result).toMatchObject(constantRouterMap);
        })
    })
})
