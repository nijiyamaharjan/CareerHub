"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppliedJobsContext = createContext();

export function useAppliedJobs() {
  return useContext(AppliedJobsContext);
}

export function AppliedJobsProvider({ children }) {
  const [appliedJobs, setAppliedJobs] = useState(() => {
    if (typeof window !== "undefined") {
      const storedAppliedJobs = localStorage.getItem("appliedJobs");
      return storedAppliedJobs ? JSON.parse(storedAppliedJobs) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    }
  }, [appliedJobs]);

  const addAppliedJob = (job) => {
    setAppliedJobs((prev) => {
      const newAppliedJobs = [...prev, job];
      return newAppliedJobs;
    });
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
