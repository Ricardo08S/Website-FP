import Image from "next/image";
import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useEffect } from "react";

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
      <main className="h-full w-full scroll-smooth bg-black">
        <nav className="navbar fixed flex w-full flex-row-reverse items-center justify-center gap-40 bg-gradient-to-l from-green-700 to-gray-600 py-4 px-6">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className=" cursor-pointer border-b-2 border-transparent text-white transition duration-300 hover:border-white"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=" cursor-pointer border-b-2 border-transparent text-white duration-300 hover:border-white"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="cursor-pointer border-b-2 border-transparent text-white duration-300 hover:border-white"
              >
                NEWS
              </a>
            </li>
            <li>
              <a
                href="#achievement"
                className=" cursor-pointer border-b-2 border-transparent text-white duration-300 hover:border-white"
              >
                ACHIEVEMENT
              </a>
            </li>
          </ul>
          <div>
            <Image
              src="/images/navbar_icon.png"
              alt="logo"
              width={150}
              height={80}
              className="object-cover"
            />
          </div>
        </nav>

        <section
          className="bg-gradient-to-b from-emerald-600 to-black"
          id="home"
        >
          <div className="md:flex-shrink-0 md:flex-grow">
            <div>
              <Image
                src="/images/bg1.png"
                alt="sampul"
                width={1920}
                height={200}
              />
            </div>
            <div>
              <div className="-my-24 grid justify-center text-center">
                <button
                  type="button"
                  className="bg-gradient-to-u flex w-full rounded-lg from-gray-700 to-emerald-700 px-12 py-3 font-sans text-base font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-black"
                >
                  <Link href="https://www.linkedin.com/company/team-barunastra-its/?originalSubdomain=id">
                    EXPLORE MORE
                  </Link>
                </button>
              </div>
              <div className="layout -my-44 grid flex-col items-center justify-center text-white">
                <h3 className="font-m mx-auto px-44 text-white shadow-2xl delay-150 duration-300 hover:translate-x-1">
                  WELCOME TO
                </h3>
                <p className="mt-3 max-w-xl justify-center text-center text-sm text-white">
                  BARUNASTRA ITS
                </p>
                <p className="mt-3 max-w-xl justify-center text-center text-sm text-white">
                  ROBOTIC TEAM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ayout mt-64 flex min-h-screen flex-col items-center justify-center text-center"
          id="about"
        >
          <div className="layout mt-64 flex flex-col items-center justify-center text-center">
            <h1 className="mt-5 text-3xl font-semibold text-emerald-200">
              ABOUT
            </h1>
            <h1 className="mt-5 text-3xl font-semibold text-emerald-200">
              BARUNASTRA
            </h1>
          </div>
          <div className="mt-9 px-20">
            <div className="flex flex-row justify-around gap-10 rounded-xl bg-gray-800 px-8 py-8 shadow-2xl">
              <div className="flex w-max flex-col items-start py-3 text-left text-white">
                <div className="items-start justify-start gap-3 text-left">
                  <h1 className="text-xl font-bold">
                    Barunastra ITS Roboboat Team
                  </h1>
                </div>
                <p className="text-md mt-2 max-w-md text-justify font-normal">
                  “Barunastra” is an incorporation of the Sanskrit words,
                  “Varuna” which is the Hindi god of the sea; and “astra”
                  meaning weapon. Therefore, Barunastra is interpreted as the
                  sea god's weapon. Barunastra ITS focuses on the development of
                  unmanned ships to advance the development of marine technology
                  in world.
                </p>
                <div className="mt-10 justify-center text-center">
                  <button
                    type="button"
                    className="inline-block w-full rounded-lg bg-emerald-500 px-12 py-3 font-sans text-base font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-slate-900"
                  >
                    Our History
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src="/images/about1.png"
                  alt="g1"
                  width={689}
                  height={370}
                  className="mt-2 inline-flex border-8 border-emerald-500 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="layout mt-64 flex min-h-screen flex-col items-center justify-center text-center"
          id="news"
        >
          <div className="flex flex-row justify-center gap-3">
            <h1 className="font-sem mt-3 text-2xl text-emerald-200">
              LATEST NEWS
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="mx-auto -mt-4 inline-flex scale-75 cursor-pointer flex-row justify-center gap-10">
              <Image
                src="/images/news1.png"
                alt="news 1"
                width={360}
                height={450}
                className="hover:scale-80 rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-2"
              />
              <Image
                src="/images/news2.png"
                alt="news 3"
                width={360}
                height={450}
                className="hover:scale-80 rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-2"
              />
              <Image
                src="/images/news3.png"
                alt="news 5"
                width={360}
                height={450}
                className="hover:scale-80 rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-2"
              />
            </div>
            <div className="-mt-3 justify-center px-64 text-center">
              <button
                type="button"
                className="inline-flex w-full rounded-lg bg-black px-12 py-3 font-sans text-lg font-semibold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-emerald-600 hover:text-black"
              >
                <Link href="https://www.its.ac.id/news/2023/03/29/ungguli-mit-barunastra-its-pertahankan-juara-dunia-kali-ke-5/">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="layout mt-32 flex flex-col items-center justify-center text-center">
          <div className="layout mt-64 flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold text-emerald-200">OUR</h1>
            <h1 className="text-3xl font-normal text-emerald-200">DIVISION</h1>
          </div>
          <div className="mt-9 flex flex-row justify-center gap-7 px-20">
            <div className="flex flex-col items-center ">
              <div className="hover: -mt-12 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2">
                <div className="items-center rounded-xl bg-gray-800 px-10 py-3 shadow-xl">
                  <h1 className="max-w-lg text-center text-lg font-semibold text-white">
                    Mechanical
                  </h1>
                </div>
                <p className="max-w-lg py-3 text-center text-xs text-white">
                  Includes subdivision for design and production, MEC is
                  responsible for boat production in various aspects
                </p>
              </div>
              <div className="mb-10 items-center rounded-t-xl bg-transparent p-7 py-10 shadow-2xl">
                <div className="">
                  <Image
                    src="/images/mec.png"
                    alt="mec"
                    width={200}
                    height={60}
                    className="hover:scale-80 animate-shimmer cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="-mt-[51px] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <div className="items-center rounded-xl bg-gray-800 px-24 py-3 shadow-xl">
                  <h1 className="max-w-lg text-center text-sm font-semibold text-white">
                    Electrical & Programming
                  </h1>
                </div>
                <p className="max-w-lg py-3 text-center text-xs text-white">
                  Includes subdivision for electrical and programming, EPR
                  produces the electrical and control system of the boat
                </p>
              </div>
              <div className="mb-10 flex flex-col items-center rounded-t-xl bg-transparent py-10 px-7 shadow-2xl">
                <div className="">
                  <Image
                    src="/images/epr.png"
                    alt="epr"
                    width={200}
                    height={60}
                    className="hover:scale-80 animate-shimmer cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="-mt-[49px] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <div className="items-center rounded-xl bg-gray-800 px-[85px] py-3 shadow-xl">
                  <h1 className="max-w-lg text-center text-lg font-semibold text-white">
                    Non-Technical
                  </h1>
                </div>
              </div>
              <p className="max-w-lg py-3 text-center text-xs text-white">
                Includes subdivision for social branding, external and
                sponsorship, and finance and administration, NTC is responsible
                for all the non-technical activity in the team
              </p>
              <div className="mb-10 flex flex-col items-center rounded-t-xl bg-transparent px-7 py-11 shadow-2xl">
                <div className="">
                  <Image
                    src="/images/ntc.png"
                    alt="ntc"
                    width={200}
                    height={60}
                    className="hover:scale-80 animate-shimmer cursor-pointer items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Image src="/images/aaa.png" alt="gambar" width={1920} height={200} />
        </div>

        <section id="achievement">
          <div className="mt-40 px-56">
            <div className="flex flex-col justify-between rounded-3xl bg-emerald-900 p-28 shadow-2xl">
              <div className="px-64">
                <div className="-mt-24 flex flex-row items-center justify-center gap-3 py-5 text-center">
                  <h1 className="text-3xl font-bold text-white">
                    OUR ACHIEVEMENT
                  </h1>
                </div>
              </div>
              <p className="flex flex-col justify-center text-center text-sm font-normal text-white">
                Barunastra team has won many awards and usually every year we
                always win competitions on an international and national scale.
                Here are some of our successful triumph
              </p>
              <div className="mt-9 flex flex-row justify-around">
                <div className="flex w-max flex-col items-start py-3 text-left text-white">
                  <div>
                    <div className="w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-gray-700 px-3 py-1 text-left duration-300">
                      <h1 className="text-xl font-bold ">2023</h1>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p>
                        1st Place Autonomy Challenge Category & 2nd Place Design
                        Documentation
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-gray-700 px-3 py-1 text-left duration-300">
                      <h1 className="text-xl font-bold ">2021</h1>
                    </div>
                    <div className="text-md mt-1 flex max-w-xs flex-col text-left font-normal">
                      <p>- 1st Place Skills Video & Website</p>
                      <p>- 2nd Place Technical Design Report</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/roboboat.png"
                    alt="roboboat"
                    width={300}
                    height={60}
                    className="mt-10 cursor-pointer items-center px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                  />
                </div>
              </div>
              <hr className="my-20 border-4 border-gray-400" />
              <div className="mt-9 flex flex-row justify-around">
                <div>
                  <Image
                    src="/images/kkctbn.png"
                    alt="kkctbn"
                    width={250}
                    height={60}
                    className="mt-6 cursor-pointer items-center px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                  />
                </div>
                <div className="flex w-max flex-col items-start py-3 text-left text-white">
                  <div>
                    <div className="w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-gray-700 px-3 py-1 text-left duration-300">
                      <h1 className="text-xl font-bold ">2022</h1>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p>
                        1st Place ERC Category and 4th Place ASSD Category
                        (KKCTBN)
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="w-max items-start justify-start gap-3 rounded-lg bg-transparent bg-gray-700 px-3 py-1 text-left duration-300">
                      <h1 className="text-xl font-bold ">2021</h1>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p>
                        3rd Place Kompetisi Kapal Cepat Tak Berawak Nasional
                        (KKCTBN) 2021, Malang, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-48 flex flex-col items-center justify-center rounded-t-3xl bg-gradient-to-b from-emerald-600 to-gray-900 px-20 py-10 shadow-2xl">
          <div className="flex flex-row gap-20">
            <div>
              <Image src="/images/its.png" alt="its" width={240} height={60} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 text-lg">
                <p className="font-bold text-white">Our Contact</p>
              </div>
              <div className="-mt-3 text-sm font-normal text-white">
                <p>Mobile : 082189260999</p>
                <p>Email: barunastra.its@gmail.com</p>
              </div>
              <div className="flex flex-row gap-2 text-lg">
                <p className="font-bold text-white">Our Addres</p>
              </div>
              <div className="-mt-4 max-w-sm text-sm font-normal text-white">
                <p>
                  Sekretariat Robotika ITS, Pusat Robotika ITS, Jl. Teknik
                  Kimia, Kampus ITS Sukolilo, Surabaya, 60111
                </p>
              </div>
            </div>
            <div className="mt-7 flex cursor-pointer flex-col gap-4 text-base font-normal text-white">
              <div className="flex flex-row gap-2 ">
                <div>
                  <Image
                    src="/images/ytb.png"
                    alt="youtube"
                    width={20}
                    height={60}
                  />
                </div>
                <p className="-mt-1">
                  <Link href="https://www.youtube.com/@barunastraits9743">
                    Barunastra ITS
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-2 ">
                <div>
                  <Image
                    src="/images/line.png"
                    alt="line"
                    width={20}
                    height={60}
                  />
                </div>
                <p className="-mt-1">iax6973m</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <div>
                  <Image src="/images/ig.png" alt="ig" width={20} height={60} />
                </div>
                <p className="-mt-1">
                  <Link href="https://www.instagram.com/barunastra_its/">
                    barunastra_its
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-14 items-center justify-center text-center text-sm font-normal text-white">
            <p>© {new Date().getFullYear()} By Barunastra ITS Roboboat Team</p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
