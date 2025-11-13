import { useState } from "react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = {
    Frontend: [
      { name: "HTML", image:process.env.PUBLIC_URL + "/images/html.png" },
      { name: "CSS", image: process.env.PUBLIC_URL +"/images/css.png" },
      { name: "JavaScript", image: process.env.PUBLIC_URL +"/images/js.png" },
      { name: "Bootstrap", image: process.env.PUBLIC_URL +"/images/bootstrap.png" },
      { name: "jQuery", image:process.env.PUBLIC_URL +"/images/jquery.png" },
      { name: "Tailwind CSS", image: process.env.PUBLIC_URL +"/images/tailwind.png" },
      { name: "React", image: process.env.PUBLIC_URL +"/images/react.png" },
    ],
    Backend: [
      { name: "Python", image:process.env.PUBLIC_URL + "/images/python.png" },
      { name: "Django", image: process.env.PUBLIC_URL +"/images/django.png" },
      { name: "REST API", image: process.env.PUBLIC_URL +"/images/api.png" },
    ],
    Database: [
      { name: "MySQL", image: process.env.PUBLIC_URL +"/images/mysql.png" },
      { name: "PostgreSQL", image: process.env.PUBLIC_URL +"/images/sql.png" },
      { name: "MongoDB", image: process.env.PUBLIC_URL +"/images/Mongo.png" },

    ],
    DataScience: [
      { name: "Numpy", image: process.env.PUBLIC_URL +"/images/num.png" },
      { name: "Pandas", image:process.env.PUBLIC_URL + "/images/Pandas.png" },
      { name: "matplotlib", image:process.env.PUBLIC_URL + "/images/mat.png" },
      { name: "ML", image:process.env.PUBLIC_URL + "/images/ml.png" },
      { name: "Excel", image:process.env.PUBLIC_URL + "/images/el.png" },
      { name: "PowerBI", image:process.env.PUBLIC_URL + "/images/pb.png" },
      { name: "Tableau", image:process.env.PUBLIC_URL + "/images/table.png" },
    ],

    Tools: [
      { name: "Git / GitHub", image: process.env.PUBLIC_URL +"/images/git.png" },
      { name: "VS Code", image:process.env.PUBLIC_URL + "/images/vscode.png" },
      { name: "Jupyter notebook", image:process.env.PUBLIC_URL + "/images/jup.png" },
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

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Frontend", "Backend", "Database","DataScience", "Tools"].map((category) => (
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