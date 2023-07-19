
import TeamCard from './teamCard';
import {teamData} from '../../data/Data.js';

function Team() {
  
  return (
    <div className='space-y-10  mt-20 mb-20'>
     <div className='flex  flex-col p-2 w-full min-w-[250px] text-center'>
       <h1 className=" text-2xl sm:text-5xl font-bold text-text-color  tracking-[0.2px] text-center   mt-10">Our Doctors</h1>
     
      <p className='text-p-text mt-5 sm:w-[50%] mx-auto'> Our medical staffs are well equipped to meet your medical needs 24/7. With three categories covering over 200 conditions, help is always assured.</p>
     </div>
      <div className='flex  flex-col sm:flex-row w-[90%] mx-auto sm:space-x-10'>
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

 