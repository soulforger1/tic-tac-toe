import React, {useContext, useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CrossIcon, EllipseIcon} from '../assets';
import {Context} from '../provider/context';

interface Props {
  id: number;
}

export const BoardEye: React.FC<Props> = ({id}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {player, setPlayer}: any = useContext(Context);
  const [value, setValue] = useState<string | null>(null);
  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const clicked = () => {
    if (value === null) {
      setValue(player.value);
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
      setPlayer({
        value: player.value === 'cross' ? 'ellipse' : 'cross',
        id: player.id === 2 ? 1 : 2,
      });
    }
  };

  const renderShape = () => {
    switch (value) {
      case null:
        return;
      case 'cross':
        return <CrossIcon width={70} height={70} />;
      case 'ellipse':
        return <EllipseIcon width={70} height={70} />;
    }
  };

  return (
    <TouchableOpacity onPress={clicked}>
      <View style={[styles.container, styles[id]]}>
        <Animated.View style={{transform: [{scale}]}}>
          {renderShape()}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles: any = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  0: {borderTopWidth: 0, borderLeftWidth: 0},
  1: {borderTopWidth: 0},
  2: {borderTopWidth: 0, borderRightWidth: 0},
  3: {borderLeftWidth: 0},
  4: {},
  5: {borderRightWidth: 0},
  6: {borderBottomWidth: 0, borderLeftWidth: 0},
  7: {borderBottomWidth: 0},
  8: {borderBottomWidth: 0, borderRightWidth: 0},
});
