import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import RaceInputForm from "./RaceInputForm";

const AddRaceForm = () => {

  const [numberOfRaces, setNumberOfRaces] = useState([
    {
      race: <AddRaceForm key="1" />
    }
  ])

    const handleAddRace = (idx) => {
        setNumberOfRaces([...numberOfRaces, 
          {
            race: <AddRaceForm key={idx} />
          }
        ])
      }

    return (
        <main className="container">
          <div>Add Race {numberOfRaces}</div>
          {numberOfRaces.map((race) => race.race)}                       
            <Button onClick={handleAddRace(numberOfRaces.length + 1)}>Add</Button>
        
        </main>
     
    )
}

export default AddRaceForm;
