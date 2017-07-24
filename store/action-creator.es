import { bindActionCreators } from 'redux'
import { store } from 'views/create-store'

const actionCreator = {
  configReady: config => ({
    type: '@poi-plugin-ezexped@ConfigReady',
    config,
  }),
  changeFleet: (fleetId,reason=null) => ({
    type: '@poi-plugin-ezexped@ChangeFleet',
    fleetId,
    reason,
  }),
  modifyState: modifier => ({
    type: '@poi-plugin-ezexped@ModifyState',
    modifier,
  }),
  // note that this action is handled only when 'fleetAutoSwitch' is on
  autoSwitchToNextAvailable: (reason=null) => ({
    type: '@poi-plugin-ezexped@AutoSwitchToNextAvailable',
    reason,
  }),
  changeFleetFocusInMainUI: fleetId => ({
    type: '@@TabSwitch',
    tabInfo: {
      activeMainTab: 'shipView',
      activeFleetId: fleetId-1,
    },
  }),
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreator, dispatch)

// TODO: simplify other parts to use this...
const boundActionCreator =
  mapDispatchToProps(store.dispatch)

export {
  actionCreator,
  mapDispatchToProps,
  boundActionCreator,
}
