import React from "react";

const SkillCard = ({ name, color, icon }) => {
  return (
    <div
    className={`flex flex-col items-center justify-center h-20 rounded-xl text-[#070405] font-semibold`}
    style={{ backgroundColor: color }}
  >
    <div className="text-2xl mb-2">{icon}</div>
    {name}
  </div>
  );
};

export default SkillCard;