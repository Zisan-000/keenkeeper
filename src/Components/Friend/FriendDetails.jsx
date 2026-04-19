import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const friend = useLoaderData();
  const navigate = useNavigate();

  const statusColors = {
    "on-track": "bg-[#2d4a3e]",
    "almost due": "bg-[#f6ad55]",
    overdue: "bg-[#f56565]",
  };
  const handleCheckIn = (type) => {
    // 1. Create the new entry
    const newEntry = {
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      title: `${type} with ${friend.name}`,
    };

    // 2. Get existing timeline from localStorage
    const existingTimeline = JSON.parse(localStorage.getItem("timeline")) || [];

    // 3. Update and Save (Add to the beginning of the array)
    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existingTimeline]),
    );

    toast.success(`Logged ${type} with ${friend.name}!`, {
      style: {
        borderRadius: "10px",
        background: "#2d4a3e",
        color: "#fff",
      },
    });
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-500 hover:text-gray-800 flex items-center gap-2"
        >
          ← Back to Friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="card bg-white border border-gray-100 shadow-sm p-10 text-center rounded-2xl">
              <div className="avatar mb-4 justify-center">
                <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                  <img src={friend.picture} alt={friend.name} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {friend.name}
              </h2>
              <div className="flex flex-col items-center gap-2 mt-2">
                <span
                  className={`${statusColors[friend.status]} text-white text-[10px] font-bold uppercase px-4 py-1 rounded-full`}
                >
                  {friend.status}
                </span>
                <span className="bg-[#c6f6d5] text-[#22543d] text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  {friend.tags[0]}
                </span>
              </div>
              <p className="mt-6 text-gray-500 italic text-sm">
                "{friend.bio}"
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Preferred: {friend.email}
              </p>
            </div>

            {/* Side Action Buttons */}
            <div className="space-y-3">
              <button className="btn btn-block bg-white border-gray-200 text-gray-700 hover:bg-gray-50 normal-case">
                🔔 Snooze 2 Weeks
              </button>
              <button className="btn btn-block bg-white border-gray-200 text-gray-700 hover:bg-gray-50 normal-case">
                📁 Archive
              </button>
              <button className="btn btn-block bg-white border-gray-200 text-error hover:bg-red-50 normal-case">
                🗑️ Delete
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats & Check-in */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Stat Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {friend.days_since_contact}
                </div>
                <div className="text-gray-400 text-xs mt-1 uppercase">
                  Days Since Contact
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {friend.goal}
                </div>
                <div className="text-gray-400 text-xs mt-1 uppercase">
                  Goal (Days)
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-800">
                  Feb 27, 2026
                </div>
                <div className="text-gray-400 text-xs mt-1 uppercase">
                  Next Due
                </div>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="card bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800">Relationship Goal</h3>
                <button className="btn btn-xs btn-outline border-gray-200 text-gray-400 hover:bg-gray-100 normal-case px-4">
                  Edit
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-bold"> {friend.goal} </span>
                days
              </p>
            </div>

            {/* Quick Check-In Card */}
            <div className="card bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
              <h3 className="font-bold text-gray-800 mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mb-2">
                    <img src={call} alt="" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Call
                  </span>
                </button>

                <button
                  onClick={() => handleCheckIn("Text")}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mb-2">
                    <img src={text} alt="" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Text
                  </span>
                </button>

                <button
                  onClick={() => handleCheckIn("Video")}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mb-2">
                    <img src={video} alt="" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
