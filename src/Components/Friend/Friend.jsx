import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;

  // Status Badge Logic
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "on-track":
        return "bg-[#2d4a3e] text-white";
      case "almost due":
        return "bg-[#f6ad55] text-white";
      case "overdue":
        return "bg-[#f56565] text-white";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
      <Link to={`/friend/${friend.id}`}>
        <div className="card-body items-center text-center p-8">
          {/* Avatar */}
          <div className="avatar mb-2">
            <div className="w-16 rounded-full">
              <img src={picture} alt={name} />
            </div>
          </div>

          {/* Info */}
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-[11px] text-gray-400 font-medium mb-2">
            {days_since_contact}d ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="badge bg-[#c6f6d5] border-none text-[#22543d] text-[10px] font-bold uppercase px-2 py-0.5 h-auto"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action/Status Button */}
          <div className="w-full">
            <button
              className={`w-full py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(status)}`}
            >
              {status}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Friend;
