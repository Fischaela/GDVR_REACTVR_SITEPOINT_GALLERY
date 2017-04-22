import React from 'react';
import {
  Animated,
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

const Easing = require('Easing');

class Button extends React.Component {

  constructor(props) {
    super();

    this.state = {
      animatedTranslation: new Animated.Value(0),
    };
  }

  animateIn = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0.125,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  animateOut = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  onButtonClick = () => {
    this.props.onClick();
  }

  render () {

    return (
      <Animated.View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0.0125,
          transform: [
            {translateZ: this.state.animatedTranslation},
          ],
          width: 0.7,
        }}
      >
        <VrButton
          onClick={this.onButtonClick}
          onEnter={this.animateIn}
          onExit={this.animateOut}
        >
          <Image
            style={{
              width: 0.7,
              height: 0.7,
            }}
            source={asset(this.props.src)}
          >
          </Image>
        </VrButton>
      </Animated.View>
    );
  }
};

module.exports = Button;
