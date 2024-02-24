import {I18nextProvider} from 'react-i18next';
import {SafeAreaView} from 'react-native';

import i18n from './i18n';
import Lab7 from './src/lab7/Lab7';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView>
        <Lab7 />
      </SafeAreaView>
    </I18nextProvider>
  );
}
