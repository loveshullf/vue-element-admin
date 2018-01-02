import { mount,Shallow, createLocalVue } from "vue-test-utils";

const localVue = createLocalVue();
import ElementUI from "element-ui";
import Vuex from "vuex";
localVue.use(Vuex);
localVue.use(ElementUI);