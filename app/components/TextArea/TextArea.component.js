import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from './TextArea.component.style';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';

class TextArea extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func,
  };

  render() {
    const {text, onTextChange, ...extraProps} = this.props;
    const alignTextTop =
      Platform.OS === 'android' ? {textAlignVertical: 'top'} : {};
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, alignTextTop, extraProps.styles]}
        multiline={true}
        onChangeText={onTextChange}
        value={text}
      />
    );
  }
}

export default TextArea;
