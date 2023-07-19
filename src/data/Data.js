
import serviceIcon1 from "../assets/serviceIcon1.png";
import serviceIcon2 from "../assets/serviceIcon2.png";
import serviceIcon3 from "../assets/serviceIcon3.png";
import serviceIcon4 from "../assets/serviceIcon4.png";
import doctor1 from "../assets/teamImage/image1.png";
import doctor2 from "../assets/teamImage/image2.png";
import doctor3 from "../assets/teamImage/image3.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import aspiration1 from "../assets/aspirationIcon1.png";
import aspiration2 from "../assets/aspirationIcon2.png";
import aspiration3 from "../assets/aspirationIcon3.png";
import doctorNo from "../assets/doctorsOnBoardIcon.png";
import pharmaciesNo from "../assets/onBoardIcon.png";
import servedNo from "../assets/servedIcon.png";
import phone from "../assets/phone.png";
import chain from "../assets/chain.png";
import timeIcon from "../assets/time.svg";


export const serviceData = [
    {
        icon: serviceIcon1,
        title: 'Laboratory',
        description: ' Through our high-quality, experienced partners, we offer you reliable laboratory services administered with the latest technologies.',
        id: 'service1',
        flag:'service'
    },
   
    {
        icon: serviceIcon2,
        title: 'Customized Tele - Consultations',
        description: 'With 24/7 access to highly qualified doctors, therapists,psychiatrists, and psychologists, care is always assured. Our staff members are always ready',
        id: 'service2',
        flag:'service'
  },
     {
        icon: serviceIcon3,
        title: 'Free Follow up Appointments.',
        description: 'After your prescriptions, our doctors will book a free follow-up appointment with you to ensure that you are well.',
        id: 'service3',
        flag:'service'
    },
    
    {
        icon: serviceIcon4,
        title: 'Prescriptions & Free Delivery',
        description: ' We maximize convenience by digitally issuing prescriptions through your mobile device. We offer our customers a remote visit to our pharmacies',
        id: 'service4',
        flag:'service'
    },
]

export const keyFocusData = [
    {
        icon: icon1,
        title: 'Urgent Care',
        description: "Flu, colds, skin conditions, women's and men's health, allergies headaches",
        id: 'keyFocus1',
        flag:'keyFocus'
    
    },
     {
        icon: icon2,
        title: 'Preventative Health',
        description: "  Wellness visits, family medicine, women's and men's wellness, nutrition, medication management",
         id: 'keyFocus2',
        flag:'keyFocus'
    },
      {
        icon: icon3,
        title: 'Mental Health',
        description: " Anxiety, depression, relationships, trauma and loss, screening, postpartum",
          id: 'keyFocus3',
        flag:'keyFocus'
    }
]


export const aspirationData = [
    {
         
        icon: aspiration1,
        title: 'Reduce Health Care Costs',
        description: "Dynamic diagnostic, treatment, and consultation services are available at affordable subscription plans to all patients",
        id: 'aspiration1',
        flag:'aspiration'
    
    },
     {
        icon: aspiration2,
        title: 'Reduce Pressure on Medical Staff',
        description: "Access to online medical pharmacies where patients can order various prescriptions and have them delivered at their convenience.",
         id: 'aspiration2',
        flag:'aspiration'
    },
      {
        icon: aspiration3,
        title: 'Access Quality Healthcare',
        description: "  Offline and online access allows patients to conveniently access our services without technological barriers.",
        id: 'aspiration3',
        flag:'aspiration'
    }
]

export const appreciationData = [
  {
    icon: servedNo,
    number: '1K',
    title: 'Patients Served',
    customStyle:'bg-[#C92B27]',
    id:'appreciation1'
  },
  {
    icon: pharmaciesNo,
    number: '200',
    title: 'Pharmacies on our platform',
    customStyle:'bg-[#FF7E07]',
    id:'appreciation2'
  },
  {
    icon: doctorNo,
    number: '10K',
    title: 'Doctors on our platform',
    customStyle:'bg-[#2FE5A7]',
    id:'appreciation3'
  }
]


export const howData = [
  {
    icon: timeIcon,
    title: 'Book Your Appointment',
    description: 'Book an appointment with your selected doctor.Book your appointment through a call or online through our app',
    id:'how1'
  },
  {
    icon: phone,
    title: 'Primetel App Setup',
    description: 'If you are a first time user, you will need to create a new account using the link provided after booking your appointment.If you are a returning user, you will need to login to your account.',
    id:'how2'
  },
  {
    icon: chain,
    title: 'Get your prescribed medicine',
    description: 'Access  your prescriptions through our  platform',
    id:'how3'
  }
]



export const valuesData = [
          {
        icon: serviceIcon1,
        title: 'Ownership',
        description: " We personalise your medical journey and walk with you across all milestones until recovery. We are problem solvers who ensure that your medical journey is nothing short of healing and restoration.",
        id: 'value1',
    },
          {
        icon: serviceIcon2,
        title: 'Ownership',
        description: "You are the reason we operate. We care about your well-being and are there 24/7 to ensure you remain well. You matter!",
        id: 'value2',
          }
                ,{
        icon: serviceIcon3,
        title: 'Inclusivity ',
        description: " We don't leave anyone behind. Irrespective of your financial, environmental, religious, and political backgrounds, be assured of customised help from our experienced team.",
        id: 'value3',

                },
                      {
        icon: serviceIcon4,
        title: 'Flexibility ',
        description: "    We are relentless in maximising our capacities to meet the needs of our customers. We aim to challenge the standards every time with our unmatched flexibility in providing our services.",
        id: 'value4',
    }
]




export const teamData=[
    {
      name: 'Dr. Doreen Kaaya',
      profession: 'Urgent Care Specialist',
        image: doctor1,
      id:'teamMember1'
    },
     {
      name: 'Dr. Edna Kilusu',
      profession: 'Mental Health Specialist',
         image: doctor2,
      id:'teamMember2'
    },
       {
      name: 'Dr. Gift Karend',
      profession: 'Preventative Health Specialist',
           image: doctor3,
      id:'teamMember3'
    }
  ];

