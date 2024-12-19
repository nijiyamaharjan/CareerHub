import mockJobs from "../../data/mockJobs";
import JobDetailClient from "./JobDetailClient";

export function generateStaticParams() {
  return mockJobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailPage({ params }) {
  const job = mockJobs.find((job) => job.id === parseInt(params.id));

  if (!job) {
    return <p className="text-center text-lg text-red-500">Job not found</p>;
  }

  return <JobDetailClient job={job} />;
}