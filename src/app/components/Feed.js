"use client";

import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Pagination from "./Pagination";
import mockJobs from "../data/mockJobs"; 
import SearchBar from "../components/SearchBar";
import JobFilters from "../components/JobFilters";

export default function Feed() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLevel, setJobLevel] = useState("");  
  const [jobType, setJobType] = useState(""); 

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (jobLevel) {
      filtered = filtered.filter((job) => job.level.toLowerCase() === jobLevel.toLowerCase());
    }
  
    if (jobType) {
      filtered = filtered.filter((job) => job.time.toLowerCase() === jobType.toLowerCase());
    }

    setFilteredJobs(filtered);
  }, [searchQuery, jobs, jobLevel, jobType]); 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < filteredJobs.length) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row">
        <JobFilters
          jobLevel={jobLevel}
          setJobLevel={setJobLevel}
          jobType={jobType}
          setJobType={setJobType}
        />
        <div>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ul className="pl-8">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-center text-lg text-red-500">No jobs found.</p>
            )}
          </ul>
        </div>
        
      </div>
       <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredJobs.length / itemsPerPage)}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

