import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header />
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" >
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>

    </div>
  );
}

export default App;
