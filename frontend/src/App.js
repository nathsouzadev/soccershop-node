import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Header/>
          <Routes/>
          <Footer/>
        </Router>
      </Provider>
  );
}

export default App;
