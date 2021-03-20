import React, {useContext} from 'react';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BoardEye} from '../components';
import {Context} from '../provider/context';

export const PlayGround: React.FC<any> = props => {
  const {player}: any = useContext(Context);

  return (
    <LinearGradient colors={['#00D2FF', '#3A7BD5']} style={{flex: 1}}>
      <SafeAreaView style={styles.main}>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>0:05</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.turn}>Player </Text>
          <Animated.Text style={styles.turn}>{player.id}</Animated.Text>
          <Text style={styles.turn}>'s Turn</Text>
        </View>
        <View style={styles.board}>
          <View style={{flexDirection: 'row'}}>
            <BoardEye id={0} />
            <BoardEye id={1} />
            <BoardEye id={2} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <BoardEye id={3} />
            <BoardEye id={4} />
            <BoardEye id={5} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <BoardEye id={6} />
            <BoardEye id={7} />
            <BoardEye id={8} />
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
  timerContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 34,
    fontWeight: '500',
  },
  turn: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 30,
    marginBottom: 40,
  },
  board: {
    width: 324,
    height: 324,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
