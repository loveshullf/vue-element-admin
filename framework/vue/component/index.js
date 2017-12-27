import Vue from 'vue';
import '@/mocks';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import IconSvg from "@/component/icon-svg";
Vue.component(IconSvg.name, IconSvg);
//加载所有图标
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/asset/icons', false, /\.svg$/);
requireAll(req);

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';

