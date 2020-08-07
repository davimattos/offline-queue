import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '../store/modules/auth/actions';

import AsyncStorage from '@react-native-community/async-storage';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  repo: {
    padding: 10,
    borderRadius: 4,
    margin: 10,
    borderWidth: 1,
  },
};

const RepositoriesList = () => {
  const dispatch = useDispatch();
  const {repositories, loading} = useSelector((state) => state.driver);

  // AsyncStorage.clear();

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#000" />}
      {repositories && (
        <View style={styles.repo} key={repositories.data.id}>
          <Text>{repositories.data.name}</Text>
          <Text>{repositories.data.description}</Text>
        </View>
      )}

      <Button title="Adicionar" onPress={() => dispatch(signInRequest())} />
    </View>
  );
};

export default RepositoriesList;
