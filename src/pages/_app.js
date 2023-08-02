import { Provider } from 'react-redux';
import store from '../redux/store';
import WatcherPrice from '../components/watcherPrice/WatcherPrice';
import '../styles/globalStyle.scss';



function MyApp({ Component, pageProps }) {

    return (
      <Provider store={store}>
        <WatcherPrice/>
        <Component {...pageProps} />
      </Provider>
    );
  }

  export default MyApp;