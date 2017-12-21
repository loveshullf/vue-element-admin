import Vue from 'vue';
import IconSvg from "./icon-svg";
Vue.component(IconSvg.name, IconSvg);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('asset/icons', false, /\.svg$/);
requireAll(req);


