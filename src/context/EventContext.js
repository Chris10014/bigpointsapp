import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { format } from "date-fns";
import { baseUrl } from "../api/baseUrl";

const EventContext = createContext({});

export const EventProvider = ({ children }) => {

    const [sportEvents, setSportEvents] = useState([]);
    const [countries, setCountries] = useState([]);
    const [eventSearch, setEventSearch] = useState("");
    const [dateSearch, setDateSearch] = useState(format(new Date(), "yyyy-MM-dd"));
    const [countrySearch, setCountrySearch] = useState("");
    const [today] = useState(format(new Date(), "yyyy-MM-dd"))
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const { data: eventsData, fetchError: eventsFetchError, isLoading: eventsLoading } = useAxiosFetch(`${baseUrl}sportEvents`);
    const { data: countriesData, fetchError: countriesFetchError, isLoading: countriesLoading } = useAxiosFetch(`${baseUrl}countries`);

    useEffect(() => {
        setSportEvents(eventsData);
    }, [eventsData])

    useEffect(() => {
        setCountries(countriesData);
    }, [countriesData])

    useEffect(() => {
        /**
         * To persist the input data of the search fields when a user clicked on event details and then back to the overview.
         * If the user closes the browser window, the sessionStorage will be cleared and the default value of the states are loaded when the page is opened again.
         */
        sessionStorage.getItem("eventSearch") !== null ? setEventSearch(sessionStorage.getItem("eventSearch")) : setEventSearch("");
        sessionStorage.getItem("dateSearch") !== null ? setDateSearch(sessionStorage.getItem("dateSearch")) : setDateSearch(today);
        sessionStorage.getItem("countrySearch") !== null ? setCountrySearch(sessionStorage.getItem("countrySearch")) : setCountrySearch("");
      }, [today]
    );

    useEffect(() => {       
            const filteredSportEvents = sportEvents.filter((sportEvent) => (
                (sportEvent.name).toLowerCase().includes(eventSearch.toLowerCase())
                || (sportEvent.postal_code).toString().startsWith(eventSearch) 
                || (sportEvent.city).toLowerCase().startsWith(eventSearch.toLowerCase()) 
                || sportEvent.races.find((race) => (race.name).toLowerCase().includes(eventSearch.toLowerCase()))
            )).filter((sportEvent) => (
                (sportEvent.country.country_name_de).toLowerCase().startsWith(countrySearch.toLowerCase())
            ))

            // Gruppieren von Eventdaten in separaten Arrays
            const groupedAndFilterdEventDates = filteredSportEvents.reduce((groups, sportEvent) => {
                sportEvent.eventDates.forEach((eventDate) => {
                const groupKey = new Date(eventDate.start).toDateString(); // Gruppierung nach Datum
                groups[groupKey] = groups[groupKey] || { date: eventDate.start, events: [] };
                groups[groupKey].events.push({ event: sportEvent, date: eventDate });
                });
                return groups;
            }, {});
            // Erstellen eines Array mit den sortierten Events um js methoden sort() und map() anwenden zu können
            const sortedAndFilterdEvents = [];
            for (const groupKey in groupedAndFilterdEventDates) {
                sortedAndFilterdEvents.push(...groupedAndFilterdEventDates[groupKey].events);
            }

            setSearchResult(sortedAndFilterdEvents); // {event: event.event, date: event.date}
        }, [sportEvents, eventSearch, dateSearch, countrySearch]
    )

    return (
        <EventContext.Provider value={{  
            eventsFetchError, eventsLoading,
            sportEvents, setSportEvents,
            countries, setCountries,
            eventSearch, setEventSearch, dateSearch, setDateSearch, countrySearch, setCountrySearch, searchResult,
            navigate
         }}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContext;