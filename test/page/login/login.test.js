import { mount, createLocalVue } from "vue-test-utils";

const localVue = createLocalVue();
import ElementUI from "element-ui";
import Vuex from "vuex";
localVue.use(Vuex);
localVue.use(ElementUI);

//模拟数据以及axios
// import "@/mocks";
// jest.mock('@/api/login'); 
import {login} from '@/api/login';
localVue.prototype.$http = login;

//store moudel
jest.mock("@/store/app/modules/user.js");
import user from "@/store/app/modules/user.js";

let wrapper;
import Login from "@/page/login";
beforeEach(() => {
  let store = new Vuex.Store({
    modules:{user}
  });
  wrapper = mount(Login, { store, localVue });
 //每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
});

test("界面应该有两个input和一个button", () => {
  const inputs = wrapper.findAll(".el-input"); // 通过findAll来查找dom或者vue实例
  const loginButton = wrapper.find(".el-button"); // 通过find查找元素
  expect(inputs.length).toBe(2); // 应该有两个输入框
  expect(loginButton).toBeTruthy(); // 应该有一个登录按钮。 只要断言条件不为空或这false，toBeTruthy就能通过。
});

test("登录按钮,触发handleLogin方法", () => {
  const stub = jest.fn(); // 伪造一个jest的mock funciton
  wrapper.setMethods({ handleLogin: stub });
  wrapper.find(".el-button").trigger("click"); // 对button触发一个click事件
  expect(stub).toBeCalled(); // 查看loginToDo是否被调用
});

test("验证输入格式，错误格式输入返回FALSE", () => {
  wrapper.setData({
    loginForm: {
      username: "admin",
      password: "1234"
    }
  }); //模拟用户输入数据
  const stub=jest.fn((valid)=>{ expect(valid).toBe(false)})
  wrapper.vm.$refs.loginForm.validate(stub);
});

test("vuex状态测试，登录按钮按下验证通过之后，Action:LoginByUsername被调用一次", () => {
  expect.assertions(1);
  wrapper.setData({
    loginForm: {
      username: "admin",
      password: "123456"
    }
  }); //模拟用户输入数据
  let spy=jest.spyOn(user.actions,'LoginByUsername');
  wrapper.find(".el-button").trigger("click");
  expect(spy).toHaveBeenCalledTimes(1);
});
//快照
test("页面快照", () => {
  expect(wrapper.element).toMatchSnapshot(); // 调用toMatchSnapshot来比对快照
});
