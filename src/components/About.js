import aboutimg from '../assets/me.png';

export default function About() {
  const config = {
    intro: "Hi, I’m Veeramuthuvel. I hold a degree in Mechanical Engineering, but my passion for technology inspired me to transition into software development. To build a strong foundation, I completed a Python Full Stack Development and React course, where I gained expertise in:",
    frontend: "Front-end: HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind CSS, React",
    backend: "Back-end: Python, Django, MySQL, REST API, PostgreSQL ",
    tools: "Tools & Practices: Git, Responsive Web Design",
    projects: "As part of my training, I developed practical projects such as a Library Management System and an E-commerce Website, which gave me hands-on experience with the end-to-end development process—from designing user-friendly interfaces to managing databases. I’m now excited to begin my career in the IT industry, where I can apply my skills, continuously learn, and contribute to impactful projects."
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2 flex justify-center">
        <img src={aboutimg} className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg hover:border-orange-500 transition duration-300 cursor-pointer" alt="About me" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-indigo-400 mb-5 w-[170px] font-bold">About Me</h1>
          <p className="text-white mb-4">{config.intro}</p>

          <ul className="list-disc list-inside text-white mb-4">
            <li>{config.frontend}</li>
            <li>{config.backend}</li>
            <li>{config.tools}</li>
          </ul>

          <p className="text-white">{config.projects}</p>
        </div>
      </div>
    </section>
  );
}