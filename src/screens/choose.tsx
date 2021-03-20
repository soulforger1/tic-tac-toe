import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CrossIcon, EllipseIcon} from '../assets';
import {Context} from '../provider/context';
const {width} = Dimensions.get('window');

export const Choose = () => {
  const navigation = useNavigation();
  const {setPlayer, setPlayersData}: any = useContext(Context);

  const playGround = (playerTurn: string) => {
    setPlayer({value: playerTurn, id: 1});
    setPlayersData({
      1: playerTurn,
      2: playerTurn === 'cross' ? 'ellipse' : 'cross',
    });
    navigation.navigate('playGround');
  };

  return (
    <LinearGradient colors={['#00D2FF', '#3A7BD5']} style={{flex: 1}}>
      <SafeAreaView style={styles.main}>
        <View style={styles.cross}>
          <CrossIcon width={338} height={338} color="#000000" opacity={0.1} />
        </View>
        <View style={styles.ellipse}>
          <EllipseIcon width={338} height={338} color="#000000" opacity={0.1} />
        </View>
        <Text style={styles.title}>tic-tac-toe</Text>
        <View style={{alignItems: 'center', position: 'absolute', bottom: 120}}>
          <Text style={styles.text}>Pick who goes first?</Text>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => playGround('cross')}>
              <View style={styles.button}>
                <CrossIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playGround('ellipse')}>
              <View style={styles.button}>
                <EllipseIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    position: 'absolute',
    top: 148,
    left: -60,
  },
  ellipse: {
    position: 'absolute',
    top: 60,
    right: -168,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 42,
    fontWeight: '700',
    color: 'white',
    marginBottom: 200,
  },
  text: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between',
  },
  button: {
    width: 143,
    height: 143,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
