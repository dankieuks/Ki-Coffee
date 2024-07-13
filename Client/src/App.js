import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Components/Layout/DefaultLayouts.jsx";
import Home from "./Pages/Home.jsx";
import Menu from "./Pages/Menu.jsx";

import Auth from "./Pages/Auth/Auth.jsx";

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
          const Layout = route.Layout === null ? Fragment : DefaultLayout;
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
        <Route path="" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
