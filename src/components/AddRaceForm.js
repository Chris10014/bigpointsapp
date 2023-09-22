import { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import { FaPlusCircle } from "react-icons/fa";
import RaceInputForm from "./RaceInputForm";
import CourseInputForm from "./CourseInputForm";

const AddRaceForm = () => {
  const [courseForms, setCourseForms] = useState([{ sport: "", distance: "" }]);
  const [raceForms, setRaceForms] = useState([{ raceName: "", sport: "", competition: false, virtual: false }]);
  // const [distance, setDistance]  = useState("");
  // const [sport, setSport] = useState("");
  
  const addCourseForm = () => {
    setCourseForms([...courseForms, { sport: "", distance: ""  }]);
  };
  const addRaceForm = () => {
    setRaceForms([...raceForms, { raceName: "", sport: "", competition: false, virtual: false  }]);
  };
  
  const handleRaceSportChange = (index, e) => {   
    const updatedForms = [...raceForms];
    updatedForms[index].sport = e.target.value;
    setRaceForms(updatedForms);
  };

  const handleRaceNameChange = (index, e) => {   
    const updatedForms = [...raceForms];
    updatedForms[index].raceName = e.target.value;
    setRaceForms(updatedForms);
  };

  const handleCompetitionChange = (index, e) => {   
    const updatedForms = [...raceForms];
    updatedForms[index].competition = !updatedForms[index].competition;
    setRaceForms(updatedForms);
  };

  const handleVirtualChange = (index, e) => {   
    const updatedForms = [...raceForms];
    updatedForms[index].virtual = !updatedForms[index].virtual;
    setRaceForms(updatedForms);
  };

  const handleRaceDelete = (index) => {
    const updatedForms = [...raceForms];
    updatedForms.splice(index, 1);
    setRaceForms(updatedForms);   
  };

  const handleCourseSportChange = (index, e) => {   
    const updatedForms = [...courseForms];
    updatedForms[index].sport = e.target.value;
    setCourseForms(updatedForms);
  };

  const handleDistanceChange = (index, e) => {    
    const updatedForms = [...courseForms];
    updatedForms[index].distance = e.target.value;
    setCourseForms(updatedForms);
  };

  const handleCourseDelete = (index) => {
    const updatedForms = [...courseForms];
    updatedForms.splice(index, 1);
    setCourseForms(updatedForms);   
  };

  return (
    <div className="container">
      <Row>
          <h4>Wettkampf</h4>
        </Row>
      <Row>
        <Col md={4}>
          <Button className="bg-success mt-3 mb-5" onClick={(e) => addRaceForm(e)}><FaPlusCircle className="p-1" size="30px" color="white" />Wettkampf</Button>
        </Col>
      </Row>
      <Row>
      {raceForms.map((form, index) => (
          <RaceInputForm
            key={index}
            number={index + 1}
            sport={form.sport}
            raceName={form.raceName}
            competition={form.competition}
            virtual={form.virtual}
            handleSportChange={(e) => handleRaceSportChange(index, e)}
            handleNameChange={(e) => handleRaceNameChange(index, e)}
            handleCompetitionChange={(e) => handleCompetitionChange(index, e)}
            handleVirtualChange={(e) => handleVirtualChange(index, e)}
            handleDelete={raceForms.length > 1 ? () => handleRaceDelete(index) : null}
          />
        ))}
        </Row>
        <hr />
        <br />
        <Row>
          <h4>Wettkampfstrecken</h4>
        </Row>
      <Row>
        <Col md={4}>
          <Button className="bg-success mt-3 mb-5" onClick={(e) => addCourseForm(e)}><FaPlusCircle className="p-1" size="30px" color="white" />Wettkampfstrecke</Button>
        </Col>
      </Row>
      <Row className="mt-3"> 
        {courseForms.map((form, index) => (
          <CourseInputForm
            key={index}
            number={index + 1}
            sport={form.sport}
            distance={form.distance}
            handleSportChange={(e) => handleCourseSportChange(index, e)}
            handleDistanceChange={(e) => handleDistanceChange(index, e)}
            handleDelete={courseForms.length > 1 ? () => handleCourseDelete(index) : null}
          />
        ))}
      </Row>
      <Button>
        Submit
      </Button>
    </div>
    
    
  )
 
}

export default AddRaceForm;
