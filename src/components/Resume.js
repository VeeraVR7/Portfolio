import resumeimg from '../assets/resumeimg.png';
export default function Resume(){
    const config={
        link:"https://drive.google.com/file/d/1XyUWZP_aeN6t3XmwbtzV1XNndasOxXLr/view?usp=drivesdk"
    }
    return<section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5  md:w-1/2 flex justify-center md:justify-end'> 
            <img className='w-[500px]' src={resumeimg}></img>
        </div>  
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-indigo-400 mb-5 w-[135px] font-bold'>Resume</h1>
            <p className='text-white text-left py-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
            </div>
        </div>
    </section>
}