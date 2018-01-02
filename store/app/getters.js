
// language: state => state.app.language,
  
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // status: state => state.user.status,
  // roles: state => state.user.roles,
  // setting: state => state.user.setting,
  // addRouters: state => state.permission.addRouters,
  // errorLogs: state => state.errorLog.logs
const getters = {
  sidebar: state => state.app.sidebar ,
  permission_routers:state => state.permission.routers,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
}
export default getters
