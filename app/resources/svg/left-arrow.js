import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeftArrowIcon = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path
      id="a"
      fill="#333132"
      d="M11.8655276,0.841160983 C12.0539446,0.639285645 12.0430345,0.322891206 11.8411591,0.134474224 C11.6392838,-0.0539427582 11.3228893,-0.0430326051 11.1344724,0.158842733 L4.13447237,7.65884273 C3.95521267,7.8509067 3.95517094,8.14894447 4.13437685,8.34105862 L11.1343769,15.84527 C11.3227373,16.0471981 11.6391287,16.0581969 11.8410568,15.8698364 C12.0429848,15.681476 12.0539836,15.3650846 11.8656231,15.1631565 L5.18385346,8.0000976 L11.8655276,0.841160983 Z"
    />
  </Svg>
);

module.exports = LeftArrowIcon;
