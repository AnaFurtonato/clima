import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';

function MeuApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MeuApp;
