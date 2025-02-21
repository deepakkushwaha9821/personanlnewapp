import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white-100 py-8 ml-[159px] mr-[39px]">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xs md:text-sm text-gray-700">
          <div>
            <h3 className="font-bold mb-2">Network</h3>
            {[
              "TNHindi.com",
              "TNMarathi.com",
              "TNTelugu.com",
              "TNKannada.com",
              "TNBangla.com",
              "TNGujarati.com",
              "TNPunjabi.com",
              "TNAssam.com",
              "TNMalayalam.com",
              "TNTamil.com",
              "Trends.com",
              "Money.com",
              "NewsPlus.com",
            ].map((item) => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-2">States & City’s News</h3>
            {[
              "Andhra Pradesh",
              "Bengaluru",
              "Delhi",
              "Hyderabad",
              "Karnataka",
              "Kerala",
              "Mumbai",
              "Tamil Nadu",
              "Telangana",
            ].map((item) => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-2">Entertainment</h3>
            {["Bigg Boss", "Bollywood", "Hollywood", "OTT", "Regional Cinema", "Television"].map(
              (item) => (
                <p key={item} className="hover:underline cursor-pointer">{item}</p>
              )
            )}
          </div>

          <div>
            <h3 className="font-bold mb-2">Lifestyle</h3>
            {[
              "Beauty",
              "Fashion",
              "Food & Drink",
              "Relationships",
              "Spirituality",
              "Travel",
              "Fitness",
            ].map((item) => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-2">Sports</h3>
            {[
              "Cricket",
              "Olympics",
              "UFC",
              "WWE",
              "Kabaddi",
              "Football",
              "Tennis",
              "Other Sports",
            ].map((item) => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mt-8 text-xs md:text-sm text-gray-700">
          <h3 className="font-bold mb-2">Trending Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "ND vs ENG LIVE Score",
              "Delhi Election 2025",
              "PAPON Concert Tickets",
              "Income Tax Calculator",
              "Artificial Intelligence",
              "Horoscope Today",
              "Hindu Calendar 2025",
              "Tamil Calendar 2025",
              "Malayalam Calendar 2025",
              "Join The News on WhatsApp",
            ].map((topic) => (
              <p key={topic} className="hover:underline cursor-pointer">{topic}</p>
            ))}
          </div>
        </div>

        <div className="relative mt-8 flex flex-col md:flex-row items-center text-xs md:text-sm text-gray-700 w-full">
          {/* Left - THE NEWS */}
          <div className="md:absolute left-0 mb-3 md:mb-0">
            <h2 className="font-bold text-sm md:text-lg">THE NEWS</h2>
          </div>

          {/* Center - Social Icons */}
          <div className="flex gap-4 items-center md:absolute left-[64%] transform md:-translate-x-1/2">
            <span className="cursor-pointer hover:text-gray-500">Follow Us</span>
            <FaFacebook className="cursor-pointer hover:text-gray-500" size={16} md:size={20} />
            <FaTwitter className="cursor-pointer hover:text-gray-500" size={16} md:size={20} />
            <FaInstagram className="cursor-pointer hover:text-gray-500" size={16} md:size={20} />
            <FaYoutube className="cursor-pointer hover:text-gray-500" size={16} md:size={20} />
          </div>

          {/* Right - App Store Buttons */}
          <div className="mt-4 md:mt-0 flex gap-4 ml-[50px] md:ml-[890px]">
            <img
              src="./images/googleplay.png"
              alt="Google Play"
              className="w-[80px] md:w-auto cursor-pointer"
            />
            <img
              src="./images/appstore.png"
              alt="App Store"
              className="w-[80px] md:w-auto cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 md:gap-6 text-gray-600 text-xs">
          <p className="hover:underline cursor-pointer">Contact Us</p>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer">Advertise With Us</p>
          <p className="hover:underline cursor-pointer">Privacy & Cookies Notice</p>
          <p className="hover:underline cursor-pointer">Complaint Redressal</p>
        </div>
      </div>
    </footer>
  );
}
