import React, { useState } from "react";
import * as Icons from "react-feather";

type IconPickerProps = {
  rowsInOnePage: number;
  columnsInOnePage: number;
  iconHeight: number;
  iconWidth: number;
  pickerHeight?: number;
  pickerWidth?: number;
};

const IconPicker: React.FC<IconPickerProps> = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
}) => {
  const allIcons = Object.entries(Icons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(allIcons.length / iconsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const currentIcons = allIcons.slice(
    (currentPage - 1) * iconsPerPage,
    currentPage * iconsPerPage
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-teal-700 text-white">
    
    {/* Selected Icon Preview */}
      <div className="mb-8 text-center flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-4">Selected Icon</h2>
        <div className="text-blue-600 bg-white p-4 rounded-full shadow-lg">
          {selectedIcon
            ? React.createElement(Icons[selectedIcon as keyof typeof Icons], {
                size: 50,
              })
            : "No item selected"}
        </div>
      </div>

     {/* Icon Picker */}
      <div
        className="relative bg-blue-100 border border-gray-300 rounded shadow-lg"
        style={{
          width: `${pickerWidth}px`,
          height: `${pickerHeight}px`,
        }}
      >
        <h1 className="text-3xl font-bold m-2 text-blue-500 text-center">
          Select Your Icon
        </h1>

        <div
          className="grid overflow-y-auto p-4"
          style={{
            gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
            gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
            height: "85%",
          }}
        >
          {currentIcons.map(([iconName, IconComponent]) => (
            <div
              key={iconName}
              className="flex items-center justify-center cursor-pointer hover:bg-blue-100"
              onClick={() => handleIconClick(iconName)}
            >
              <IconComponent
                size={iconHeight * 0.8}
                className="text-white bg-blue-500 p-2 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-2 border-t border-gray-200 bg-gray-50">
          <button
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed text-gray-100"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed text-gray-100"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
