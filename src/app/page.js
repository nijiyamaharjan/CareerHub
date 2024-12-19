import Feed from "./components/Feed";
import mockJobs from "./data/mockJobs"; 

export async function generateStaticParams() {
  const paths = mockJobs.map((job) => ({
    id: job.id.toString(),
  }));

  return paths;
}

export default function Home() {
  return (
    <section className="w-full flex flex-col min-h-screen">
      <Feed />
    </section>
  );
}

