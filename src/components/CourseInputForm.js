import { useContext } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { FaTrash } from "react-icons/fa";
import EventContext from "../context/EventContext";

const CourseInputForm = ({
    number,
    sport, 
    handleSportChange, 
    distance, 
    handleDistanceChange, 
    handleDelete }) => {
    /*
  sport_id number
  distance
  **/    

    const { sports } = useContext(EventContext);

    return (        
        <Form>
            <p className="text-muted">
                Strecke #{number}
            </p>          
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="sport">
                            Sportart:
                        </Label>
                        <Input
                            id="sport"
                            name="sport"
                            placeholder="Sportart ..."
                            type="select"
                            value= {sport}
                            onChange={handleSportChange}
                        >
                            <option key="z"></option>
                            { sports.map((sport) => <option key={sport.id} value={sport.sport_de}>{sport.sport_de}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label for="distance">
                            Länge:
                        </Label>
                        <Row className="d-flex justify-content-between">
                            <span className="col-5">                            
                                <Input
                                className="input-group"
                                id="distance"
                                name="distance"
                                placeholder="Streckenlänge"
                                type="text"
                                value={distance}
                                onChange={handleDistanceChange}
                                />                                                                 
                                km                          
                            </span>
                            <span className="col-2">
                                {
                                    handleDelete != null 
                                        ? <Button className="bg-danger" onClick={handleDelete}><FaTrash /></Button>
                                            : null
                                }                       
                            </span>              
                        </Row> 
                    </FormGroup>
                </Col>                                           
            </Row>
            <hr />        
        </Form>
    )    
}

export default CourseInputForm;