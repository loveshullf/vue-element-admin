import Vue from 'vue';
import '@/mocks';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '@/asset/style/index.scss';

Vue.use(ElementUI);

import SvgIcon from "@/component/svg-icon";
Vue.component(SvgIcon.name, SvgIcon);
//加载所有图标
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/asset/icons', false, /\.svg$/);
requireAll(req);


