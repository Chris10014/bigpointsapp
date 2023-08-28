import { Link } from "react-router-dom";
import { FaRegSmileWink } from "react-icons/fa";

const Missing = () => {
    return (
      <main className="Missing">
          <h1>Diese Seite scheint es nicht zu geben. <FaRegSmileWink /></h1>
          <p>
            <Link to="/">Startseite</Link>
          </p>
      </main>
    )
  }
  
  export default Missing;