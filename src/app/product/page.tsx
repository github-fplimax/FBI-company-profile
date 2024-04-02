import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product - Fresh Beton Indonesia",
  description: "Halaman product Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};
const Page = () => {
  return (
    <div>
      <Header />
      <section className=" container mx-auto">
        {/* header product page */}
        <div className="absolute inset-0 h-[500px] flex items-center justify-center">
          <Image
            src="/Readymix Concrete.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="pt-[550px] grid grid-cols-1 sm:grid-cols-2">
          <div data-aos="fade-up-left" className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Readymix Concrete.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
          <div data-aos="fade-up-right" className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-[#252525] text-2xl underline underline-offset-8">
                Ready Mix Concrete
              </h1>
              <p id="EN" className="py-4">
                Ready mix concrete is a type of concrete that has been
                industrially produced in specialized factories using modern
                equipment and technology.
              </p>
              <button className="text-white bg-green-500 hover:bg-green-600 transition-all py-2 px-4 rounded-md focus:outline-none capitalize pb-2">
                <Link href="/product/category/ready-mix-concrete">More</Link>
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="flex justify-center items-center pb-3">
            <div className="text-center">
              <h1 className="text-[#252525] text-2xl underline underline-offset-8">
                Concrete Pump
              </h1>
              <p id="EN" className="py-4">
                Concrete pump is a tool used to transport concrete from the
                mixing plant to the desired construction project site.
              </p>
              <button className="text-white bg-green-500 hover:bg-green-600 transition-all py-2 px-4 rounded-md focus:outline-none capitalize pb-2">
                <Link href="/product/category/concrete-pump">More</Link>
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Concrete Pump.jpg"
              alt="Product 4"
              className=" rounded-r-3xl"
            />
          </div>
          <div data-aos="fade-up-left" className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Precast.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
          <div data-aos="fade-up-right" className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-[#252525] text-2xl underline underline-offset-8">
                Precast
              </h1>
              <p id="EN" className="py-4">
                The precast method allows the manufacture of elements with high
                and consistent quality, as environmental conditions in the
                factory are more controlled than in the field.
              </p>
              <button className="text-white bg-green-500 hover:bg-green-600 transition-all py-2 px-4 rounded-md focus:outline-none capitalize pb-2">
                <Link href="/product/category/precast">More</Link>
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-[#252525] text-2xl underline underline-offset-8">
                Batching Plant
              </h1>
              <p id="EN" className="py-4">
                A concrete plant, also known as a batch plant or batching plant
                or a concrete batching plant, is equipment that combines various
                ingredients to form concrete.
              </p>
              <button className="text-white bg-green-500 hover:bg-green-600 transition-all py-2 px-4 rounded-md focus:outline-none capitalize pb-2">
                <Link href="/product/category/batching-plant">More</Link>
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Batching Plant.jpg"
              alt="Product 4"
              className=" rounded-r-3xl"
            />
          </div>
          <div data-aos="fade-up-left" className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Mobile Batching Plant.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
          <div data-aos="fade-up-right" className="flex justify-center items-center pb-3">
            <div className="text-center">
              <h1 className="text-[#252525] text-2xl underline underline-offset-8">
                Mobile Batching Plant
              </h1>
              <p id="EN" className="py-4">
                Mobile batching plant is a type of batching plant designed to be
                moved from one project site to another easily.
              </p>
              <button className="text-white bg-green-500 hover:bg-green-600 transition-all py-2 px-4 rounded-md focus:outline-none capitalize pb-2">
                <Link href="/product/category/mobile-batching-plant">More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
