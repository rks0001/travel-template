import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>DISCOVER TOURS</h1>
      <p>You can discover unique locations</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        statename="ASSAM"
        heading="Trip In Indonesia"
        url="/tour"
        text="lorem"
        days="4Days - 3Nights"
        knowmore="Know More"
        />
         <TripData
        image={Trip2}
        statename="ASSAM"
        heading="Trip In Bali"
        url="/tour"
        text="lorem"
        days="4Days - 3Nights"
        knowmore="Know More"
        />
         <TripData
        image={Trip3}
        statename="ASSAM"
        heading="Trip In Bahamas"
        url="/tour"
        text="lorem"
        days="4Days - 3Nights"
        knowmore="Know More"
        />
      </div>
    </div>
  );
}

export default Trip;
