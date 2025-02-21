import React from "react";

const ads = [
  { id: 1, content: "Mega Mart Sale - 40% OFF" },
  { id: 2, content: "Buy 1 Get 1 Free on Electronics" },
  { id: 3, content: "Exclusive Travel Deals - Save Big!" },
];

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Advertisements</h2>

      {ads.map((ad) => (
        <div key={ad.id} className="border p-4 mb-4 rounded shadow bg-white">
          <p className="text-gray-700">{ad.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
