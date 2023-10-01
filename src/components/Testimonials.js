import React from 'react'

import image1  from '../images/wity.jpeg';
import image3 from '../images/raster.jpg';

export default function Testimonials() {
  return (
    <div class="container py-16 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mbb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold text-[hsl(174,97%,74%)]">Testimonials</h2>

    <div class="grid gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-10">

    <div>
      <div
        class="block rounded-lg bg-white shadow-lg bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
        <div class="h-24 overflow-hidden rounded-t-lg bg-[#4e5aca]"></div>
        <div
          class="mx-auto -mt-12 w-32 h-32 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Gemin Child</h4>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia
            architecto.
          </p>
        </div>
      </div>
    </div>

      <div>
      <div
        class="block rounded-lg bg-white shadow-lg bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
        <div class="h-24 overflow-hidden rounded-t-lg bg-[#40476d]"></div>
        <div
          class="mx-auto -mt-12 w-32 h-32 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src={image3} />
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Msham Said</h4>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia
            architecto.
          </p>
        </div>
      </div>
    </div>

      <div>
      <div
        class="block rounded-lg bg-white shadow-lg bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
        <div class="h-24 overflow-hidden rounded-t-lg bg-[#c4caed]"></div>
        <div
          class="mx-auto -mt-12 w-32 h-32 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src={image1} />
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Whitney Menard</h4>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia
            architecto.
          </p>
        </div>
      </div>
    </div>

      
      <div>
      <div
        class="block rounded-lg bg-white shadow-lg bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-sky-600">
        <div class="h-24 overflow-hidden rounded-t-lg bg-[#262d51]"></div>
        <div
          class="mx-auto -mt-12 w-32 h-32 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"/>
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">Lisa Curdow</h4>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia
            architecto.
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
