import React from "react";

const LeftSection = () => {
  const newsItems = [
    { img: "/images/photo0.png", text: "Budget 2025: Nirmala Sitharaman Announces Nuclear Energy Mission For 'Vikst Bharat'" },
    { img: "/images/photo2.png", text: "CUET PG 2025: Registrations To Close For Postgraduate Entrance Exam, Check Details To Apply" },
    { img: "/images/photo3.png", text: "US Congress Bans Employees From Installing DeepSeek On Phones, Computers" },
    { img: "/images/photo4.png", text: "Birthright Citizenship Not For Unqualified People And Unqualified Kids" },
    { img: "/images/photo5.png", text: "Sky Force box office collection day 9: Akshay Kumar, Veer Paharia film gains from Deva’s slow start, nears ₹100 crore" },
    { img: "/images/photo6.png", text: "Kejriwal loyalists to AAP rebels: Meet MLAs who switch to BJP after being axed from Delhi poll" },
    { img: "/images/photo7.png", text: "Olympic Gold Medalist's Credit Card Allegedly Stolen by Postman" },
    { img: "/images/photo8.png", text: "Delhi vs Railways Day 3 Highlights: Rani Traps Virat Kohli; Flops With Bat, But Wins On Rani Comeback" },
    { img: "/images/photo9.png", text: "Mumbai and Pune, look up tonight: The International Space Station will be visible to the naked eye" },
    { img: "/images/photo10.png", text: "From Gaza to Los Angeles, our leaders have set the world on fire" },
    { img: "/images/photo11.png", text: "‘May Or May Not’ Trump Says Will Decide On Canada-Mexico Tariffs Tonight" },
    { img: "/images/photo12.png", text: "Saif Ali Khan rapid post-surgery recovery: Why you too can recover fast with simple diet" },
    { img: "/images/photo13.png", text: "Maha Kumbh Stampede Latest News | Stampede On Mauni Amavasya Leaves 20 Dead" }
  ];

  return (
    <div className="col-span-2 space-y-4 w-full">
      <div className="bg-white  rounded-lg h-auto w-120">
        <img src="/images/photo1.png" alt="Main News" className="w-full rounded-lg ml-6" />
        <h2 className="text-lg font-bold mt-2 ml-6">Trump dinner, 'El-Mo' meeting on cards at PM Modi's US visit on February 13</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-0">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white p-1 rounded-lg flex items-center space-x-1 text-sm">
            <img src={item.img} alt="News" className="w-25 h-25 rounded-lg" />
            
            <div className="w-40"> {/* This makes the text container narrower */}
        <p className="text-xs">{item.text}</p>
      </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default LeftSection;
