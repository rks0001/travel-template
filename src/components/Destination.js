
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>POPULAR DESTINATIONS</h1>
      <p>Tours gives you experiences</p>
      <DestinationData
      className="first-des"
      heading="Maldives"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vel. Consequuntur harum eligendi hic corrupti voluptas ratione quibusdam et ipsum, quam autem quo ea sint odio dignissimos nesciunt iste commodi! "
      img1={Mountain1}
      img2={Mountain2}
      />

<DestinationData
      className="first-des-reverse"
      heading="Bali"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vel. Consequuntur harum eligendi hic corrupti voluptas ratione quibusdam et ipsum, quam autem quo ea sint odio dignissimos nesciunt iste commodi! "
      img1={Mountain3}
      img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
