/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StyleSheet,
  View,
} from 'react-native';


import CustomIcon from './src/components/CustomIcon';


function App(): JSX.Element {

  return (
    <View>
      <CustomIcon name='search' size={26} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
