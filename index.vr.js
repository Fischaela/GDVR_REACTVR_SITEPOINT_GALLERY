import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';

export default class GDVR_REACTVR_SITEPOINT_GALLERY extends React.Component {

  constructor() {
    super();

    this.state = {
      src: 'reactconf_00.jpg',
    };
  }

  render() {

    return (
      <View>
        <Canvas
          src={this.state.src}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINT_GALLERY', () => GDVR_REACTVR_SITEPOINT_GALLERY);
