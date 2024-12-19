"use client"

import Link from "next/link";
import { useFavorites } from "../context/FavouritesContext";
import Logo from "../components/Logo";



export default function FavoriteJobsPage() {
  const { favorites } = useFavorites();

  return (
    <div className="favorite-jobs-list p-8">
      <h2 className="text-2xl font-bold mb-4">Favorite Jobs</h2>
      {favorites.length === 0 ? (
        <p className="text-center">No favorite jobs added yet.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((job) => (
            <li key={job.id} className="my-8 py-2 flex justify-center items-center hover:bg-gray-50">
              <Logo companyName={job.company} />
              <Link href={`/job/${job.id}`}>
              <div className="w-64">
                <h3 className="font-semibold text-lg w-64">{job.title}</h3>
                <p className="text-gray-500">{job.company}</p>
              </div> 
              </Link>    
              <p className="w-28">
                <span className="bg-gray-200 px-2 py-1 rounded-lg inline-block">{job.level}</span>
              </p>
              <p className="w-28">
                <span className="bg-gray-200 px-2 py-1 rounded-lg inline-block">{job.time}</span>
              </p>
              <p className="font-semibold w-48">{job.salaryRange}</p>
              <p className="font-semibold w-32">{job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
