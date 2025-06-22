import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/9.jpg";

function TripSec({ heading, text }) {
  return (
    <div>
      <h1 className="md:text-4xl text-center text-3xl font-[800] mb-2">
        {heading}
      </h1>
      <p className="md:text-xl px-1 text-center text-[1rem]">{text}</p>
      <div className="md:flex flex flex-col lg:flex-row gap-5 mt-8 ml-9 md:ml-13 lg:ml-13 md:justify-between md:mx-12 md:my-10 lg:mx-17 lg:my-14">
        <TripData image={Trip1} heading="Trip in Turkey" />
        <TripData image={Trip2} heading="Trip in Malaysia" />
        <TripData image={Trip3} heading="Trip in Pakistan" />
      </div>
    </div>
  );
}

export default TripSec;
