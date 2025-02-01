import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/8 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen p-4 fixed top-0 left-0 shadow-lg z-50">
      <div className="mb-6">
        {/* Sidebar Items */}
        <ul className="space-y-3">
          <li>
            <Link
              to="/dashboard"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/active-classes"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Active Classes
            </Link>
          </li>
          <li>
            <Link
              to="/entry-gate"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Entry Gate
            </Link>
          </li>
          <li>
            <Link
              to="/online-students"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Online Students
            </Link>
          </li>
          <li>
            <Link
              to="/wallet"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Your Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/virtual-library"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 text-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-transparent to-indigo-500/30 animate-[shimmer_2s_infinite]"></div>
              <span className="relative z-10 flex items-center justify-center gap-1">
                Virtual Library
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/game-arena"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 text-sm relative group"
            >
              <span className="animate-pulse group-hover:animate-none absolute inset-0 w-full h-full opacity-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md" />
              <span className="relative z-10">
                GameArena
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Help
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="block text-center py-1.5 px-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;