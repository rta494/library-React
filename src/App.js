
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useState, useEffect } from "react";


function App() {
  const [cart, setCart] = useState([]);


  function addToCart(book) {
    setCart([ ...cart, book ])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/books' exact element={<Books books={books} />} />
      <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} />} />
      <Route path='/cart' element={<Cart books={books} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
