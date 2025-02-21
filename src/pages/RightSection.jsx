export default function RightSidebar() {
    return (
      <div className="grid grid-cols-2 gap-4 w-[600px]">
        {/* Left Column: News Cards */}
        <div className="space-y-4">
          {[
            {
              title: "Trump Instructs Advisers To Obliterate Iran If It Assassinates US Leader, Signs Executive Order",
              image: "./images/rightnew1.png",
            },
            {
              title: "Coldplay Breaks Taylor Swift's Record Of Most-Attended Concert Tour",
              image: "./images/rightnew2.png",
            },
            {
              title: "Why Tirupati temple board axed 18 employees",
              image: "./images/rightnew3.png",
            },
            {
              title: "SA20 Eliminator SEC in control, JSK chase stutters",
              image: "./images/rightnew4.png",
            },
            {
              title: "From Gaza to Los Angeles, our leaders have set the world on fire",
              image: "./images/rightnew5.png",
            },
          ].map((news, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <img src={news.image} alt={news.title} className="w-full h-32 object-cover" />
              <div className="p-2 text-sm font-semibold">{news.title}</div>
            </div>
          ))}
        </div>
  
        {/* Right Column: Advertisements */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4 text-center bg-gray-100">
            <p className="text-xs font-semibold">Advertisement</p>
            <h2 className="text-lg font-bold">Mega Mart Sale</h2>
            <p className="text-sm">40% OFF</p>
            <img src="./images/advertise1.png" alt="Ad" className="w-full mt-2" />
          </div>
  
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img src="./images/advertise2.png" alt="Ad" className="w-full h-80 object-cover" />
            <div className="p-2 text-sm text-center">Tired of too many ads?</div>
          </div>
  
          {/* Newspaper */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img src="./images/advertise.3.png" alt="Newspaper" className="w-full h-140 object-cover" />
          </div>
  
         
        </div>
      </div>
    );
  }
  