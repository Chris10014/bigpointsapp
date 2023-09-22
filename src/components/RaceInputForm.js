import { useContext } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { FaTrash } from "react-icons/fa";
import EventContext from "../context/EventContext";

const RaceInputForm = ({
    number,  
    sport, 
    raceName,
    competition,
    virtual,
    handleSportChange, 
    handleNameChange,
    handleCompetitionChange, 
    handleVirtualChange,
    handleDelete 
}) => {
   
    const { sports } = useContext(EventContext);

    return (
        
        <Form>           
            <p className="text-muted">
                Wettbewerb #{number}
            </p>      
            <FormGroup>                    
                <Label for="raceName">Name</Label>
                <Input
                    id="raceName"
                    name="raceName"
                    value={raceName}
                    placeholder="Wettkampf ..."
                    type="text"
                    onChange={handleNameChange}
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
                            value={sport}
                            onChange={handleSportChange}
                        >
                            <option key="z"></option>
                            { sports.map((sport) => { 
                                return <option key={sport.id} value={sport.sport_de}>{sport.sport_de}</option>
                            })}
                        </Input>
                    </FormGroup>
                </Col>                
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="competition">
                            <Input
                                type="checkbox"
                                id="competition"
                                name="competition"
                                checked={competition}                           
                                onChange={handleCompetitionChange}                    
                            />{" "}Ohne Wertung (z. B. Volkslauf)
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Row className="d-flex justify-content-between">
                            <span className="col-md-4">
                                <Label for="virtual">
                                    <Input
                                    type="checkbox"
                                    id="virtual"
                                    name="virtual"
                                    checked={virtual}                           
                                    onChange={handleVirtualChange}                    
                                    />{' '}virtuell
                                </Label>
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
            <Button>
                Submit
            </Button>
            <hr />
        </Form>
    )    
}

export default RaceInputForm;