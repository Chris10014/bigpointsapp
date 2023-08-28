// get our fontawesome imports
import { FaSwimmer, FaRunning, FaWalking, FaBiking, FaCircleNotch, FaQuestion } from "react-icons/fa";

 /**
   * Translates the abbreviation of sports or other strings into the corresponding FontAwesome glyphicon.
   * Needed in loops and filter() functions when the glyphicon is created dynamically.
   * @param {className=str} className for e.g. animation, optional
   * @param {icon=str} string for glyphicon
   * @param {size=str} size of the glyphicon (lg, sm, 2x ...), optional
   * @param {color=str} color of the glyphicon (hex, ...), optional
   * @returns glyphicon
   */
  export const Glyphicon = (props) => {
    switch (props.icon) {
      case "swi":
        return < FaSwimmer 
          className={props.className ? props.className : ""} 
            flip="horizontal" 
            size={props.size ? props.size : ""} 
            color={props.color ? props.color : ""} />;
      case "bike":
        return <FaBiking 
          className={props.className ? props.className : ""} 
          size={props.size ? props.size : ""} 
          color={props.color ? props.color : ""} />;
      case "tt":
        return <FaBiking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "ctf":
        return <FaBiking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "rtf":
        return <FaBiking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "rb":
        return <FaBiking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "mtb":
        return <FaBiking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "run":
        return <FaRunning 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "walk":
        return <FaWalking 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "circle":
        return <FaCircleNotch 
                  className={props.className ? props.className : ""} 
                  size={props.size ? props.size : ""} 
                  color={props.color ? props.color : ""} />;
      case "tri":
        return (
          <span>
            <FaSwimmer 
              className={props.className ? props.className : ""} 
              flip="horizontal" 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
            {' '} 
            <FaBiking 
              className={props.className ? props.className : ""} 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
            {' '} 
            <FaRunning 
              className={props.className ? props.className : ""} 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
          </span>
        );
        case "dua":
        return (
          <span>
            <FaRunning 
              className={props.className ? props.className : ""} 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
            {' '} 
            <FaBiking 
              className={props.className ? props.className : ""} 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
            {' '} 
            <FaRunning 
              className={props.className ? props.className : ""} 
              size={props.size ? props.size : ""} 
              color={props.color ? props.color : ""} />
          </span>
        );

      default:
        return <FaQuestion 
          className={props.className ? props.className : ""} 
          size={props.size ? props.size : ""} />;
    }
  }