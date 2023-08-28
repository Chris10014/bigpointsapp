/**
 * Searches the sportEvent visual. If no visual exists it will be a visual taken corresponding to the sport of the sportEvent.
 * @param {sportEvent} object sportEvent
 * @returns {file name} string file name of the sportEvent visual
 */
export const renderEventVisual = (sportEvent) => {
  console.log("event: ", sportEvent)
  const random = (min = 0, max = 50) => {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
  };
  
  if (sportEvent.visual !== "" && sportEvent.visual.length > 3) {
    //to be done: check if file exists
    return sportEvent.visual;
  } else {
    //doesn't work sustainable. Timing issue?
    let sportCode = sportEvent.races[0].sport.code;
    
    return `/assets/images/event-visuals/${sportCode}_${random(1, 3)}.jpg`;
  }
};