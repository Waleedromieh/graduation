import React from 'react'
import img1 from '../../assets/2.jpg'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import article4 from '../../assets/article4.png'
import article5 from '../../assets/article5.png'
// import article2 from '../../assets/artcle2.png'
// import article3 from '../../assets/artcle3.png'
// import article4 from '../../assets/artcle4.png'
// import article5 from '../../assets/artcle5.png'
export default function About() {
  return (<div className='bg-white-200'>
  <div className='w-[100%] min-h-[500px] pt-15 '>
  <img src={img1} className='w-full h-full' alt="about img" />
  <p className='p-5 text-xl'>
  CPC stations (Central Processing Centers) are centralized hubs used to manage and monitor operations in sectors like energy, transportation, and logistics. They employ advanced technology and skilled personnel to analyze data from remote systems and coordinate responses. By centralizing control, CPCs enhance efficiency, decision-making speed, and overall system safety.</p>
  </div>
    <div className='flex flex-wrap p-6 shadow-2xl '>

      <div className='md:w-1/3 p-2 card  shadow-lg '>
      <div className='w-full '>
    <img src={article1} className='w-full' alt="" />
    <div className='p-3'>
      <h3 className='text-2xl mb-1'>Car Owner</h3>
      <p >CPC offers a range of automotive manufacturer-approved passenger vehicle engine oils and car care products, including CPC the Egypt's leading synthetic motor oil brand, the CPC family of premium motor oils and other engine oils for everyday driving.</p>
      <a href="#" className='text-red-400 text-xl mt-2' >Learn more <i class="fa-solid fa-chevron-right text-[15px]"></i></a>
    </div>
    </div>
      </div>
      <div className='md:w-1/3 p-2  card  shadow-lg '>
      <div className='w-full'>
    <img src={article2} className='w-full' alt="" />
    <div className='p-3'>
      <h3 className='text-2xl mb-1'>Truck Owner</h3>
      <p>
      Long engine life starts with CPC oils, a leader in engine oil technology for commercial and utility vehicles.        </p>
      <a href="#" className='text-red-400 text-xl mt-2' >Learn more <i class="fa-solid fa-chevron-right text-[15px]"></i></a>
    </div>
    </div>
      </div>
      <div className='md:w-1/3 p-2  card  shadow-lg '>
      <div className='w-full'>
    <img src={article3} className='w-full' alt="" />
    <div className='p-3'>
      <h3 className='text-2xl mb-1'>Motorcycle Owner</h3>
      <p>
      Trust CPC oils Racing to keep your scooter running smoothly.</p>
      <a href="#" className='text-red-400 text-xl mt-2' >Learn more <i class="fa-solid fa-chevron-right text-[15px]"></i></a>
    </div>
    </div>
      </div>
      <div className='md:w-1/3 p-2  card  shadow-lg '>
      <div className='w-full'>
    <img src={article4} className='w-full' alt="" />
    <div className='p-3'>
      <h3 className='text-2xl mb-1'>Depots</h3>
      <p>
      CPC offers a range of automotive manufacturer-approved passenger vehicle engine oils and car care products, including CPC the Egypt's leading synthetic motor oil brand, the CPC family of premium motor oils and other engine oils for everyday driving.</p>
      <a href="#" className='text-red-400 text-xl mt-2' >Learn more <i class="fa-solid fa-chevron-right text-[15px]"></i></a>
    </div>
    </div>
      </div>
      <div className='md:w-1/3 p-2  card  shadow-lg '>
      <div className='w-full'>
    <img src={article5} className='w-full' alt="" />
    <div className='p-3'>
      <h3 className='text-2xl mb-1'>Industrial Lubricants</h3>
      <p>
      Long engine life starts with CPC oils, a leader in engine oil technology for commercial and utility vehicles.      </p>
      <a href="#" className='text-red-400 text-xl mt-2' >Learn more <i class="fa-solid fa-chevron-right text-[15px]"></i></a>
    </div>
    </div>
      </div>
  
   
    </div>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55252.1641244831!2d31.342591950510904!3d30.05807355681836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scpc!5e0!3m2!1sen!2seg!4v1745868353757!5m2!1sen!2seg"
  className='w-full h-[500px]'
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
  )
}
