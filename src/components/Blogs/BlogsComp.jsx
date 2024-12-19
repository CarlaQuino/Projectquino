import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/visayas.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Luzon",
    description:
      " Travel to Luzon to explore the Philippines' largest island, home to vibrant cities like Manila, the majestic Banaue Rice Terraces, scenic highlands of Baguio, pristine beaches in Zambales, and the iconic Mayon Volcano. Luzon offers a perfect mix of history, culture, and natural beauty.",
    
      author: "Janna V.",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Visayas",
    description:
      "Travel to the Visayas for stunning island escapes, world-class diving spots, and rich cultural heritage. Explore Boracay’s white sand beaches, Cebu’s historical landmarks, Bohol’s Chocolate Hills, and Siquijor’s mystical charm. The Visayas is a paradise for nature and adventure lovers alike.",
    author: "Charito A.",
    date: "november 3, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Mindanao",
    description:
      "Travel to Mindanao for breathtaking landscapes, vibrant cultures, and thrilling adventures. Discover Davao's Mt. Apo, the Philippines' highest peak, the pristine beaches of Siargao, the enchanting Enchanted River in Surigao, and the rich traditions of indigenous communities. Mindanao offers a unique blend of natural beauty and cultural diversity.",
    author: "Flore May H.",
    date: "January 16, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;