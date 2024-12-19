import Link from "next/link";
import { Briefcase, BookmarkPlus } from "lucide-react";

const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-16">
          <div>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}
              className="inline-flex items-center gap-2 text-lg sm:text-2xl font-bold text-gray-900 hover:text-gray-700"
            >
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>Career Hub</span>
            </Link>
          </div>

          <div>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favourites`}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm sm:text-lg font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <BookmarkPlus className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Favorite Jobs</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
