import { Provider } from 'react-redux';
import store from '../redux/store';
import WatcherPrice from '../components/watcherPrice/WatcherPrice';
import AutoPurchase from '../components/autoPurchase/AutoPurchase';
import '../styles/globalStyle.scss';



function MyApp({ Component, pageProps }) {

    return (
      <Provider store={store}>
        <WatcherPrice/>
        <AutoPurchase/>
        <Component {...pageProps} />
      </Provider>
    );
  }

  export default MyApp;