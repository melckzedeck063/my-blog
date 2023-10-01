import React from 'react'
import { StickyNavbar } from './NavBar'

import cotton from '../images/cotton.jpeg';

export default function Landing() {
  return (
    <div>
        
 <div class="px-6 py-12  md:px-12 xsm:py-6 lg:text-left text-left">
    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2 xl:grid-cols-2">
        <div class="mt-12 lg:mt-0">
            <h3  className='mt-0 mb-6 text-3xl text-[hsl(174,97%,74%)] font-bold tracking-tight md:text-4xl xl:text-5xl'>It's me</h3>
          <h1 class="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
            Melckzedeck <br /><span class="text-[hsl(218,81%,75%)]">Daniel James</span>
          </h1>

          <p class="text-neutral-500 dark:text-neutral-300 mb-8">
          Junior Software Developer from Dodoma Tanzania with 
        excellent skills in designing and building web and 
       mobile application with cutting-edge technologies
        </p>
        
          <a class="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="/projects" role="button">Browse Projects</a>
          <a class="inline-block rounded bg-slate-800 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-indigo-600 hover:bg-opacity-40 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
            data-te-ripple-init data-te-ripple-color="light" href="/contacts" role="button">Contacts</a>
        </div>
        <div class="mb-12 lg:mb-0">
          <img src={cotton}
            class="w-auto h-70 xsm:h-auto rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>
  

    </div>
  )
}
