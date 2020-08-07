import {takeLatest, call, put, all, spawn} from 'redux-saga/effects';

import api from '../../../services/api';
import {signInSuccess, signFailure} from './actions';
import {startWatchingNetworkConnectivity} from './offline';

export function* getRepositories() {
  try {
    const response = yield call(api.get, `/repos/facebook/react-native`);

    yield put(signInSuccess(response.data));
  } catch (err) {
    console.error('Falha, verifique sua conexao');
    yield put(signFailure());
  }
}

export default all([
  spawn(startWatchingNetworkConnectivity),
  takeLatest('@auth/REQUEST', getRepositories),
]);
