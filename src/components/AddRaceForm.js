import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import RaceInputForm from "./RaceInputForm";
import CourseInputForm from "./CourseInputForm";

const AddRaceForm = () => {

  return (
    <div className="container">
      <RaceInputForm />
      <CourseInputForm />
    </div>
    
  )
 
}

export default AddRaceForm;
