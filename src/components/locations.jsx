import React from 'react'
import Form from './form'
export default function Locations() {




  return (
    <div className='bg-gray-200 p-4' >
      <h1 className='mb-5 text-4xl font-bold text-center'>
        Locate Blood Nearby
      </h1>
      <div className='flex justify-between'>

        <div className='pl-8'>
          <Form/>
        </div>



        <div className='border-4 m-4'>
          <iframe className='w-[600px] h-[400px]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14042.849895507783!2d77.5504667!3d28.3675412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665930581721!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>


    </div>
  )
}
