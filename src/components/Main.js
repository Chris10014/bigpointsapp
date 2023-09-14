import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Missing from "./Missing";
import SportEventsList from "./SportEventsList";
import SportEventDetails from "./SportEventDetails";
<<<<<<< HEAD
import NewSportEvent from "./NewSportEvent";
=======
import AddRaceForm from "./AddRaceForm";
>>>>>>> cf9ff316d4e35b75186f543c1794e6221ed29456

const  Main = () => {

  return(
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="sportEvents">
          <Route index element={<SportEventsList />} />
          <Route path=":sportEventId/:eventDateId" element={<SportEventDetails />} />
          <Route path="create" element={<NewSportEvent />} />
        </Route>
        <Route path="addRaces" element={<AddRaceForm />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )  
};

export default Main;