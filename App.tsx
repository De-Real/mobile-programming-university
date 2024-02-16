import {I18nextProvider} from 'react-i18next';
import {SafeAreaView} from 'react-native';

import i18n from './i18n';
import Lab5 from './src/lab5/Lab5';
// Import the i18next configuration

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView>
        <Lab5 />
      </SafeAreaView>
    </I18nextProvider>
  );
}
