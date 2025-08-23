import devimg from '../assets/developer.png'
import { FaSquareXTwitter,FaFacebook,FaLinkedin,FaGithub  } from "react-icons/fa6";
export default function Hero() {
    const config={
        subtitle:'Im a Full-stack web developer',
        twitter:" https://x.com/Veeramuthuvel07?t=zAe_dCmelkn0iYesh6M_hA&s=08",
        facebook:"https://www.facebook.com/share/17DCSm1xs8/",
        linkedin:"https://www.linkedin.com/in/veeramuthuvel-p-631b5a230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github:"https://github.com/VeeraVR7"
    }
    return<section className='flex flex-col md:flex-row px-5 py-32  justify-center'>
        <div className='md:w-1/2'>
        <h1 className=' text-gray-200 text-4xl md:text-6xl font-mon-font'>Hi,<br/>Im <span className='text-sky-400'>Veeramuthvel</span>
        <p className='text-2xl text-gray-400'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.twitter} className='pr-5  hover:text-white'><FaSquareXTwitter size={30}/></a>
            <a href={config.facebook} className='pr-5 hover:text-white'><FaFacebook size={30}/></a>
            <a href={config.linkedin} className='pr-5  hover:text-white'><FaLinkedin size={30}/></a>
            <a href= {config.github}className='pr-5  hover:text-white'><FaGithub size={30}/></a>
        </div>
        </div>
        <img className=' w-1/2 md:w-1/3 ' src={devimg}></img>
    </section>
}