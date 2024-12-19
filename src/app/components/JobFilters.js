"use client";

import React from "react";

export default function JobFilters({
  jobLevel,
  setJobLevel,
  jobType,
  setJobType,
}) {
  const handleJobLevelChange = (e) => {
    setJobLevel(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleClearFilters = () => {
    setJobLevel("");  // Reset job level filter
    setJobType("");   // Reset job type filter
  };

  return (
    <div className="mt-4 flex flex-col ml-8 pr-8 border-r">
        <p className="text-xl font-bold mb-4">Filter</p>
        <div>
            <h3 className="text-lg font-semibold mb-3">Job Level</h3>
            <div className="space-y-3">
            <label className="flex items-center hover:cursor-pointer">
                <input
                type="radio"
                name="jobLevel"
                value="entry level"
                checked={jobLevel === "entry level"}
                onChange={handleJobLevelChange}
                className="w-4 h-4 text-blue-600 mr-3"
                />
                <span>Entry Level</span>
            </label>
            <label className="flex items-center hover:cursor-pointer">
                <input
                type="radio"
                name="jobLevel"
                value="mid level"
                checked={jobLevel === "mid level"}
                onChange={handleJobLevelChange}
                className="w-4 h-4 text-blue-600 mr-3"
                />
                <span>Mid Level</span>
            </label>
            <label className="flex items-center hover:cursor-pointer">
                <input
                type="radio"
                name="jobLevel"
                value="senior level"
                checked={jobLevel === "senior level"}
                onChange={handleJobLevelChange}
                className="w-4 h-4 text-blue-600 mr-3"
                />
                <span>Senior Level</span>
            </label>
            </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-3 mt-4">Job Type</h3>
            <div className="space-y-3">
            <label className="flex items-center hover:cursor-pointer">
                <input
                type="radio"
                name="jobType"
                value="part-time"
                checked={jobType === "part-time"}
                onChange={handleJobTypeChange}
                className="w-4 h-4 text-blue-600 mr-3"
                />
                <span>Part-Time</span>
            </label>
            <label className="flex items-center hover:cursor-pointer">
                <input
                type="radio"
                name="jobType"
                value="full-time"
                checked={jobType === "full-time"}
                onChange={handleJobTypeChange}
                className="w-4 h-4 text-blue-600 mr-3"
                />
                <span>Full-Time</span>
            </label>
            </div>
        </div>

        <button
        onClick={handleClearFilters}
        className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Remove All Filters
      </button>
        </div>
  );
}
