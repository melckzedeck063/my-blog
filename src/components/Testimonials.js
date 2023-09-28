import React from 'react'

import image1  from '../images/wity.jpeg';
import image3 from '../images/raster.jpg';

export default function Testimonials() {
  return (
    <div class="container py-16 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mbb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold text-[hsl(174,97%,74%)]">Testimonials</h2>

    <div class="grid gap-x-6 md:grid-cols-4 xl:gap-x-12">

    <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" class="w-full" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">Gemin Child</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
              Software Developer
            </h6>
            <ul class="mb-6 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
            <p>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={image3} class="w-full h-68" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">Msham Said</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
              Content Creator
            </h6>
            <ul class="mb-6 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
            <p>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={image1} class="w-full h-68" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">Whitney Njau</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
              Content Designer
            </h6>
            <ul class="mb-6 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
            <p>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" class="w-full" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">John Doe</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
              Web Developer
            </h6>
            <ul class="mb-6 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                  <path fill="currentColor"
                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
            <p>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
          </div>
        </div>
      </div>
      

      
      
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
  )
}
