import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BottomNavbar from "./components/BottomNavbar";
import Loading from "./components/Loading";
import { PostsProvider } from "./context";
import { Posts } from "./pages";

const routes = [
  {
    key: 1,
    path: "/posts",
    element: <Posts />,
  },
  {
    key: 2,
    path: "/favorites",
    element: <div className="favorites">В разработке...</div>,
  },
  {
    key: 3,
    path: "/settings",
    element: <div className="settings">В разработке...</div>,
  },
];

const App: React.FC = () => {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Loading />
        <Routes>
          {routes.map((item) => {
            return <Route {...item} />;
          })}
        </Routes>
        <React.Fragment>
          <BottomNavbar />
        </React.Fragment>
      </BrowserRouter>
    </PostsProvider>
  );
};

export default App;
