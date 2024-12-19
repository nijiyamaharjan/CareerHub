import mockJobs from "../../data/mockJobs";
import JobDetailClient from "./JobDetailClient";

export function generateStaticParams() {
  return mockJobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default async function JobDetailPage({ params }) {
  const id = await params.id;
  const job = mockJobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p className="text-center text-lg text-red-500">Job not found</p>;
  }

  return <JobDetailClient job={job} />;
}