import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/8 bg-gray-900 text-white h-screen p-4 overflow-y-auto">
      <div className="mb-6">
        {/* User Section */}
        <ul className="space-y-4">
          <li><Link to="/dashboard" className="hover:text-gray-300">User</Link></li>
          <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
          <li><Link to="/active-classes" className="hover:text-gray-300">Active Classes</Link></li>
          <li><Link to="/entry-gate" className="hover:text-gray-300">Entry Gate</Link></li>
          <li><Link to="/online-students" className="hover:text-gray-300">Online Students</Link></li>
          <li><Link to="/wallet" className="hover:text-gray-300">Your Wallet</Link></li>
          <li><Link to="/help" className="hover:text-gray-300">Help</Link></li>
          <li><Link to="/" className="hover:text-gray-300">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;