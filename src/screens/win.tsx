import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CrossIcon, EllipseIcon} from '../assets';
import {Context} from '../provider/context';
const {width, height} = Dimensions.get('window');

export const Win: React.FC<any> = () => {
  const {player, setBoard}: any = useContext(Context);
  const navigation = useNavigation();

  const toPick = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    navigation.navigate('pick');
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {player.value === 'ellipse' ? (
          <CrossIcon width={70} height={70} />
        ) : (
          <EllipseIcon width={70} height={70} />
        )}
        <Text style={styles.text}>Player {player.id === 1 ? 2 : 1} won</Text>
        <TouchableOpacity onPress={toPick}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Play again</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.8,
    borderRadius: 40,
    height: height * 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 30,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D2FF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
