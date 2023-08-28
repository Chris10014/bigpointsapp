import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import SportEventsList from "./SportEventsList";
import { EventProvider } from "../context/EventContext";
import SportEventDetails from "./SportEventDetails";

const  Main = () => {

  return(
    <div className="App">
      <EventProvider>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sportEvents" element={<SportEventsList />} />
            <Route path="/sportEvents/:sportEventId/:eventDateId" element={<SportEventDetails />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
      </EventProvider>      
    </div>
  )  
};

export default Main;