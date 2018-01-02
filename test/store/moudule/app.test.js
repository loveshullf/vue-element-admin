import app from "@/store/app/modules/app";
import {testAction} from './testAction';
jest.mock('Cookies');
const { mutations } = app;
const { actions }=app;

describe("app模块mutations测试", () => {
    test('TOGGLE_SIDEBAR（侧边栏）,切换打开关闭',()=>{
        const { TOGGLE_SIDEBAR } = mutations;
        //默认打开
        let cookieOfsidebarStatus=null;
        let state = { sidebar: { opened: !+cookieOfsidebarStatus } };
        expect(state.sidebar.opened).toBe(true);
        //打开到关闭
        cookieOfsidebarStatus=0;
        state = { sidebar: { opened: !+cookieOfsidebarStatus } };
        expect(state.sidebar.opened).toBe(true);      
        TOGGLE_SIDEBAR(state);
        expect(state.sidebar.opened).toBe(false);
        //关闭到打开
        cookieOfsidebarStatus=1;
        state = { sidebar: { opened: !+cookieOfsidebarStatus } };
        expect(state.sidebar.opened).toBe(false);
        TOGGLE_SIDEBAR(state);
        expect(state.sidebar.opened).toBe(true);
    })
});

describe('app模块action测试',()=>{
    test('toggleSideBar（侧边栏状态切换）,调用TOGGLE_SIDEBAR，切换打开关闭',(done)=>{
        const { toggleSideBar }=actions;
        const { TOGGLE_SIDEBAR } = mutations;
         //默认打开
         let cookieOfsidebarStatus=null;
         let state = { sidebar: { opened: !+cookieOfsidebarStatus } };
         expect(state.sidebar.opened).toBe(true);
         //打开到关闭
         cookieOfsidebarStatus=0;
         state = { sidebar: { opened: !+cookieOfsidebarStatus } };
         expect(state.sidebar.opened).toBe(true); 
         testAction(toggleSideBar,[],state,[{fun:TOGGLE_SIDEBAR,type:"TOGGLE_SIDEBAR"}],done);     
         expect(state.sidebar.opened).toBe(false);
          //关闭到打开
        cookieOfsidebarStatus=1;
        state = { sidebar: { opened: !+cookieOfsidebarStatus } };
        expect(state.sidebar.opened).toBe(false);
        testAction(toggleSideBar,[],state,[{fun:TOGGLE_SIDEBAR,type:"TOGGLE_SIDEBAR"}],done);
        expect(state.sidebar.opened).toBe(true);
    })
})
