function MemberContent({ title, problem, solution }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="space-y-6">

        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">
            Problem Faced
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {problem}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            Solution / Suggestion
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {solution}
          </p>
        </div>

      </div>
    </div>
  );
}

export default MemberContent;