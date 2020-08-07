import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import NetInfo from '@react-native-community/netinfo';
import {OFFLINE, ONLINE} from 'redux-offline-queue';

export function* startWatchingNetworkConnectivity() {
  yield put({type: ONLINE});

  // const channel = eventChannel((emmiter) => {
  //   const subscribe = NetInfo.addEventListener((state) => state.isConnected);
  //   subscribe() && emmiter();
  //   return () =>
  //     NetInfo.addEventListener(
  //       ({isConnected}) => isConnected && 'connectionChange',
  //       emmiter,
  //     );
  // });

  // try {
  //   while (true) {
  //     const isConnected = yield take(channel);

  //     if (isConnected) {
  //       yield put({type: ONLINE});
  //     } else {
  //       yield put({type: OFFLINE});
  //     }
  //   }
  // } finally {
  //   channel.close();
  // }
}
