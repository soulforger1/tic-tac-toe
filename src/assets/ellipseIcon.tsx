import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  opacity?: number;
}

export const EllipseIcon: React.FC<Props> = ({
  height = 91,
  width = 91,
  color = '#87E43A',
  opacity = 0.8,
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 91 91"
      fill="none"
      {...others}>
      <Circle
        opacity={opacity}
        cx={45.3943}
        cy={45.3943}
        r={35.3943}
        stroke={color}
        strokeWidth={19.1321}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
};
