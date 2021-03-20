import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  opacity?: number;
}

export const CrossIcon: React.FC<Props> = ({
  height = 91,
  width = 91,
  color = '#F54D62',
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
      <Path
        opacity={opacity}
        d="M10 10l35.235 35.235M80.47 80.47L45.235 45.235m0 0L10 80.47m35.235-35.235L80.47 10"
        stroke={color}
        strokeWidth={19.1321}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
};
