'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-10 bottom-[0] xl:block hidden'>
          <Image
            src='/images/Cook/tools.jpg'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-15'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/lady2.png'
              alt='nothing'
              width={636}
              className='rounded-3xl'
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
              Crafted with Passion, Served with Pride
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              At Aurora Beauty, beauty is more than a service — it’s an experience. Founded with a passion for self-expression and self-care, we offer a refined space where artistry meets relaxation. From glowing skin treatments to transformative hair care and flawless makeup, every service is designed to help you feel confident, radiant, and uniquely you.

Our team of skilled professionals brings years of expertise, using premium products, personalized techniques, and a deep understanding of beauty trends and skin science. Whether you're preparing for a big moment or just indulging in a little self-love, Aurora is your destination for timeless beauty and modern style.

Step into Aurora. Step into your glow.
            </p>
           
            <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
