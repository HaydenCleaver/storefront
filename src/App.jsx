
import './App.css';
import Categories from './components/storefront/categories';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Products from './components/storefront/products';

function App() {
  return (
    <>
      <Header/>
      <Categories/>
      <br/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
