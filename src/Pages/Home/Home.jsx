import React from "react";
import { useLoaderData } from "react-router";
import Friends from "../../Components/Friends/Friends";

const Home = () => {
  const friends = useLoaderData();

  // Dynamic calculation for the stats section
  const stats = [
    { label: "Total Friends", value: friends.length },
    {
      label: "On Track",
      value: friends.filter((f) => f.status === "on-track").length,
    },
    {
      label: "Need Attention",
      value: friends.filter((f) => f.status !== "on-track").length,
    },
    { label: "Interactions This Month", value: 12 }, // Static placeholder
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn btn-md bg-[#2d4a3e] hover:bg-[#233a31] border-none text-white px-6 normal-case">
          + Add a Friend
        </button>
      </header>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Friends List Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="border-t border-gray-200 pt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-8">Your Friends</h3>
          <Friends friends={friends} />
        </div>
      </section>
    </div>
  );
};

export default Home;
