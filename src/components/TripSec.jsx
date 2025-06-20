import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/9.jpg";

function TripSec({ heading, text }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-[800] mb-2">{heading}</h1>
      <p className="text-xl">{text}</p>
      <div className="flex justify-between mx-17 my-14">
        <TripData image={Trip1} heading="Trip in Turkey" />
        <TripData image={Trip2} heading="Trip in Malaysia" />
        <TripData image={Trip3} heading="Trip in Pakistan" />
      </div>
    </div>
  );
}

export default TripSec;
