import React from 'react';

import Header from "./components/Layouts/Header/Index";
import Footer from "./components/Layouts/Footer/Index";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Toastify
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
            <RoutesApp />
          <Footer />

          <ToastContainer autoClose={3000}/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
