import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
      <Router>
        <Header/>
        <Routes/>
        <Footer/>
      </Router>
  );
}

export default App;
