
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
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export const serviceData = [
    {
        icon: service1,
        title: 'Laboratory',
        description: ' Through our high-quality, experienced partners, we offer you reliable laboratory services administered with the latest technologies.',
        id: 'service1',
        flag:1
    },
   
    {
        icon: service2,
        title: 'Customized Tele - Consultations',
        description: 'With 24/7 access to highly qualified doctors, therapists,psychiatrists, and psychologists, care is always assured. Our staff members are always ready',
        id: 'service2',
        flag:2
  },
     {
        icon: service3,
        title: 'Free Follow up Appointments.',
        description: 'After your prescriptions, our doctors will book a free follow-up appointment with you to ensure that you are well.',
        id: 'service3',
        flag:3
    },
    
    {
        icon: service4,
        title: 'Prescriptions & Free Delivery',
        description: ' We maximize convenience by digitally issuing prescriptions through your mobile device. We offer our customers a remote visit to our pharmacies',
        id: 'service4',
        flag:4
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
    number: '1M',
    title: 'Patients Served',
    customStyle:'bg-[#C92B27]',
    id:'appreciation1'
  },
  {
    icon: pharmaciesNo,
    number: '50',
    title: 'Pharmacies on our platform',
    customStyle:'bg-[#FF7E07]',
    id:'appreciation2'
  },
  {
    icon: doctorNo,
    number: '100+',
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


export const UrgentCare = [
  {
    key: '1',
    name: 'Cold & Flu',
    disease: 'Cold and flu, Cough, Fever, Nausea & Vomiting, Asthma, Sinus infection, and Headaches.'
  },
   {
    key: '2',
    name: 'Skin Conditions',
    disease: 'Acne, Rashes, Sunburn, Cellulitis and Hives'
  },
    {
    key: '3',
    name: "Women's Health",
    disease: 'UTIs, Fatigue, Migraines, and Yeast Infections.'
  },
     {
    key: '4',
    name: "Men's Health",
    disease: 'Joint Pains, STIs, and Stress Management'
  },
      {
    key: '5',
    name: 'Allergies',
    disease: 'Common Allergies, Skin Rashes, Seasonal Allergies, and Allergic Sinusitis.'
  },
       {
    key: '6',
    name: 'Headache',
    disease: 'Tension, Nausea, Migraines, Sinus Headaches, Stress, and Anxiety.'
    }
  ]

  export const PreventiveHealth = [
  {
    key: '1',
    name: 'Wellness Visits',
    disease: 'Lifestyle Counseling, Labs and Screenings, and Smoking Cessation.'
  },
   {
    key: '2',
    name: 'Family Medicine',
    disease: 'Vitamin Deficiency, Pediatric Issues, and Immunization Plans'
  },
    {
    key: '3',
    name: "Women’s Wellness",
    disease: 'Heart Health, Weight Management, Skin Conditions, Labs and Screening, and Emotional Wellness.'
  },
     {
    key: '4',
    name: "Men’s Wellness",
    disease: 'Behavioral Health Screening, Heart Health, Prostate Cancer Risk Counseling, Pre-Diabetes Screening, and Metabolic Syndromes'
  },
      {
    key: '5',
    name: 'Diet and Nutrition',
    disease: 'Weight Management, Vitamin Deficiencies, Obesity and Metabolic Syndromes.'
  },
       {
    key: '6',
    name: 'Medication Management',
    disease: 'Dosage Changes, Medication Interactions, Medication List Review, and Refills.'
    }
  ]

    export const MentalHealth = [
  {
    key: '1',
    name: 'Anxiety',
    disease: 'Stress, Workplace Issues, Headaches, Anxiety, Panic Attacks, Insomnia, and Restlessness'
  },
   {
    key: '2',
    name: 'Depression',
    disease: 'Bipolar, Low Mood, Fatigue, Mood Swings, and Chronic Depression'
  },
    {
    key: '3',
    name: "Postpartum",
    disease: 'Loss & Miscarriages, Family and Relationships, Anxiety and Stress.'
  },
     {
    key: '4',
    name: "Relationships",
    disease: 'Behavioral Therapy, Anger Management, Depression and Anxiety, and Stress'
  },
      {
    key: '5',
    name: 'Trauma and Loss',
    disease: 'Physical Abuse, PTSD, Grief, Trauma and Loss'
  },
       {
    key: '6',
    name: 'Screenings',
    disease: 'PTSD, Substance Abuse, Anxiety, and Depression'
    }
  ]