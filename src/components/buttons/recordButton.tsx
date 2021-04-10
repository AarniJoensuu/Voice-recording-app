import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import buttonStyles from "./styles";

interface ComponentProps {}
interface ComponentState {
  buttonColors: string[],
  currentColorIndex: number
}

export default class RecordButton extends Component <ComponentProps, ComponentState> {
  constructor(props:any) {
    super(props);
    this.state = {
      buttonColors: ["red", "blue", "green"],
      currentColorIndex: 0
    }
  }

  getButtonStyle() {
    const staticStyle = buttonStyles.recordButton;
    const fullStyle = {
      ...staticStyle,
      ...{ backgroundColor: this.state.buttonColors[this.state.currentColorIndex] }
    }
    return fullStyle;
  }

  onPress = () => {
    let currentColorIndex = this.state.currentColorIndex;
    ++currentColorIndex;
    if (currentColorIndex + 1 > this.state.buttonColors.length) {
      currentColorIndex = 0;
    } 
    this.setState({ currentColorIndex });
  }

  render() {
    const buttonStyle = this.getButtonStyle();

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.onPress}
        style={buttonStyle}
      >
        <View style={buttonStyles.buttonTextContainer} >
          <Text style={[buttonStyles.centerText, buttonStyles.whiteText]}>
            Press down to record
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
