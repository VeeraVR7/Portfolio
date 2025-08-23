import { useState } from "react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = {
    Frontend: [
      { name: "HTML", image: "/images/html.png" },
      { name: "CSS", image: "/images/css.png" },
      { name: "JavaScript", image: "/images/js.png" },
      { name: "Bootstrap", image: "/images/bootstrap.png" },
      { name: "jQuery", image: "/images/jquery.png" },
      { name: "Tailwind CSS", image: "/images/tailwind.png" },
      { name: "React", image: "/images/react.png" },
    ],
    Backend: [
      { name: "Python", image: "/images/python.png" },
      { name: "Django", image: "/images/django.png" },
      { name: "REST API", image: "/images/api.png" },
    ],
    Database: [
      { name: "MySQL", image: "/images/mysql.png" },
      { name: "PostgreSQL", image: "/images/sql.png" },
    ],
    Tools: [
      { name: "Git / GitHub", image: "/images/git.png" },
      { name: "VS Code", image: "/images/vscode.png" },
    ],
  };

  const displayedSkills =
    selectedCategory === "All"
      ? Object.values(skills).flat()
      : skills[selectedCategory] || [];

  return (
    <section id="skills" className="py-12 bg-primary">
      <h2 className="text-3xl font-bold text-indigo-400 text-center mb-8">
        My Skills
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Frontend", "Backend", "Database", "Tools"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-teal-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0f172a] text-white rounded-xl p-6 flex flex-col items-center 
                       shadow-md border border-gray-800 
                       hover:bg-[#1e293b] hover:border-indigo-200 hover:shadow-orange-500
                       transition duration-300 cursor-pointer"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-3 object-contain"
            />
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}