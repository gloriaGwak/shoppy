import React, { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
// import { auth, db } from './firebase';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";


function App() {
  return (
      <>
        <div className="wrap">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
  );
}

export default App;
