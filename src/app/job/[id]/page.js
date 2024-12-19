"use client"

import { useParams } from "next/navigation";
import mockJobs from "../../data/mockJobs"; 
import { useFavorites } from "../../context/FavouritesContext"; 
import { useAppliedJobs } from "../../context/AppliedJobsContext"; 
import { Star } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import ApplyModal from "../../components/ApplyModal"
import { useState } from "react";

export default function JobDetailPage() {
  const { id } = useParams();
  const job = mockJobs.find((job) => job.id === parseInt(id));
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { isAppliedJob, addAppliedJob } = useAppliedJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  if (!job) {
    return <p className="text-center text-lg text-red-500">Job not found</p>;
  }

  const handleFavoriteClick = () => {
    isFavorite(job.id) ? removeFavorite(job.id) : addFavorite(job);
  };

  const handleApplyClick = () => {
    addAppliedJob(job)
  }

  const toggleModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold text-gray-900 my-6">{job.title}</h1>
        <button
            onClick={handleFavoriteClick}
            className="flex items-center ml-4"
          >
            <Tooltip 
              title={isFavorite(job.id) ? "Remove from Favourites" : "Add to Favourites"} 
              placement="right"
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -8],
                      },
                    },
                  ],
                },
              }}>
                <Star
                  color="#efbf04"
                  strokeWidth={1.75}
                  fill={isFavorite(job.id) ? "#efbf04" : "none"}
                  size={32}
                />
            </Tooltip>
          </button>       
      </div>     
      
      <div className="space-y-2 mb-4">
        <DetailItem label="Company" value={job.company} />
        <DetailItem label="Location" value={job.location} />
        <DetailItem label="Level" value={job.level} />
        <DetailItem label="Time" value={job.time} />
      </div>

      <Section title="Job Description">
        <p>{job.jobDescription}</p>
      </Section>

      <Section title="Salary Range">
        <p>{job.salaryRange}</p>
      </Section>

      {!isAppliedJob(job.id)? (
      <button 
      className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      onClick={() => toggleModal(job)}
      >
        Apply Now
      </button> ) : 
      ( <p className="text-green-600">Application Submitted!</p> )
      }
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
  <div className="flex items-center space-x-4 text-gray-700">
    <span className="font-medium">{label}:</span>
    <p>{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-2 text-gray-700 mb-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);