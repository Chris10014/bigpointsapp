import { useState, useContext } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import EventContext from "../context/EventContext";

const CourseInputForm = ({ key }) => {
    /*
  sport_id number
  distance
  **/
    const [distance, setDistance]  = useState("");
    const [sport, setSport] = useState("");

    const { sports } = useContext(EventContext);

    return (
        
        <Form key={key}>            
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="sport">
                            Sportart:
                        </Label>
                        <Input
                            id="sport"
                            name="sport"
                            placeholder="Sportart ..."
                            type="select"
                            onChange={(e) => setSport(e.target.value)}
                        >
                            { sports.map((sport) => <option key={sport.id}>{sport.sport_de}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="distance">
                            Länge:
                        </Label>                        
                        <Input
                            className="input-group"
                            id="distance"
                            name="distance"
                            placeholder="Streckenlänge in km"
                            type="text"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </FormGroup>
                </Col>              
            </Row>           
            <Button>
                Submit
            </Button>
        </Form>
    )    
}

export default CourseInputForm;