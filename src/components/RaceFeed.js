import RaceCard from "./RaceCard"

const RaceFeed = ({ races, sportEventId }) => {
  return (
    <>
      {races.map((race) => <RaceCard key={race.id} race={race} sportEventId={sportEventId} />)}
    </>    
  )
}

export default RaceFeed