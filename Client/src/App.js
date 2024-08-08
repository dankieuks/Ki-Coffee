import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Components/Layout/DefaultLayouts";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Auth from "./Pages/Auth/Auth";

function App() {
  const publicRouter = [
    { path: "/", pages: Home },
    { path: "/menu", pages: Menu },
    { path: "/login", pages: Auth },
    { path: "/register", pages: Auth },
  ];

  return (
    <Router>
      <Routes>
        {publicRouter.map((route, index) => {
          const Layout = route.Layout ? route.Layout : DefaultLayout;
          const Page = route.pages;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path="" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
