import { Outlet } from "react-router-dom";
import Head from "./header/Head";
import Footer from "./home/Footer";




const Layout = () => {
  return (
    <>
    <header className="header">
    <Head />
    </header>
      <main>
      <Outlet />
       </main> 
       <Footer />
    </>
  )
};

export default Layout;
