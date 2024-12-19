
import Link from "next/link";
import Logo from "./Logo";
import { useFavorites } from "../context/FavouritesContext"; 
import Tooltip from '@mui/material/Tooltip';
import { Star } from 'lucide-react';5

export default function JobCard({ job }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    isFavorite(job.id) ? removeFavorite(job.id) : addFavorite(job);
  };
  
  return (
    <li className="mb-8 py-2 flex justify-center items-center hover:bg-gray-50">
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
      <p className="font-semibold w-32">
        {job.location}
      </p>
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
    </li>
  );
}
