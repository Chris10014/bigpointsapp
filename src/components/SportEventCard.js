import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import {  
    Card, CardBody, 
    CardImg, CardImgOverlay, 
    CardTitle
} from "reactstrap";
import {Glyphicon} from "./Glyphicon";
import { renderEventVisual } from "./Helpers";
import { format } from "date-fns";

const SportEventCard = ({ sportEvent, eventDate }) => {

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-3">
        <Card key={eventDate.id} className="h-100 text-white bg-dark">
          <CardBody>
            <Link className="text-decoration-none text-white" to={`/sportEvents/${sportEvent.id}/${eventDate.id}`} /*link to the sportEvent details */>
              <CardImg
                className="card-img-over mb-3"
                src={
                  // "/assets/images/event-visuals/" +
                  renderEventVisual(sportEvent)
                }
                alt=""
              />
              <CardImgOverlay>
                <CardTitle>
                  <div className="bg-dark-transparent">
                    <h6 className="d-flex justify-content-between">                      
                        <span className="col-10">
                          {(eventDate.start && !eventDate.end) || (eventDate.start && eventDate.end && eventDate.start === eventDate.end)
                            ? format(new Date(eventDate.start), "dd.MM.yyyy")
                            : null}
                          {eventDate.end && eventDate.start && eventDate.end !== eventDate.start
                            ? format(new Date(eventDate.start), "dd.MM.yyyy") +
                              " - " +
                              format(new Date(eventDate.end), "dd.MM.yyyy")
                            : null}
                          {!eventDate.start ? "nicht terminiert" : null}
                          {/*renders sportEvent.end only if itself and sportEvent.start exist and != null */}
                        </span>
                        <span className="col-2">
                          <img className="img-fluid" src={"assets/images/country-flags/svg/" + sportEvent.country.country_code.toLowerCase() + ".svg"} alt={sportEvent.country.country_name} align="absmiddle" />
                        </span>                      
                    </h6>
                    <h4 className="">{sportEvent.name}</h4>
                  </div>
                  {/* /.bg-dark-transparent */}
                </CardTitle>
              </CardImgOverlay>
              <CardBody>
                <h6 className="mt-2 text-dimmed">{sportEvent.host.team_name}</h6>
                <p className="card-text text-dimmed">
                  <small>
                    in {sportEvent.postal_code} {sportEvent.city}
                  </small>
                </p>
                <ul className="list-unstyled">
                  {sportEvent.races.map((race) => {
                    return (
                      <li key={race.id}>
                        {race.name}
                        <span className="text-dimmed p-3">
                          <Glyphicon icon={race.sport.code} />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardBody>
            </Link>
            <a className="mt-auto card-link text-decoration-none" href={sportEvent.homepage} target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Homepage
            </a>
          </CardBody>
        </Card>
      </div> 
  )
}

export default SportEventCard
