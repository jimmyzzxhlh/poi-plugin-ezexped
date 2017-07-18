import _ from 'lodash'
import { observe } from 'redux-observers'
import { store } from 'views/create-store'

import { configSaveObserver } from './config-save'
import { nextAvailableFleetObserver } from './next-fleet'

const observeAll = () =>
  observe(store, [
    configSaveObserver,
    nextAvailableFleetObserver,
  ])

export { observeAll }
