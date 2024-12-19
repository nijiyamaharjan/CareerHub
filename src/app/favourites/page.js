"use client";

import Link from "next/link";
import { useFavorites } from "../context/FavouritesContext";
import Logo from "../components/Logo";

export default function FavoriteJobsPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Favorite Jobs</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-sm sm:text-base">No favorite jobs added yet.</p>
      ) : (
        <ul className="space-y-6">
          {favorites.map((job) => (
            <li
              key={job.id}
              className="mb-4 sm:mb-8 pb-2 hover:bg-gray-50 border-b"
            >
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-start sm:items-center mb-3 sm:mb-0">
                  <div className="hidden sm:block">
                    <Logo companyName={job.company} />
                  </div>
                  
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/job/${job.id}`} className="flex-grow">
                    <div className="sm:w-64 ml-0 sm:ml-2 flex flex-row">
                      <div className="sm:hidden">
                        <Logo companyName={job.company} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-gray-500">{job.company}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mobile View Tags */}
                <div className="flex flex-col flex-wrap gap-2 mb-3 sm:hidden">
                  <div className="flex gap-2">
                    <span className="bg-gray-200 px-2 py-1 rounded-lg text-sm flex items-center">
                      {job.level}
                    </span>
                    <span className="bg-gray-200 px-2 py-1 rounded-lg text-sm flex items-center">
                      {job.time}
                    </span>
                  </div>          
                  <span className="font-semibold">
                    {job.location}
                  </span>
                </div>

                {/* Desktop View Info */}
                <div className="hidden sm:flex items-center flex-grow ">
                  <p className="w-28">
                    <span className="bg-gray-200 px-2 py-1 rounded-lg inline-block">
                      {job.level}
                    </span>
                  </p>
                  <p className="w-28">
                    <span className="bg-gray-200 px-2 py-1 rounded-lg inline-block">{job.time}</span>
                  </p>
                  <p className="font-semibold w-48">{job.salaryRange}</p>
                  <p className="font-semibold w-32">{job.location}</p>
                </div>

                <p className="text-gray-700 mb-3 sm:hidden font-semibold">
                  {job.salaryRange}
                </p>               
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
