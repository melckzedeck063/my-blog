import React from 'react'

import web1 from '../images/web1.png';
import mob1 from '../images/mob1.png';
import mob2  from '../images/mob4.jpg';

export default function Services() {
  return (
    <div className='h-full bg-gradient-to-r from-sky-900 viaa-cyan-500 to-teal-600 w-full'>
        <div class="container py-24 mx-auto md:px-6 px-3">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32">
    <h2 class="mb-16 text-center text-3xl font-bold text-[hsl(218,81%,95%)]">My Services</h2>

    <p class="text-neutral-500 dark:text-neutral-300 mb-8">
          I offer different services concerning designing branding and developing web based application
          like website e-commerce sites and mobile application that runs on both IOS and android with
          cutting-edge technologies so as to make your idea into real product
        </p>

    <div class="mb-16 flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={mob1} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold text-[hsl(218,81%,75%)]">User Interface Designing</h3>
        
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam.
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
          nulla saepe rerum aspernatur odio amet perferendis tempora
          mollitia? Ratione unde magni omnis quaerat blanditiis cumque
          dolore placeat rem dignissimos?
        </p>
      </div>
    </div>

    <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={web1} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 class="mb-4 text-2xl font-bold text-[hsl(218,81%,75%)]">Web Application Development</h3>
        
        <p class="text-neutral-500 dark:text-neutral-300">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
          dui, sit amet rutrum enim massa in ante. Curabitur in justo at
          lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
          vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
          vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
          tortor finibus, a eleifend lectus dictum. Cras tempor convallis
          magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
          imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
          at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
          felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
          iaculis est vehicula ut.
        </p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={mob2} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold text-[hsl(218,81%,75%)]">Mobile App Development</h3>
        
        <p class="text-neutral-500 dark:text-neutral-300">
          Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
          tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
          Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
          augue ornare. Proin ac dui vel lectus eleifend vestibulum et
          lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
          sem finibus eleifend egestas eu metus. Sed ut dolor id magna
          rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
          pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
          dignissim malesuada, lacus lorem commodo leo, tristique blandit
          ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
          Praesent nulla purus, commodo at euismod nec, blandit ultrices
          erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
          justo. Nulla condimentum hendrerit leo, in feugiat ipsum
          condimentum ac. Maecenas sed blandit dolor.
        </p>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
    </div>
  )
}
