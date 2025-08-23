import websitepage from '../assets/Python_with_django.jpeg'
import apppage from '../assets/Python.jpeg'
import port from'../assets/port.jpeg'
export default function Projects(){
    const config={
        projects:[
            {
                image:websitepage,
                description:"Django-based t-shirt store with authentication, cart, and order management",
                link:"https://github.com/VeeraVR7/Django-project",

            },
            {
                image:apppage,
                description:"Python desktop app for managing books, users, and borrowing system.",
                link:"https://github.com/VeeraVR7/Python-project",

            },
            {
                image:port,
                description:"Personal portfolio built with React and Tailwind CSS.",
                link:"https://github.com/VeeraVR7/Portfolio",

            },
        ]
    }
    return<section className="flex  flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h2 className="text-3xl font-bold text-indigo-400 text-center mb-8  ">Projects</h2>
            <p>These are My best project when i complete my Python course at the time of complete the course and after that i learn react in udamey</p>
        </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project)=>(
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}></img>
                    <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{project.description}</p>
                    <div className='flex justify-center'>
                        <a className="btn" target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>
                    
                </div>))}
        </div>
        </div>  
    </section>
}