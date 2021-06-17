import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
  state = {
    title: '',
    text: '',
  };
  setTitle = title => this.setState({title});
  setText = text => this.setState({text});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}>Note Title</Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={this.setTitle}
          value={this.state.title}
        />
        <Text style={styles.textAreaTitle}>Please enter your note below </Text>
        <TextArea
          text={this.state.text}
          style={styles.textArea}
          onTextChange={this.setText}
        />
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn}>Save</Text>
            <Text style={styles.characterCount}>
              {this.state.text.length} characters
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
