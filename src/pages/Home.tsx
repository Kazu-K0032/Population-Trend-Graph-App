import '../assets/css/front-page.css';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Main from '../layout/Main';

function Home() {
  return (
    <>
      <div className="l-app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
