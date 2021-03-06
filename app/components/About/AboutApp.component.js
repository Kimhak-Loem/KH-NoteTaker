import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles';
import result from 'lodash/result';
import t from '../../utils/language.utils';

class AboutApp extends Component {
  static navigationOptions = {
    title: 'About App',
  };

  render() {
    const navigatingFrom = result(
      this.props,
      'navigation.state.params.navigatingFrom',
      '',
    );
    return (
      <View style={styles.container}>
        <Text> {t('ABOUT_theAppDesc')} </Text>
        {navigatingFrom ? (
          <Text>Navigating from: {navigatingFrom} </Text>
        ) : null}
      </View>
    );
  }
}

AboutApp.defaultProps = {};
AboutApp.propTypes = {};

export default AboutApp;
