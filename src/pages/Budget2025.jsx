import React from "react";

const NewsDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-xl font-bold">Budget 2025</h2>
          <div className="space-y-2">
            <h3 className="font-semibold">What's New in Financial Literacy</h3>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Budget 2025: Rent a home or buy one? That’s...</h3>
            <p className="text-sm text-gray-600">
              Deciding between renting and buying a home is complex. Renting offers flexing and potential tax...
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Union Budget: Trading in crypto? There is a big...</h3>
            <p className="text-sm text-gray-600">
              India’s finance act of 2022 has introduced a 30% tax on income from cryptocurrencies classified as virtual...
            </p>
          </div>
        </div>

        {/* Center Column - Main News */}
        <div className="md:col-span-1">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img src="/images/budget1.png" alt="Budget 2025" className="w-full rounded-md" />
            <h2 className="text-lg font-bold mt-4">
              The Union Budget 2025, presented by Finance Minister Nirmala Sitharaman on February 1, 2025, has introduced several notable measures:
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              The Union Budget 2025 has garnered significant attention for its focus on short-term economic relief measures, such as tax cuts for the middle class, while lacking substantial reforms aimed at long-term growth...
            </p>
          </div>
        </div>

        {/* Right Column - Two Small News Cards */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/images/budget5.png" alt="EV Charging" className="w-full rounded-md" />
            <h3 className="font-semibold mt-2">Tax wheels on office cars</h3>
            <p className="text-sm text-gray-600">Many organisations provide a leased car or a company-owned car...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/images/budget4.png" alt="EPF" className="w-full rounded-md" />
            <h3 className="font-semibold mt-2">Mar-o-Lago! Stay the course on your retirement fund</h3>
          </div>
        </div>
      </div>

      {/* Bottom Section - Two Live News Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex space-x-4 bg-white p-4 rounded-lg shadow">
          <img src="/images/buget2.png" alt="Live" className="w-16 h-16 rounded-md" />
          <div>
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Live</span>
            <h3 className="font-semibold mt-2">Budget 2025 Live: Make India rich again</h3>
          </div>
        </div>
        <div className="flex space-x-4 bg-white p-4 rounded-lg shadow">
          <img src="/images/budget3.png" alt="Live" className="w-16 h-16 rounded-md" />
          <div>
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Live</span>
            <h3 className="font-semibold mt-2">Budget 2025 Live: 10,000 seats will be added in medical</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDashboard;
