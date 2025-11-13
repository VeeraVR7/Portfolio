export default function Education() {
  const timeline = [
    {
      id: 1,
      title: "KLN college of engineering",
      role:"B.E Mechanical Engineering",
      period:"2017 - 2021",
      desc: "Pursued B.E. Mechanical Engineering at KLN College of Engineering and graduated with 8.04 CGPA.",
      img: process.env.PUBLIC_URL +"/images/college.jpeg",
      side: "right",
    },
    {
      id: 2,
      title:"MyTvs",
      role: "Service Advisor",
      period:"2021-2025",
      desc: "Started my career as a Service Advisor at TVS, where I learned customer handling, service operations, and problem-solving skills.",
      img: process.env.PUBLIC_URL +"/images/tvs.jpeg",
      side: "left",
    },
    {
      id: 3,
      title: "Innoval Institute",
      role:"Full-Stack web development using python",
      period:"Feb2025- June2025 ",
      desc: "Successfully completed Python Full Stack Development course, building real-time projects.",
      img: process.env.PUBLIC_URL +"/images/innoval.jpeg",
      side: "right",
    },{
      id: 4,
      title: "Udamey",
      role:"Advance Python | Python for Data Science",
      period:"July2025-Nov2025 ",
      desc: "Successfully completed Python for Data Science course.",
      img: process.env.PUBLIC_URL +"/images/udemy.jpg",
      side: "left",
    },
  ];

  return (
    <div className="bg-primary text-white py-12" id="journey">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">My Journey</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 w-1 bg-blue-400 h-full transform -translate-x-1/2"></div>
        {timeline.map((step) => (
          <div
            key={step.id}
            className={`mb-12 flex items-center w-full  ${
              step.side === "left" ? "flex-row-reverse" : ""
            } relative`}
          >
            
            <div className=" absolute left-1/2 transform -translate-x-1/2 hidden md:block">
              <div className="w-6 h-6 bg-blue-500 rounded-full z-10"></div>
            </div>

            <div className={`w-auto flex justify-${step.side === "left" ? "end" : "start"}`}>
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg max-w-sm transition-transform hover:scale-105 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-sky-300">{step.title}</h3>
                  <h2 className="text-xl font-semibold text-sky-300">{step.period}</h2>
                  <h2 className="text-xl font-light">{step.role}</h2>
                  <img 
                  src={step.img}
                  alt={step.title}
                  className=" w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain rounded-lg mx-auto"
                />
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}