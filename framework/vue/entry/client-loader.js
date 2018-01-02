'use strict';
module.exports = function(source) {
  return `
    import Client from 'client';
    import store from '@/store/app';
    import router from '@/router';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default Client.render({ ...Page,router,store});
  `;
};