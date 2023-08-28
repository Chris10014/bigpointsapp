import { useContext } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
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
            <CardText>
              <h4 className="inline m-1">{race.sport.sport_de}</h4>
             {" "}
              {race.competition ? (
                <p className="inline">
                 {" "}{" "}
                  <FaStopwatch />
                  {race.virtual ? " virtuell" : null}
                </p>
              ) : null}
              {/*Is the event a competition? */}
              <hr />
              <p>{race.courses.length > 1 ? "Strecken " : "Strecke "}</p>
              {race.courses.map((course, index) => {
                return (
                  <span>
                    <Glyphicon icon={course.sport.code.toLowerCase()} />
                   {" "}{new Intl.NumberFormat("de-DE").format(course.distance * 1)} km
                    {/* Glyph for course and distance */}
                    {index < race.courses.length - 1 ? (
                      <code className="text-dimmed">
                       {" "}
                        <FaCircle size="10px" />
                       {" "}
                      </code>
                    ) : null}
                    {/* Muted dot as separator between course data */}
                    {/* {auth.isAuthenticated ? (<p>Bearbeiten</p>) : null} */}
                  </span>
                );
              })}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  )
    
}

export default RaceCard;