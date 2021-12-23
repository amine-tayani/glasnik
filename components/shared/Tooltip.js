import React from "react";

const Tooltip = ({ children, tooltipText }) => {
  const tooltipRef = React.createRef(null);

  const handleMouseEnter = () => {
    tooltipRef.current.style.opacity = 1;
    tooltipRef.current.style.marginLeft = "4px";
  };

  const handleMouseLeave = () => {
    tooltipRef.current.style.opacity = 0;
    tooltipRef.current.style.marginLeft = "0px";
  };

  return (
    <div
      className="relative flex items-center px-4 py-2 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="fixed bg-gradient-to-r bg-[#36393F] text-gray-100 px-4 py-2 max-w-xs rounded-2xl flex items-center transition-all duration-150 opacity-0 left-20 text-[14px] font-medium font-inter"
        ref={tooltipRef}
      >
        {tooltipText}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
