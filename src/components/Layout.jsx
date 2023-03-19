import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ amountActive, amountFinished }) => {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer amountActive={amountActive} amountFinished={amountFinished} />
        </footer>
      </div>
    </>
  );
};

export default Layout;
