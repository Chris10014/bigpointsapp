import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Input, Label, Form, FormGroup, Col } from "reactstrap";
import EventContext from "../context/EventContext";

const NewSportEvent = () => {

    const { sportEvents, setSportEvents, countries } = useContext(EventContext);
    const [eventName, setEventName] = useState("");
    const [eventHost, setEventHost] = useState("");
    const [eventLocation, setEventLocation] = useState({ postalCode: "", city: "", country: "" });
    const [homepage, setHompage] = useState("");

    //dates and races to be added

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("name: ", eventName, " host: ", eventHost, " Location: ", eventLocation, " HP: ", homepage);
        console.log("eventLocation: ", eventLocation)
    }


  return (
    <main className="container">
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to="/sportEvents">Veranstaltungen</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Veranstaltung eintragen</BreadcrumbItem>
        </Breadcrumb>
        <hr />
        <h2>Neue Veranstaltungen eintragen</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="eventName">Name</Label>
                <Col>
                    <Input 
                        type="text" 
                        className="form-control" 
                        id="eventName" 
                        aria-describedby="eventNameHelp" 
                        placeholder="Name der Veranstaltung ..."
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <small id="eventNameHelp" className="form-text text-muted">Name der Veranstaltung, wie sie vom Versanstalter benannt ist. Ohne Sponsorennennung.</small>
                    required
                </Col>                
            </FormGroup>            
            <FormGroup>
                <Label htmlFor="eventHost">Veranstalter</Label>
                <Col>
                    <Input 
                        type="text" 
                        className="form-control" 
                        id="eventHost" 
                        aria-describedby="eventHostHelp" 
                        placeholder="Name des Veranstalters ..."
                        value={eventHost}
                        onChange={(e) => setEventHost(e.target.value)}
                        required
                    />
                    <small id="eventHostHelp" className="form-text text-muted">Name des Veranstalters eingeben.</small>
                </Col>                
            </FormGroup> 
            <Row>              
                <Col md={2}>         
                    <FormGroup>
                    <Label htmlFor="postalCode">PLZ</Label>
                        <Input 
                            type="number" 
                            className="form-control" 
                            id="postalCode" 
                            aria-describedby="postalCodeHelp" 
                            placeholder="PLZ ..."
                            value={eventLocation.postalCode}
                            onChange={(e) => setEventLocation({...eventLocation, postalCode: e.target.value})}
                            required
                        />
                        <small id="postalCodeHelp" className="form-text text-muted">Postleitzahl</small>
                    </FormGroup>
                </Col>
                <Col mg={6}>
                    <FormGroup>
                    <Label htmlFor="city">Ort</Label>                   
                        <Input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            aria-describedby="cityHelp" 
                            placeholder="Veranstaltungsort ..."
                            value={eventLocation.city}
                            onChange={(e) => setEventLocation({...eventLocation, city: e.target.value})}
                            required
                        />
                        <small id="cityHelp" className="form-text text-muted">Veranstaltungsort eingeben.</small>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label htmlFor="country">Land</Label>                   
                        <Input 
                            type="text" 
                            className="form-control" 
                            id="country" 
                            aria-describedby="countryHelp" 
                            placeholder="Veranstaltungsland ..."
                            value={eventLocation.country}
                            list="countriesDe"                    
                            autoComplete="off"
                            onChange={(e) => setEventLocation({...eventLocation, country: e.target.value})}
                            required
                        />
                        <small id="countryHelp" className="form-text text-muted">Veranstaltungsland in deutsch eingeben.</small>
                                    
                        {/* datalist for country search input field */}
                        <datalist id="countriesDe">
                            {countries.map((country) => {
                                return country.country_name_de ? <option key={country.id} value={country.country_name_de}></option> : <option key={country.id} value={country.country_name_en}></option>;
                            })}
                        </datalist>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label htmlFor="homepage">Homepage</Label>
                <Input 
                    type="text" 
                    className="form-control" 
                    id="homepage" 
                    aria-describedby="homepage" 
                    placeholder="Name des Veranstalters ..."
                    value={homepage}
                    onChange={(e) => setHompage(e.target.value)}
                    required
                />
                <small id="homepageHelp" className="form-text text-muted">Homepage der Veranstaltung oder des Veranstalters.</small>
            </FormGroup>              
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    </main>
    
  )
}

export default NewSportEvent