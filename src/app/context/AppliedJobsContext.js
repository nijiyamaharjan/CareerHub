"use client"

import { createContext, useContext, useState } from "react";

const AppliedJobsContext = createContext();

export function useAppliedJobs() {
  return useContext(AppliedJobsContext);
}

export function AppliedJobsProvider({ children }) {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const addAppliedJob = (job) => {
    setAppliedJobs((prev) => [...prev, job]);
  };

  const isAppliedJob = (jobId) => {
    return appliedJobs.some((job) => job.id === jobId);
  };

  return (
    <AppliedJobsContext.Provider
      value={{ appliedJobs, addAppliedJob, isAppliedJob }}
    >
      {children}
    </AppliedJobsContext.Provider>
  );
}
