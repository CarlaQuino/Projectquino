import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/visayas.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Tinuy-an Falls",
    location: "Bislig City, Surigao",
    description: "Often called the Niagara Falls of the Philippines Tinuy-an Falls is a majestic natural wonder surrounded by lush greenery. Its cascading waters and tranquil pool make it a must-visit destination for nature lovers and adventure seekers.",
    price: 15000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Cagsawa Ruins",
    location: "Albay, Luzon",
    description:
      "The ruins are a remnant of the Cagsawa Church, which was destroyed during Mayon Volcano's eruption in 1814. It's a popular historical and scenic spot, showcasing the perfect cone shape of Mayon and offering insight into the region's rich history and natural beauty.",
    price: 20500,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Simala Shrine",
    location: "Sibonga, Cebu,Visayas",
    description:
      " It is a famous pilgrimage site known for its grand architecture and serene atmosphere. The shrine is revered for miraculous stories and attracts devotees and tourists seeking spiritual solace and admiration of its stunning design.",
    price: 30500,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Boracay Island",
    location: "Aklan,Visayas",
    description: "known for its powdery white sand beaches, crystal-clear waters, and vibrant nightlife. It offers a variety of activities, from water sports and sunset sailing to relaxing on the picturesque shores of White Beach. Perfect for beach lovers and adventure seekers alike!",
    price: 31500,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Chocolate Hills",
    location: "Bohol,Visayas",
    description:
      "This unique geological formation features over 1,200 cone-shaped hills that turn chocolate-brown during the dry season, creating a stunning and surreal landscape. It’s a must-visit for nature enthusiasts and those seeking unique sights.",
    price: 40500,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Coron Island",
    location: "Palawan,Luzon",
    description:
      "A hidden gem in Palawan, Philippines, is renowned for its stunning limestone cliffs, crystal-clear lagoons, and WWII shipwrecks. It's a paradise for divers and snorkelers, offering underwater adventures amidst vibrant coral reefs and historical artifacts.",
    price: 45500,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;