import { useContext } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import EventContext from "../context/EventContext";
import { Glyphicon } from "./Glyphicon";
import { renderEventVisual } from "./Helpers";
import { FaStopwatch, FaCircle } from "react-icons/fa";

const RaceCard = ({ race, sportEventId }) => {
  const { searchResult } = useContext(EventContext);
  const sportEvent = searchResult.find(sportEvent => sportEvent.event.id.toString() === sportEventId).event;

  return (
    <>
    <div key={race.id} className="col-12 col-md-6 col-lg-4 m-1">
        <Card className="text-white bg-dark">
          <CardBody>
            <CardImg className="card-img-over mb-3" src={renderEventVisual(sportEvent)} alt="" />
            <CardImgOverlay>
              <CardTitle>
                <div className="bg-dark-transparent">
                  <h2>{race.name}</h2>
                </div>
              </CardTitle>
            </CardImgOverlay>            
            <h4 className="d-flex justify-content-between m-1"><span>{race.sport.sport_de}</span>
              {" "}
              {race.competition ? (
                <span className="text-right">
                 {" "}{" "}
                  <FaStopwatch size="20px" />
                  {race.virtual ? " virtuell" : null}
                </span>
              ) : null}
              {/*Is the event a competition? */}
              </h4>               
              <hr />
              <p>{race.courses.length > 1 ? "Strecken " : "Strecke "}</p>
              <div className="d-flex justify-content-start">
                {race.courses.map((course, index) => {
                  return (                    
                      <span key={course.id}>
                      <Glyphicon icon={course.sport.code.toLowerCase()} />
                      {" "}{new Intl.NumberFormat("de-DE").format(course.distance * 1)} km
                      {/* Glyph for course and distance */}
                      {index < race.courses.length - 1 ? (
                        <span className="text-dimmed">
                        {" "}
                          <FaCircle size="10px" />
                        {" "}
                        </span>
                      ) : null} {/* Muted dot as separator between course data */}
                      {/* {auth.isAuthenticated ? (<p>Bearbeiten</p>) : null} */}
                    </span>                  
                  );                
                })}
              </div>          
          </CardBody>
        </Card>
      </div>
    </>
  )
    
}

export default RaceCard;