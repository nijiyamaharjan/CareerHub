"use client";

import { Star } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { useFavorites } from "../../context/FavouritesContext";
import { useAppliedJobs } from "../../context/AppliedJobsContext";
import ApplyModal from "../../components/ApplyModal";

export default function JobDetailClient({ job }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { isAppliedJob, addAppliedJob } = useAppliedJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFavoriteClick = () => {
    isFavorite(job.id) ? removeFavorite(job.id) : addFavorite(job);
  };

  const handleApplyClick = () => {
    addAppliedJob(job);
  };

  const toggleModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 sm:p-6">
      <div className="flex flex-row sm:items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 my-4 sm:my-6">
          {job.title}
        </h1>
        <button
          onClick={handleFavoriteClick}
          className="flex items-center ml-0 sm:ml-4"
        >
          <Tooltip 
            title={isFavorite(job.id) ? "Remove from Favourites" : "Add to Favourites"} 
            placement="right"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -8],
                    },
                  },
                ],
              },
            }}
          >
            <Star
              color="#efbf04"
              strokeWidth={1.75}
              fill={isFavorite(job.id) ? "#efbf04" : "none"}
              size={32}
            />
          </Tooltip>
        </button>
      </div>

      <div className="space-y-4 sm:space-y-2 mb-4">
        <DetailItem label="Company" value={job.company} />
        <DetailItem label="Location" value={job.location} />
        <DetailItem label="Level" value={job.level} />
        <DetailItem label="Time" value={job.time} />
      </div>

      <Section title="Job Description">
        <p className="text-sm sm:text-base">{job.jobDescription}</p>
      </Section>

      <Section title="Salary Range">
        <p className="text-sm sm:text-base">{job.salaryRange}</p>
      </Section>

      {!isAppliedJob(job.id) ? (
        <button
          className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base"
          onClick={() => toggleModal(job)}
        >
          Apply Now
        </button>
      ) : (
        <p className="text-green-600 text-center sm:text-left">
          Application Submitted!
        </p>
      )}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.title}
        onSubmit={handleFormSubmit}
        handleApplyClick={handleApplyClick}
      />
    </div>
  );
}

const DetailItem = ({ label, value }) => (
  <div className="flex items-center space-y-1 space-x-2 sm:space-y-0 sm:space-x-4 text-gray-700">
    <span className="font-medium">{label}:</span>
    <span className="text-sm m-0">{value}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-2 text-gray-700 mb-4">
    <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
    {children}
  </div>
);