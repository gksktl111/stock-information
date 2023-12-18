import './App.css';
import HomePageNav from './components/homePage/HomePageNav';
import Home from './page/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <HomePageNav />
      <Home />
    </>
  );
}

export default App;
