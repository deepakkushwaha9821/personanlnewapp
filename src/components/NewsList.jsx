import React from "react";
import image1 from "../assets/image1.jpg"; // Replace with actual path
import image2 from "../assets/image2.jpg"; // Replace with actual path

const newsArticles = [
  {
    id: 1,
    image: image1, // Use local image
    title: "Trump dinner 'El-Mo' meeting on cards at PM Modi's US visit on February 13",
    description: "Brief description of the news article goes here. This should give the readers a good idea of what the article is about.",
  },
  {
    id: 2,
    image: image2, // Use local image
    title: "Coldplay breaks Taylor Swift's Record for Most-Attended Concert Tour",
    description: "Brief detail about this exciting news story, providing context and engaging details for readers.",
  },
];

const NewsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
      {newsArticles.map((news) => (
        <div
          key={news.id}
          className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-xl font-semibold">{news.title}</h2>
          <p className="text-gray-700">{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
