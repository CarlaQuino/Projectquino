import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>We are a comprehensive platform designed to inspire and guide travelers in exploring the beauty and diversity of the Philippines. It showcases the country’s 7,000+ islands, featuring must-visit destinations like Boracay, Palawan, Cebu, and Bohol, alongside lesser-known gems such as Siargao, Camiguin, and Banaue. 

The website offers detailed travel guides, including curated itineraries, top attractions, cultural experiences, and adventure activities like diving, surfing, and trekking. It provides practical information on travel requirements, transportation options, local customs, and safety tips. 
</p>
          <br />
          <p>
            
Visitors can explore interactive features such as maps, travel blogs, user reviews, and photo galleries to plan their perfect trip. The platform also highlights Filipino culture, festivals, local cuisines, and sustainable tourism practices, ensuring a meaningful travel experience. Whether you're a solo backpacker, a family traveler, or an adventure seeker, the site serves as a one-stop resource for discovering the Philippines.
         
          </p>
        </div>
      </div>
      <BlogsComp />
    </>
  );
};

export default About;