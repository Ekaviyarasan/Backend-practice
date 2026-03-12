import { Link } from "react-router-dom";

function MemberCard({ name, link }) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Image</span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-500">
            View challenges and solutions
          </p>
        </div>

      </div>
    </Link>
  );
}

export default MemberCard;