import React from 'react';
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Meghalaya1 from "../assets/meghalaya1.jpg";
import Meghalaya2 from "../assets/meghalaya2.jpg";
import Arunachal1 from "../assets/arunachal1.jpg";
import Arunachal2 from "../assets/arunachal2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>POPULAR DESTINATIONS</h1>
      <p className='description'>Tours gives you experiences</p>
      <DestinationData
      className="first-des"
      heading="Meghalaya"
      text="Meghalaya, India's Abode of Clouds, is a captivating state of misty hills, lush valleys, and vibrant cultures. With iconic living root bridges, cascading waterfalls like Nohkalikai, charming hill stations like Shillong, and a rich tapestry of tribal traditions, Meghalaya offers a unique blend of natural beauty and cultural diversity that's simply enchanting.





      "
      img1={Meghalaya1}
      img2={Meghalaya2}
      />

<DestinationData
      className="first-des-reverse"
      heading="Arunachal Pradesh"
      text="Explore an untouched realm where Himalayan peaks touch the sky, pristine forests whisper ancient tales, and diverse cultures paint a vibrant tapestry. Trek rugged trails, witness tribal traditions, and find serenity by azure lakes. Arunachal Pradesh, where nature and culture intertwine, awaits your discovery."
      img1={Arunachal1}
      img2={Arunachal2}
      />
    </div>
  );
};

export default Destination;
