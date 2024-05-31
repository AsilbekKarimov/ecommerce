import React from "react";

const DividerCustom = ({ text, color }) => {
  return (
    <div style={{ color: color }} className="w-full py-[77px]">
      <div
        className={`divider divider-accent font-bold text-[#33394F] text-3xl`}
      >
        {text}
      </div>
    </div>
  );
};

export default DividerCustom;
