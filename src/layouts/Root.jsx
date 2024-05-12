import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";


const Root = () => {

    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  if (!loaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader></Loader>
      </div>
    );
  }

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


            <ToastContainer 
            position="top-right"
            autoClose={3000}
            theme="light"
            />
        </div>
    );
};

export default Root;