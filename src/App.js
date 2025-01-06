import React from "react";
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <div className="wrap">
              <Header />
              <Outlet />
              <Footer />
            </div>
          </AuthContextProvider>
        </QueryClientProvider>
      </>
  );
}

export default App;
