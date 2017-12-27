import { mount, createLocalVue } from "vue-test-utils";

const localVue = createLocalVue();
import ElementUI from "element-ui";
import Vuex from "vuex";
localVue.use(Vuex);
localVue.use(ElementUI);


import sidebarItem from "@/page/layout/sidebar/sidebarItem.vue";
let wrapper;
beforeEach(() => {
    wrapper = mount(sidebarItem, {localVue});
 //每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
});


test('props属性测试',()=>{
    wrapper=mount(sidebarItem, {localVue,propsData:{
        routes:[{name:'项1'},{name:'项2'}]
    }});
    
   ///expect(wrapper.element).toMatchSnapshot();
})
