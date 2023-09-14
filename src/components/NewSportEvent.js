import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Input, Label, Form, FormGroup, Col } from "reactstrap";
import EventContext from "../context/EventContext";
import api from "../api/axios";

const NewSportEvent = () => {

    const { sportEvents, setSportEvents, 
        countries,
        teams, setTeams } = useContext(EventContext);
    const [eventName, setEventName] = useState("");
    const [eventHost, setEventHost] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [eventLocation, setEventLocation] = useState({ postalCode: "", city: "", country: "" });
    const [homepage, setHompage] = useState("");

    const navigate = useNavigate();

    //dates and races to be added

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("eventLocation: ", eventLocation)
        const newEvent = {
            name: eventName,
            host_id: teams.find((team) => team.team_name === eventHost).id,
            postal_code: eventLocation.postalCode,
            city: eventLocation.city,
            country_id: countries.find((country) => country.country_name_de.toLowerCase() === eventLocation.country.toLowerCase()).id,
            homepage: homepage
        }
        const date = { start: startDate, end: endDate }

        console.log("am: ", date)
        try {
            const response = await api.post("/sportEvents", newEvent);
            const allEvents = [...sportEvents, response.data];
            try {
                console.log("resp: ", response.data)
            } catch (err) {
                if(err) {
                    console.log("err", err)
                }
            }           
            setSportEvents(allEvents);
            navigate('/');
        } catch(err) {
            if(err.response) {
                // not in the 200 response
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`)
            }  

        }
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
                        list="existingEvents"                    
                        autoComplete="off"
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                    <small id="eventNameHelp" className="form-text text-muted">Name der Veranstaltung, wie sie vom Versanstalter benannt ist. Ohne Sponsorennennung.</small>
                </Col>
                {/* datalist for event name input field */}
                <datalist id="existingEvents">
                    {sportEvents.map((event) => {
                        return event.name.toLowerCase().includes(eventName.toLowerCase()) ? <option key={event.id} value={event.name}></option> : null;
                    })}
                </datalist>              
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
                        list="existingTeams"                    
                        autoComplete="off"
                        onChange={(e) => setEventHost(e.target.value)}
                        required
                    />
                    <small id="eventHostHelp" className="form-text text-muted">Name des Veranstalters eingeben.</small>
                </Col> 
                {/* datalist for event name input field */}
                <datalist id="existingTeams">
                    {teams.map((host) => {
                        return host.team_name.toLowerCase().includes(eventHost.toLowerCase()) ? <option key={host.id} value={host.team_name}></option> : null;
                    })}
                </datalist>                 
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
                    placeholder="https://www.beispiel-veranstaltung.de ..."
                    value={homepage}
                    onChange={(e) => setHompage(e.target.value)}
                    required
                />
                <small id="homepageHelp" className="form-text text-muted">Homepage der Veranstaltung oder des Veranstalters.</small>
            </FormGroup>
            <Row>
                <Col md={3}>
                    <FormGroup>
                    <Label htmlFor="startDate">Beginn</Label>
                    <Input 
                        type="date" 
                        className="form-control" 
                        id="startDate" 
                        aria-describedby="startDate" 
                        placeholder="TT.MM.JJJJ"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                    <small id="eventDateHelp" className="form-text text-muted"></small>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                    <Label htmlFor="endDate">Ende</Label>
                    <Input 
                        type="date" 
                        className="form-control" 
                        id="endDate" 
                        aria-describedby="endDate" 
                        placeholder="TT.MM.JJJJ"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <small id="eventDateHelp" className="form-text text-muted"></small>
                    </FormGroup>
                </Col>
            

            </Row>
            

            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    </main>
    
  )
}

export default NewSportEvent