import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'reactconf_00.jpg',
    buttonImageSrc: 'button-00.png',
  },
  {
    key: 1,
    imageSrc: 'reactconf_01.jpg',
    buttonImageSrc: 'button-01.png',
  },
  {
    key: 2,
    imageSrc: 'reactconf_02.jpg',
    buttonImageSrc: 'button-02.png',
  },
  {
    key: 3,
    imageSrc: 'reactconf_03.jpg',
    buttonImageSrc: 'button-03.png',
  }
];

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
        <UI
          buttonConfig={Config}
          onClick={(key)=>{
            this.setState({src: Config[key].imageSrc});
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINT_GALLERY', () => GDVR_REACTVR_SITEPOINT_GALLERY);
