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
      <div className="container">
      <Footer />
      </div>
    </>
  )
};

export default Layout;
