import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Missing from "./Missing";
import SportEventsList from "./SportEventsList";
import SportEventDetails from "./SportEventDetails";

const  Main = () => {

  return(
    <Routes>
      <Route path="/*" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="sportEvents">
        <Route index element={<SportEventsList />} />
        <Route path=":sportEventId/:eventDateId" element={<SportEventDetails />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  )  
};

export default Main;