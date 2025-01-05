import React from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import { AuthContextProvider } from "./context/AuthContext";
// import { auth, db } from './firebase';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";


function App() {
  return (
      <>
        <AuthContextProvider>
          <div className="wrap">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </AuthContextProvider>
      </>
  );
}

export default App;
