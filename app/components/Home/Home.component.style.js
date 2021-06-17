import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleHeading: {
    ...headingText,
  },
  titleTextInput: {
    ...textInput,
  },
  textAreaTitle: {
    ...headingText,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'italic',
  },
  textArea: {
    ...textInput,
  },
});
