import { useState, useContext } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import EventContext from "../context/EventContext";

const RaceInputForm = ({ key }) => {
    /*
  sportEvent_id number
  name text
  competition boolean
  sport_id number
  virtual boolean
  **/
    const [raceName, setRaceName]  = useState("");
    const [competition, setCompetition] = useState(false);
    const [virtual, setVirtual] = useState(false);
    const [sport, setSport] = useState("");

    const { sports } = useContext(EventContext);

    console.log("comp: ", competition, " vr: ", virtual)
    return (
        
        <Form key={key}>            
                <FormGroup>
                    <Label for="raceName">Name</Label>
                    <Input
                        id="raceName"
                        name="raceName"
                        value={raceName}
                        placeholder="Wettkampf ..."
                        type="text"
                        onChange={(e) => setRaceName(e.target.value)}
                    />
                </FormGroup>
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
            </Row>
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Label for="competition">
                            <Input
                                type="checkbox"
                                id="competition"
                                name="competition"
                                checked={competition}                           
                                onChange={(e) => setCompetition(!competition)}                    
                            />{" "}Ohne Wertung (z. B. Volkslauf)
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="virtual">
                            <Input
                            type="checkbox"
                            id="virtual"
                            name="virtual"
                            checked={virtual}                           
                            onChange={(e) => setVirtual(!virtual)}                    
                            />{' '}virtuell
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Button>
                Submit
            </Button>
        </Form>
    )    
}

export default RaceInputForm;