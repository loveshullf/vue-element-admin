
import Vue from 'vue';
import {mount} from '@/test/vue-test-utils.js';
import login from '@/page/login/index.vue';
import element from 'element-ui/lib/index.js';
Vue.use(element);

let wrapper
beforeEach(() => {
  wrapper = mount(login) // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
})

test('Should have two input & one button', () => {
  const inputs = wrapper.findAll('.el-input') // 通过findAll来查找dom或者vue实例
  const loginButton = wrapper.find('.el-button') // 通过find查找元素
  expect(inputs.length).toBe(2) // 应该有两个输入框
  expect(loginButton).toBeTruthy() // 应该有一个登录按钮。 只要断言条件不为空或这false，toBeTruthy就能通过。
})
test('Should have the expected html structure', () => {
  expect(wrapper.element).toMatchSnapshot() // 调用toMatchSnapshot来比对快照
})