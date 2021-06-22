import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutDevs.styles';
import result from 'lodash/result';
import t from '../../utils/language.utils';

class AboutDevs extends Component {
  static navigationOptions = {
    title: 'About Devs',
  };

  render() {
    const navigatingFrom = result(
      this.props,
      'navigation.state.params.navigatingFrom',
      '',
    );
    return (
      <View style={styles.container}>
        <Text> {t('ABOUT_theCreatorsDesc')} </Text>
        {navigatingFrom ? (
          <Text>Navigating from: {navigatingFrom} </Text>
        ) : null}
      </View>
    );
  }
}

AboutDevs.defaultProps = {};
AboutDevs.propTypes = {};

export default AboutDevs;
