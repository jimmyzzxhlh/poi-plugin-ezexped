import { reducer, boundActionCreator } from './store'
import { Settings as settingsClass } from './ui/settings'
import { EZExpedMain as reactClass } from './ui'
import { globalSubscribe, globalUnsubscribe } from './observers'
import { loadPState } from './p-state'

// for p-state loading process
let pStateInitId = null

/*
   TODO
   - failure record as file
   - move "auto switch" into settings
 */

const pluginDidLoad = () => {
  globalSubscribe()

  if (pStateInitId !== null) {
    console.error(`pStateInitId should be null`)
  }
  pStateInitId = setTimeout(() => {
    boundActionCreator.pStateReady(loadPState())
    pStateInitId = null
  })
}

const pluginWillUnload = () => {
  globalUnsubscribe()

  if (pStateInitId !== null) {
    clearTimeout(pStateInitId)
    pStateInitId = null
  }
}

const switchPluginPath = [
  {
    path: '/kcsapi/api_get_member/mission',
    valid: () => true,
  },
  {
    path: '/kcsapi/api_req_mission/result',
    valid: () => true,
  },
]

export {
  pluginDidLoad,
  pluginWillUnload,
  reactClass,
  reducer,
  settingsClass,
  switchPluginPath,
}
