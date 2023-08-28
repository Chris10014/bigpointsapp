import { useContext } from "react";
import EventContext from "../context/EventContext";

import SportEventCard from "./SportEventCard";


const SportEventFeed = ({ filteredAndSortedSportEvents }) => {
    const { dateSearch } = useContext(EventContext);

    return (
        <>
        {
        filteredAndSortedSportEvents.sort((a, b) => new Date(a.date.start) - new Date(b.date.start))
                .map((event) => dateSearch === "" ? <SportEventCard key={event.date.id} sportEvent={event.event} eventDate={event.date}/>
                    : new Date(event.date.start) >= new Date(dateSearch) ? <SportEventCard key={event.date.id} sportEvent={event.event} eventDate={event.date}/>
                        : null        
                )
        }
        </>
    )
}

export default SportEventFeed