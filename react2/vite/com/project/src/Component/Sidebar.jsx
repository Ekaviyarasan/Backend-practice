import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `block px-4 py-3 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 bg-white shadow-lg p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        College Portal
      </h1>

      <nav className="space-y-3">
        <Link to="/" className={linkStyle("/")}>
          Dashboard
        </Link>

        <Link to="/member1" className={linkStyle("/member1")}>
          Member One
        </Link>

        <Link to="/member2" className={linkStyle("/member2")}>
          Member Two
        </Link>

        <Link to="/member3" className={linkStyle("/member3")}>
          Member Three
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;