import resumeimg from '../assets/resumeimg.png';
export default function Contact(){
    const config={
        email:"veeramuthuvel5@gmail.com",
        phone:"9080474472",
    }
    return<section className='flex flex-col bg-primary px-5 py-32 text-white'id='contact'>  
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-indigo-400 mb-5 w-[180px] font-bold'>Reach Out</h1>
            <p className='text-white text-left'>If you want to discuss more in detail, please contact me</p>
            <p><span className='font-bold'>Email:{config.email}</span></p>
            <p><span className='font-bold'>Phone:{config.phone}</span></p>
        </div>
    </section>
}