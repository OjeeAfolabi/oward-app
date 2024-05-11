import { Route, Routes } from "react-router-dom"
import Login from "./components/Page/Login"
import Signup from "./components/Page/Signup"
import Cart from "./components/Page/Cart"
import SharedComponent from "./components/Page/Shared/SharedComponent"
import Home from "./components/Page/Home"
import Product from "./components/Page/Product"


function App() {

  return (
    <Routes>
     <Route path ="login" element={<Login/>}/>
     <Route path ="signup" element={<Signup/>}/>

     <Route path ="/" element={<SharedComponent/>}>
      <Route index element={<Home/>} />
      <Route path="product" element={<Product/>} />
      <Route path ="cart" element={<Cart/>} />
     </Route>

    </Routes>
  )
}

export default App
