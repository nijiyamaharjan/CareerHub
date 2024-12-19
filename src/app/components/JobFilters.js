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
    setJobLevel("");
    setJobType("");
  };

  return (
    <div className="p-4 sm:mt-4 sm:ml-8 sm:pr-8 bg-white sm:border-r sm:min-w-[240px]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg sm:text-xl font-bold">Filter</p>
        {(jobLevel || jobType) && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="mb-6">
        <h3 className="flex text-base sm:text-lg font-semibold mb-3">Job Level</h3>
        <div className="flex gap-5 sm:flex-col">
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="jobLevel"
              value="entry level"
              checked={jobLevel === "entry level"}
              onChange={handleJobLevelChange}
              className="w-4 h-4 text-blue-600 mr-1"
            />
            <span className="text-sm sm:text-base">Entry Level</span>
          </label>
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="jobLevel"
              value="mid level"
              checked={jobLevel === "mid level"}
              onChange={handleJobLevelChange}
              className="w-4 h-4 text-blue-600 mr-1"
            />
            <span className="text-sm sm:text-base">Mid Level</span>
          </label>
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="jobLevel"
              value="senior level"
              checked={jobLevel === "senior level"}
              onChange={handleJobLevelChange}
              className="w-4 h-4 text-blue-600 mr-1"
            />
            <span className="text-sm sm:text-base">Senior Level</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-3">Job Type</h3>
        <div className="flex gap-5 sm:flex-col">
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="jobType"
              value="part-time"
              checked={jobType === "part-time"}
              onChange={handleJobTypeChange}
              className="w-4 h-4 text-blue-600 mr-1"
            />
            <span className="text-sm sm:text-base">Part-Time</span>
          </label>
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="jobType"
              value="full-time"
              checked={jobType === "full-time"}
              onChange={handleJobTypeChange}
              className="w-4 h-4 text-blue-600 mr-1"
            />
            <span className="text-sm sm:text-base">Full-Time</span>
          </label>
        </div>
      </div>
    </div>
  );
}