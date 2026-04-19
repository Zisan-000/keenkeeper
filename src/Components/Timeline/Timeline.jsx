import React, { useState, useEffect } from "react";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";
import { FaRegHandshake } from "react-icons/fa";

const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // Load data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setEntries(data);
  }, []);

  // Icon Mapping logic
  const getIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("call")) return callIcon;
    if (lowerTitle.includes("text")) return textIcon;
    if (lowerTitle.includes("video")) return videoIcon;
    return <FaRegHandshake />;
  };

  // Filter and Sort Logic
  const processedEntries = entries
    .filter((entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1a202c] mb-8">Timeline</h1>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative grow">
            <input
              type="text"
              placeholder="Search by name or type..."
              className="input input-bordered w-full bg-white border-gray-200 focus:outline-none focus:border-[#2d4a3e]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="select select-bordered bg-white border-gray-200 text-gray-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
          </select>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {processedEntries.length > 0 ? (
            processedEntries.map((entry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={getIcon(entry.title)}
                    alt="icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="grow">
                  <h4 className="text-lg font-semibold text-gray-700">
                    {/* Split title to bold the interaction type */}
                    <span className="text-[#1a202c]">
                      {entry.title.split(" with ")[0]}
                    </span>
                    <span className="text-gray-400 font-normal">
                      {" "}
                      with {entry.title.split(" with ")[1]}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{entry.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-400 italic">
                No entries found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
