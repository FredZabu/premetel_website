
import TeamCard from './teamCard';
import {teamData} from '../../data/Data.js';

function Team() {
  
  return (
    <div className='space-y-10  mt-20 mb-20'>
     <div className='flex  flex-col p-2 w-full min-w-[250px] text-center'>
       <h1 className='text-[#207EF7] mb-2'>Our Doctors</h1>
      <p className=' text-3xl text-[#0F123B] font-bold mb-4'>Specialized Doctors</p>
      <p className='text-[#0F123B]/60 w-[50%] mx-auto'> Our medical staffs are well equipped to meet your medical needs 24/7. With three categories covering over 200 conditions, help is always assured.</p>
     </div>
      <div className='grid grid-cols-1 gap-2 md:flex items-center mt-20 justify-center'>
        {
        teamData.map((data)=>
        <TeamCard key={data.id} name={data.name} profession={data.profession} image={data.image}/>
        )
      }
      </div>
    </div>
  )
}

export default Team

 