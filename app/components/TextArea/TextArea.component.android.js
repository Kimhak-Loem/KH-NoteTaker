import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from './TextArea.component.style';
import PropTypes from 'prop-types';

class TextArea extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func,
  };

  render() {
    const {text, onTextChange, ...extraProps} = this.props;
    const alignTextTop = {textAlignVertical: 'top'};
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, alignTextTop, extraProps.style]}
        multiline={true}
        onChangeText={onTextChange}
        value={text}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}

export default TextArea;
