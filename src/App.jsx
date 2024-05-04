import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import MyShelfPage from "./pages/MyShelfPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/MyShelf" element={<MyShelfPage />}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
