import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { format } from "date-fns";

import EventContext from "../context/EventContext";
import RaceFeed from "./RaceFeed";

const SportEventDetails = () => {
    const { searchResult } = useContext(EventContext);

    const [selectedSportEvent, setSelectedSportEvent] = useState({});
    const [selectedEventDate, setSelectedEventDate] = useState({});

    const { sportEventId } = useParams();
    const { eventDateId } = useParams();   
    
    useEffect(() => {
        // Suchen nach event.id
        const clickedSportEvent = searchResult.find(sportEvent => sportEvent.event.id.toString() === sportEventId);

        // Suchen nach date.id
        const clickedEventDate = searchResult.find(date => date.date.id.toString() === eventDateId);
        
        //State aktualisieren
        if (clickedSportEvent) {
            setSelectedSportEvent(clickedSportEvent.event)
        } 
        if(clickedEventDate) {
            setSelectedEventDate(clickedEventDate.date)
        }   

    },[searchResult, sportEventId, eventDateId])
 
    return (
        <main className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/sportEvents">Veranstaltungen</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{selectedSportEvent.name}</BreadcrumbItem>
            </Breadcrumb>
            <hr />

            <Row>
                <div className="col-8">
                    <h1>{selectedSportEvent.name}</h1>
                    <h3 className="d-inline text-muted">{selectedSportEvent.host ? selectedSportEvent.host.team_name : ""},</h3>
                    <h4 className="d-inline text-muted">
                    {" "}{selectedSportEvent.postal_code} {selectedSportEvent.city}
                    </h4>
                    <h5>
                        {(selectedEventDate.start && !selectedEventDate.end && format(new Date(selectedEventDate.start), "dd.MM.yyy"))} {/* nur Startdartum vorhanden */}
                        {(selectedEventDate.start && selectedEventDate.end && (selectedEventDate.start === selectedEventDate.end) && format(new Date(selectedEventDate.start), "dd.MM.yyy"))} {/* Startdatum == Enddatum */}
                        {(selectedEventDate.start && selectedEventDate.end && (format(new Date(selectedEventDate.start), "dd.MM.yyy") - format(new Date(selectedEventDate.end), "dd.MM.yyy")))}
                    </h5>
                </div>
                <div className="col-4">
                    <img className="img-fluid event-logo align-self-end" src={"/assets/images/event-logos/" + selectedSportEvent.logo} alt="" align="absmiddle" />
                </div>
            </Row>
            {selectedSportEvent.races 
                ? <div className="card-group align-content-center"><RaceFeed races={selectedSportEvent.races} sportEventId={sportEventId} /></div>
                    : null
            }
            
        </main>
    )
}

export default SportEventDetails