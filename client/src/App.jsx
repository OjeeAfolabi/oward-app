import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Cart from "./Page/Cart";
import SharedComponent from "./Page/Shared/SharedComponent";
import Home from "./Page/Home";
import Products from "./Page/Products";
// import axios from "axios";
import ProtectedRoutes from "./Page/Shared/ProtectedRoutes";
import {useState } from "react";
import SingleProduct from "./Page/SingleProduct";
import Search from "./components/Search";

// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.withCredentials = true;
// axios.defaults.headers.get['Accepts'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173'; // Replace with your actual origin
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

function App() {
  const [loggedin, setLoggedin] = useState();
  const [name, setName] = useState();
  const [cart, setCart] = useState();
  const[id,setId]= useState()

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route
        element={
          <ProtectedRoutes
            setName={setName}
            setCart={setCart}
            setId={setId}
            setLoggedin={setLoggedin}
            loggedin={loggedin}
          />
        }
      >
        <Route
          path="/"
          element={
            <SharedComponent
              name={name}
              id={id}
              cart={cart}
              setLoggedin={setLoggedin}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path=":productsID" element={<Products />} />
          <Route path=":productsID/:singleID" element={<SingleProduct setCart={setCart}/>} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} userID={id} />} />
          {/* <Route path="payment" element={<Payment/>} /> */}

          <Route path="search" element={<Search/>} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
