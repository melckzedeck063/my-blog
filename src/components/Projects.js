import React from 'react'

import web1 from '../images/web1.png';
import web2 from '../images/web2.png';
import web3  from '../images/web3.png';
import web4 from '../images/web4.png';

import mob1 from '../images/mob1.png';
import mob2  from '../images/mob2.png';
import mob3 from '../images/mob4.jpg';

import Corouser from './Corouser';



export default function Projects() {
    const project1 = [web1, web2, web3,web4];
    const project2 = [mob1,mob2,mob3];

  return (
    <div className='h-full bg-gradient-to-r from-sky-900 viaa-cyan-500 to-teal-600 w-full'>
        <div class="container py-24 mx-auto md:px-6 px-3">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32">
    <h2 class="mb-16 text-center text-3xl font-bold text-[hsl(218,81%,95%)]">My Projects</h2>

    <p class="text-neutral-500 dark:text-neutral-300 mb-12">
          I offer different services concerning designing branding and developing web based application
          like website e-commerce sites and mobile application that runs on both IOS and android with
          cutting-edge technologies so as to make your idea into real product
        </p>

    <div class="mb-16 flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-8/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          {/* <img src={mob1} class="w-full" alt="Louvre" /> */}
          <Corouser corouser1={project1} />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-4/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold text-[hsl(218,81%,75%)]">Pharmacy Management System</h3>
        
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
        A Pharmacy Management System is designed to help pharmacy owners and staff streamline their
         daily operations, enhance customer service, and ensure accurate medication management. Here 
         are some key functionalities typically found in a comprehensive pharmacy management system
         Inventory Management, Point of sale, Reporting and Analytics, Pharmacist and Staff Management.
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
          I developed this system using React redux and styled using Material UI and Tailwindcss
          and the API was built using Java(JSP) and used MYSQL as database with the help and support from my friend <span  className='text-xl text-white font-bold'>Gemin Child</span>
        </p>
      </div>
    </div>

   
    <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-8/12 lg:pl-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          {/* <img src={web1} class="w-full" alt="Louvre" />  */}
          <Corouser corouser1={project2} />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-4/12 lg:pr-6">
        <h3 class="mb-4 text-2xl font-bold text-[hsl(218,81%,75%)]">Instant Food App</h3>
        
        <p class="text-neutral-500 dark:text-neutral-300 mb-6">
        A Instant Food App is designed to help restaurant, hotel owners and their customers streamline
         their daily operations, enhance customer service, and ensure accurate and real time services. Here 
         are some key functionalities typically found in a comprehensive Instant Food App  Restaurants list,
         Menu Listing, Food ordering etc
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
          I developed this app using React Native redux and styled using Styled Components and Tailwindcss
          and the API was built using Node js and Express and used MongoDB as database.  Onne major advantage 
          of this app is that it can run on both IOS and Android
        </p>
      </div>
    </div>

  </section>
  {/* <!-- Section: Design Block --> */}
</div>
    </div>

  )
}
