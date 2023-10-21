import React from "react";
import {Routes, Route} from "react-router-dom"
// import {Routes, Route, Link} from "react-router-dom"
import Header from "./layout/Header"
// import Home from "./pages/Home"
// import About from "./pages/About"
import Counter from "./pages/Counter"
// import Input from "./pages/Input"
// import Input2 from "./pages/Input2"
// import List from "./pages/List"
import Common from './assets/css/Common.css';
import Booking from "./pages/Booking"
import AddBooking from "./pages/AddBooking"
import EditBooking from "./pages/EditBooking"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/AddBooking" element={<AddBooking />} />
        <Route path="/EditBooking" element={<EditBooking />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
      {/* <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/addBooking" element={<addBooking />} />
        <Route path="/editBooking" element={<editBooking />} />
      </Routes> */}
    </div>
  );
}

export default App;
