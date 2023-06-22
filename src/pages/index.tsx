import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='h-full w-full bg-gradient-to-b from-slate-600 to-sky-400'>
        <header className='flex flex-row items-center justify-between bg-transparent px-5'>
          <div className='flex flex-row justify-start gap-5 bg-transparent py-5'>
            <div className='w-max cursor-pointer rounded-lg bg-transparent px-3 py-1 duration-300 hover:bg-sky-500'>
              <p className='text-semibold text-center text-white'>Home</p>
            </div>
            <div className='w-max cursor-pointer rounded-lg bg-transparent px-3 py-1 duration-300 hover:bg-sky-500'>
              <p className='text-semibold text-center text-white'>About</p>
            </div>
            <div className='w-max cursor-pointer rounded-lg bg-transparent px-3 py-1 duration-300 hover:bg-sky-500'>
              <p className='text-semibold text-center text-white'>Team</p>
            </div>
            <div className='w-max cursor-pointer rounded-lg bg-transparent px-3 py-1 duration-300 hover:bg-sky-500'>
              <p className='text-semibold text-center text-white'>
                Achievement
              </p>
            </div>
            <div className='w-max cursor-pointer rounded-lg bg-transparent px-3 py-1 duration-300 hover:bg-sky-500'>
              <p className='text-semibold text-center text-white'>Contact</p>
            </div>
          </div>
          <div>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={120}
              height={30}
              className='object-cover'
            />
          </div>
        </header>

        <section>
          <div className='md:flex-shrink-0 md:flex-grow'>
            <div>
              <Image
                src='/images/sampul2.png'
                alt='sampul'
                width={1920}
                height={708}
                className='my-0 mx-auto block h-auto w-full'
              />
            </div>
            <div>
              <div className='-my-24 grid justify-center text-center'>
                <button
                  type='button'
                  className='inline-block w-full animate-bounce rounded-lg bg-sky-500 px-12 py-3 font-sans text-base font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-slate-900'
                >
                  Let's Explore
                </button>
              </div>
              <div className='layout -my-44 grid flex-col items-center justify-center text-white'>
                <h1 className='mx-auto justify-center text-5xl font-extrabold shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                  WELCOME TO BARUNASTRA
                </h1>
                <p className='mx-auto mt-3 max-w-xl justify-center text-center text-sm text-white'>
                  Barunastra ITS Roboboat team is a research team from Sepuluh
                  Nopember Institute of Technology ITS which focuses on
                  developing unmaned vessels since 2012.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='layout mt-64 flex min-h-screen flex-col items-center justify-center text-center'>
          <div className='flex flex-row justify-between gap-3'>
            <h1 className='mt-4 text-3xl font-bold text-white'>LATEST</h1>
            <h1 className='mt-4 text-3xl font-normal text-white'>NEWS</h1>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className='mx-auto -mt-5 flex scale-75 cursor-pointer flex-row justify-center gap-10'>
              <Image
                src='/images/n1.jpg'
                alt='news 1'
                width={360}
                height={450}
                className='rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              />
              <Image
                src='/images/n3.jpg'
                alt='news 3'
                width={360}
                height={450}
                className='rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              />
              <Image
                src='/images/n5.jpg'
                alt='news 5'
                width={360}
                height={450}
                className='rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              />
            </div>
            <div className='-mt-3 justify-center px-64 text-center'>
              <button
                type='button'
                className='inline-block w-full rounded-lg bg-white px-12 py-3 font-sans text-lg font-semibold text-gray-800 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-500 hover:text-white'
              >
                Read More
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className='mt-5 flex flex-row items-center justify-center gap-3 text-center'>
            <h1 className='mt-4 text-3xl font-bold text-white'>ABOUT</h1>
            <h1 className='mt-4 text-3xl font-normal text-white'>BARUNASTRA</h1>
          </div>
          <div className='mt-9 px-20'>
            <div className='flex flex-row justify-around gap-10 rounded-xl bg-gray-800  px-8 py-8 shadow-2xl'>
              <div className='flex w-max flex-col items-start py-3 text-left text-white'>
                <div className='items-start justify-start gap-3 text-left'>
                  <h1 className='text-xl font-bold'>
                    Barunastra ITS Roboboat Team
                  </h1>
                </div>
                <p className='text-md mt-2 max-w-md text-justify font-normal'>
                  A research team from Sepuluh Nopember Institute of Technology
                  (ITS) which focuses on developing unmanned vessels since 2012.
                  We specialize in designing and producing ASV (Autonomous
                  Surface Vehicle), FERC (Fuel Engine Remote Control) and RC
                  (Remote Control) boats. Established by ITS Robotics, Metic
                  Club from Marine Engineering, and Hydromodelling Club from
                  Naval Architecture, Barunastra ITS has a strong commitment to
                  help foster the world’s maritime technology advancement.
                </p>
                <div className='mt-10 justify-center text-center'>
                  <button
                    type='button'
                    className='inline-block w-full rounded-lg bg-sky-500 px-12 py-3 font-sans text-base font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-slate-900'
                  >
                    Our History
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src='/images/g1.png'
                  alt='g1'
                  width={689}
                  height={370}
                  className='mt-2 rounded-xl border-8 border-sky-500 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-sky-500 hover:text-white'
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mt-36 flex flex-row items-center justify-center gap-3 text-center'>
            <h1 className='text-3xl font-bold text-white'>OUR</h1>
            <h1 className='text-3xl font-normal text-white'>DIVISION</h1>
          </div>
          <div className='mt-9 flex flex-row justify-center gap-7 px-20'>
            <div className='flex flex-col items-center '>
              <div className='mb-10 flex flex-col items-center rounded-t-xl bg-gray-200 p-7 shadow-2xl'>
                <div className=''>
                  <Image
                    src='/images/ep.png'
                    alt='ep'
                    width={200}
                    height={60}
                    className='animate-pulse cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  />
                </div>
              </div>
              <div className='-mt-12 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                <div className='items-center rounded-xl bg-gray-800 py-3 px-10 shadow-xl'>
                  <h1 className='max-w-lg text-lg font-semibold text-white'>
                    Electrical & Programming
                  </h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='mb-10 flex flex-col items-center rounded-t-xl bg-gray-200 px-7 py-12 shadow-2xl'>
                <div className=''>
                  <Image
                    src='/images/mec1.png'
                    alt='mec'
                    width={200}
                    height={60}
                    className='animate-pulse cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  />
                </div>
              </div>
              <div className='-mt-[51px] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                <div className='items-center rounded-xl bg-gray-800 px-24 py-3 shadow-xl'>
                  <h1 className='max-w-lg text-lg font-semibold text-white'>
                    Mechanical
                  </h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='mb-10 flex flex-col items-center rounded-t-xl bg-gray-200 px-7 py-11 shadow-2xl'>
                <div className=''>
                  <Image
                    src='/images/ofc.png'
                    alt='ofc'
                    width={200}
                    height={60}
                    className='animate-pulse cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  />
                </div>
              </div>
              <div className='-mt-[49px] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                <div className='items-center rounded-xl bg-gray-800 px-[85px] py-3 shadow-xl'>
                  <h1 className='max-w-lg text-lg font-semibold text-white'>
                    Non-Technical
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <p className='justify center mx-auto mt-9 max-w-4xl text-center text-lg font-normal text-white'>
            There are three main divisions that play an important role in this
            team. We believe what Michael Jordan has said, “Talent wins games,
            but teamwork and intelligence win championships”.
          </p>
        </section>
        <section>
          <div className='mt-40 px-56'>
            <div className='flex flex-col justify-between rounded-3xl bg-gray-800 p-28 shadow-2xl'>
              <div className='px-64'>
                <div className='-mt-24 flex flex-row items-center justify-center gap-3 rounded-b-2xl bg-sky-500 py-5 text-center'>
                  <h1 className='text-3xl font-bold text-white'>
                    OUR ACHIEVEMENT
                  </h1>
                </div>
              </div>
              <div className='mt-9 flex flex-row justify-around'>
                <div className='flex w-max flex-col items-start py-3 text-left text-white'>
                  <div>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2021</h1>
                    </div>
                    <div className='text-md mt-1 flex flex-col text-justify font-normal'>
                      <p>- 1st Place Skills Video & Website</p>
                      <p>- 2nd Place Technical Design Report</p>
                      <p>- AUVSI 14th International Roboboat Competition</p>
                      <p className='ml-2'>(Conducted Online)</p>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2019</h1>
                    </div>
                    <p className='text-md mt-1 flex max-w-xs flex-col text-left font-normal'>
                      1st Place AUVSI 12th International Roboboat Competition,
                      2019, Florida, USA
                    </p>
                  </div>
                  <div className='mt-8'>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2018</h1>
                    </div>
                    <p className='text-md mt- flex max-w-xs flex-col text-left font-normal'>
                      1st Place AUVSI 12th International Roboboat Competition,
                      2018, Florida, USA
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src='/images/roboboat.png'
                    alt='roboboat'
                    width={300}
                    height={60}
                    className=' mt-10 cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  />
                </div>
              </div>
              <hr className='my-20 border-4 border-sky-500' />
              <div className='mt-9 flex flex-row justify-around'>
                <div>
                  <Image
                    src='/images/kkctbn.png'
                    alt='kkctbn'
                    width={250}
                    height={60}
                    className='mt-6 cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  />
                </div>
                <div className='flex w-max flex-col items-start py-3 text-left text-white'>
                  <div>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2021</h1>
                    </div>
                    <div className='text-md mt-1 flex flex-col text-justify font-normal'>
                      <p>3rd Place</p>
                      <p>Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN)</p>
                      <p> 2021, Malang, Indonesia</p>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2020</h1>
                    </div>
                    <div className='text-md mt-1 flex flex-col text-justify font-normal'>
                      <p>1st Place</p>
                      <p>
                        Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN){' '}
                      </p>
                      <p>2020, Malang, Indonesia</p>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <div className='w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-sky-500 px-3 py-1 text-left duration-300'>
                      <h1 className='text-xl font-bold '>2018</h1>
                    </div>
                    <div className='text-md mt-1 flex flex-col text-justify font-normal'>
                      <p>2nd Place & Best Design Award</p>
                      <p>
                        Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN){' '}
                      </p>
                      <p>2019, Malang, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-20 justify-center px-64 text-center'>
                <button
                  type='button'
                  className='inline-block w-full rounded-lg bg-sky-500 px-12 py-3 font-sans text-lg font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-slate-900'
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className='mt-48 flex flex-col items-center justify-center rounded-t-3xl bg-gray-800 py-10 px-20 shadow-2xl shadow-black'>
          <div className='flex flex-row gap-20'>
            <div>
              <Image src='/images/its.png' alt='its' width={240} height={60} />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2 text-lg'>
                <p className='font-bold text-sky-500'>Our</p>
                <p className='font-bold text-white'>Contact</p>
              </div>
              <div className='-mt-4 text-sm font-normal text-white'>
                <p>Mobile: +62 895-8052-63010</p>
                <p>Email: barunastra.its@gmail.com</p>
              </div>
              <div className='flex flex-row gap-2 text-lg'>
                <p className='font-bold text-sky-500'>Our</p>
                <p className='font-bold text-white'>Addres</p>
              </div>
              <div className='-mt-4 max-w-xs text-sm font-normal text-white'>
                <p>
                  Sekretariat Robotika ITS, Pusat Robotika ITS, Jl. Teknik
                  Kimia, Kampus ITS Sukolilo, Surabaya, 60111
                </p>
              </div>
            </div>
            <div className='mt-7 flex flex-col gap-4 text-base font-normal text-white'>
              <div className='flex flex-row gap-2 '>
                <div>
                  <Image
                    src='/images/twitter.png'
                    alt='twitter'
                    width={20}
                    height={60}
                  />
                </div>
                <p className='-mt-1'>@BarunastraITS</p>
              </div>
              <div className='flex flex-row gap-2 '>
                <div>
                  <Image src='/images/fb.png' alt='fb' width={20} height={60} />
                </div>
                <p className='-mt-1'>Barunastra ITS</p>
              </div>
              <div className='flex flex-row gap-2 '>
                <div>
                  <Image src='/images/ig.png' alt='ig' width={20} height={60} />
                </div>
                <p className='-mt-1'>@barunastra_its</p>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-14 items-center justify-center text-center text-sm font-normal text-white'>
            <p>© {new Date().getFullYear()} By Barunastra ITS Roboboat Team</p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
