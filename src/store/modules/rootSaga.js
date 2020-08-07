import {all} from 'redux-saga/effects';

import driver from './auth/sagas';

export default function* rootSaga() {
  return yield all([driver]);
}
