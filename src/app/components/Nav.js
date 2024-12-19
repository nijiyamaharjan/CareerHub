import Link from "next/link"
import { Briefcase, BookmarkPlus } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              
              <Briefcase className="w-8 h-8" />
              <span>Career Hub</span>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/favourites" 
              className="inline-flex items-center gap-2 px-4 py-2.5 text-lg font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <BookmarkPlus className="w-5 h-5" />
              <span>Favorite Jobs</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav