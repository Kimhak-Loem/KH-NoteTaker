import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import styles from './TextArea.component.style';
import {Platform} from 'react-native'

class TextArea extends Component {
    state = {
        text : ''
    }

    render() {
        const {...extraProps} = this.props;
        const alignTextTop = Platform.OS === 'android' ? {textAlignVertical: 'top'} : {}
        return (
            <TextInput
                {...extraProps}
                style = {[styles.textArea, extraProps.styles]}
                multiline = {true}
                onChangeText = {(text) => this.setState({text})}
                value = {this.state.text}
            />
        );
    }
}

export default TextArea;
