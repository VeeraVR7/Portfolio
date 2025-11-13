import aboutimg from '../assets/me.png';

export default function About() {
  const config = {
    intro: "Passionate and highly proficient Full Stack Developer specializing in React.js and Python/Django, with hands-on training in RESTful API development and data analysis using SQL/NoSQL databases. Proven ability in responsive web design, debugging, and problem-solving. Seeking an Entry-Level Software Developer role to leverage technical training and contribute to dynamic, scalable applications. ",
    frontend: "Front-end: HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind CSS, React",
    backend: "Back-end: Python, Django, MySQL, REST API, PostgreSQL,MongoDB ",
    tools: "Tools & Practices: Git, Responsive Web Design,vscode,JuipterNotebook",
    DataScience_Analytics:"Data Science&Analytics:NumPy, Pandas, Matplotlib, Machine Learning (ML), Data Analysis, Excel, Power BI, Tableau", 
    projects: "As part of my training, I developed practical projects such as a Library Management System and an E-commerce Website, which gave me hands-on experience with the end-to-end development process—from designing user-friendly interfaces to managing databases. I’m now excited to begin my career in the IT industry, where I can apply my skills, continuously learn, and contribute to impactful projects."
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2 flex justify-center">
        <img src={aboutimg} className="w-40 h-40 md:w-52 md:h-52 mt-20 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg hover:border-orange-500 transition duration-300 cursor-pointer" alt="About me" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-indigo-400 mb-5 w-[170px] font-bold">About Me</h1>
          <p className="text-white mb-4">{config.intro}</p>

          <ul className="list-disc list-inside text-white mb-4">
            <li>{config.frontend}</li>
            <li>{config.backend}</li>
            <li>{config.DataScience_Analytics}</li>
            <li>{config.tools}</li>
          </ul>

          <p className="text-white">{config.projects}</p>
        </div>
      </div>
    </section>
  );
}