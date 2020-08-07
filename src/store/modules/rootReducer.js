import {combineReducers} from 'redux';
import {reducer as offline} from 'redux-offline-queue';

import driver from './auth/reducers';

export default combineReducers({offline, driver});
