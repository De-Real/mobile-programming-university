import {I18nextProvider} from 'react-i18next';
import {SafeAreaView} from 'react-native';

import i18n from './i18n';
import Lab1 from './src/lab1/Lab1';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView>
        <Lab1 />
      </SafeAreaView>
    </I18nextProvider>
  );
}
