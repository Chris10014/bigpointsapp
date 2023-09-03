import { useContext } from 'react';
import {
    Row, Col, Label, Input, InputGroup,
    Breadcrumb, BreadcrumbItem
} from "reactstrap";
import { FaClipboard, FaFlag, FaCalendarPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Loading } from "./Loading";
import EventContext from "../context/EventContext";

import SportEventFeed from './SportEventFeed';

export const SportEventsList = () => {
    const { eventsLoading, eventsFetchError,
            countries,
            eventSearch, setEventSearch, dateSearch, setDateSearch, countrySearch, setCountrySearch, searchResult } = useContext(EventContext);


    return (        
        <main className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Veranstaltungen</BreadcrumbItem>
            </Breadcrumb>
            <hr />
            <div className="d-flex justify-content-between">
                <h2>Veranstaltungen</h2>
                <span>
                    <Link to="create">
                        <FaCalendarPlus className="text-muted m-1" size="30px" color="black" />
                        <button 
                            type="button" 
                            className="btn btn-success" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Neue Veranstaltung eintragen"> Neue Veranstaltung
                        </button>
                    </Link>
                </span>
            </div>             
            {(searchResult.map((event) => event.name))}    
            <Row className="mb-3">
                <Col md={5}>
                    <Label htmlFor="eventSearch">Veranstaltung:</Label>
                    <InputGroup>
                        <Input 
                            type="search" 
                            id="eventSearch" 
                            name="eventSearch" 
                            placeholder="Name oder PLZ oder Ort ..." 
                            value={eventSearch}  
                            onChange={(e) => setEventSearch(e.target.value)}
                            aria-describedby="eventSearchHelp"
                        />
                        <span className="input-group-text">
                        <FaClipboard />
                        </span>
                    </InputGroup>
                    <div className="form-text" id="eventSearchHelp">
                        Name, Postleitzahl oder Ort eingeben.
                    </div>
                    </Col> {/* / md-5 */}

                    <Col md={3}>
                    <Label htmlFor="dateSearch">Datum:</Label>
                    <InputGroup>
                        <Input 
                            type="date" 
                            id="dateSearch" 
                            name="dateSearch" 
                            placeholder="TT.MM.JJJJ" 
                            value={dateSearch}
                            onChange={(e) => setDateSearch(e.target.value)}
                            aria-describedby="dateSearchHelp"
                        /> 
                    </InputGroup>
                    <div className="form-text" id="dateSearchHelp">
                        Startdatum eingeben.
                    </div>
                    </Col> {/* / md-3 */}
                    <Col md={4}>
                    <Label htmlFor="countrySearch">Land:</Label>
                    <InputGroup>
                        <Input 
                            type="text" 
                            id="countrySearch" 
                            name="countrySearch" 
                            placeholder="Land ..." 
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            list="countriesDe"                    
                            autoComplete="off"
                            aria-describedby="countrySearchHelp"
                        />
                        <span className="input-group-text">
                        <FaFlag />
                        </span>
                    </InputGroup>
                    <div className="form-text" id="countrySearchHelp">
                        Land eingeben.
                    </div>
                </Col> {/* / md-4 */}
            </Row>
            {/* datalist for country search input field */}
            <datalist id="countriesDe">
                {countries
                .filter((country) => {
                    if (countrySearch === null) {
                    //do nothing
                    } else if (country.country_name_de ? country.country_name_de.toLowerCase().startsWith(countrySearch.toLocaleLowerCase()) : "" || country.country_name_en.toLowerCase().startsWith(countrySearch.toLocaleLowerCase())) {
                    return country;
                    }
                })
                .map((country) => {
                    return country.country_name_de ? <option key={country.id} value={country.country_name_de}></option> : <option key={country.id} value={country.country_name_en}></option>;
                })}
            </datalist>

            <Row>
                {eventsLoading && <Loading />}
                {!eventsLoading && eventsFetchError && <p>{eventsFetchError}</p>}
                {!eventsLoading && !eventsFetchError && (searchResult.length ? <SportEventFeed filteredAndSortedSportEvents={searchResult} />
                    : <p className="statusMsg">Keine Versanstaltungen gefunden, die zu den Suchkriterien passen.</p>)}
            </Row>
           
        </main>        
    )
}

export default SportEventsList;