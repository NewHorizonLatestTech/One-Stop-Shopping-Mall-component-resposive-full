import React from "react";
import Link from "next/link";

function FullPage() {
  return (
    <>
      {/* Main Heading */}
      <div className="flex bg-white h-[600px] relative bottom-60" id="inhg">
        <div
          className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
          id="inhgr"
        >
          <div>
            <h2
              className="text-3xl font-semibold text-gray-800 md:text-4xl hover:text-4xl hover:text-emerald-500 duration-300"
              id="buildyournewidea"
            >
              Build Your New{" "}
              <span className="text-indigo-600 hover:text-red-500 duration-300">
                Idea
              </span>
            </h2>
            <p
              className="mt-2 text-sm text-gray-500 md:text-base hover:text-red-500 hover:text-lg duration-300"
              id="loremdolor"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                href="#"
                id="getstartedtgh"
              >
                Get Started
              </Link>
              <Link
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="#"
                id="learndrf"
              >
                Learn More
              </Link>
            </div>
          </div>

          <img
            src="vi.png"
            className="w-8/12 h-[600px]"
            id="shoo"
            alt="shoes"
          />
        </div>
      </div>
      {/* Cards */}
      <div
        className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        id="cardmiandivwala"
      >
        <div className="flex">
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article1"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton1">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon1">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$850</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-300 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button
                      className="text-sm first-line:"
                      id="addtocartfghuukio"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article2"
          >
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton2">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon2">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$850</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-300 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article3"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton3">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon3">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500" id="fourfifth">
                    $450
                  </p>
                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-300 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article4"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton4">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon4">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$450</p>
                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-300 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>

        <div className="flex">
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article5"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <a href="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt="Hotel Photo"
                  />
                </a>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton5">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon5">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$450</p>
                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-300 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article6"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton6">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon6">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$450</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-100 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article7"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton7">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon7">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$450</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-100 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            id="article8"
          >
            <Link href="#" target="_blank">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link href="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80">
                  <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                    alt="Hotel Photo"
                  />
                </Link>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton8">
                  The Hilton Hotel
                </h2>
                <p className="mt-1 text-sm text-slate-400" id="lisbon8">
                  Lisbon, Portugal
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-red-500">$450</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-violet-600 px-4 py-1.5 text-white duration-100 hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex mr-20 ml-20 max-[662px]:relative max-[662px]:bottom-[-405px]">
        <img
          src="111.png"
          className="rounded-lg w-80 h-80 hover:w-96 hover:h-96 hover:bottom-8 relative duration-300"
          alt="first"
        />
        <img
          src="122.png"
          className="rounded-lg w-80 h-80 hover:w-96 hover:h-96 hover:bottom-8 duration-300 relative"
          id="onetwotwo"
          alt="first"
        />
        <img
          src="133.png"
          className="rounded-lg w-80 h-80 hover:w-96 hover:h-96 hover:bottom-8 duration-300 relative"
          id="onethreethree"
          alt="first"
        />
        <img
          src="144.png"
          className="rounded-lg w-80 h-80 hover:w-96 hover:h-96 hover:bottom-8 duration-300 relative"
          id="onefourfour"
          alt="first"
        />
        <img
          src="155.png"
          className="rounded-lg w-80 h-80 hover:w-96 hover:h-96 hover:bottom-8 duration-300 relative"
          id="onefivefive"
          alt="first"
        />
      </div>
    
      <br />
      <br />
      <br />
      <br />
      {/* View All Product */}
      <div
        className="md:flex md:flex-flow-col md:grid-cols-3 md:grid-rows-3 gap-6 px-6"
        id="viewallproductre"
      >
        <div>
          <div>
            <div className="mb-4">
              <button
                type="button"
                className="flex bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5"
                id="mainbutton"
              >
                <div className="col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="icoond"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>

                <Link
                  href="product"
                  className="col-span-2 pt-1.5"
                  id="viewallproduct"
                >
                  view all product
                </Link>
                <div></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="donthavemuchdddd">
        <h2
          className="text-4xl font-medium ml-16 text-gray-800 md:text-4xl hover:text-emerald-500 duration-300"
          id="buildyournewidea"
        >
          Don't have much{" "}
          <span className="text-indigo-600 hover:text-red-500 duration-300">
            time ?
          </span>
        </h2>

        <br />
        <p className="ml-16">
          Have a quick stroll around the M. K. Čiurlionis National Museum of Art
          in
          <br />
          Kaunas, Lithuania
        </p>
        <br />
        <br />
        <Link
          className="px-4 py-3 bg-gray-900 ml-16 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
          href="#"
          id="getstartedtgh"
        >
          step inside
        </Link>
        <img
          className="relative left-[213px]"
          id="g1"
          src="g1.png"
          alt="index"
        />
      </div>

      <div className="" id="watch"></div>

      {/* footer */}
      <hr className="my-6 border-gray-200  dark:border-gray-700 " />

      <footer className="bg-white dark:bg-gray-900 max-[662px]:relative max-[662px]:bottom-[-666px]">
        <div className="mx-auto w-full p-4 py-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src="imglogo.png"
                  className="h-16 mr-3 relative top-16 hover:h-20 duration-300"
                  alt=""
                />
              </Link>
            </div>
            <div className="grid grid-cols-3 ml-80 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white hover:text-gray-950 duration-300 hover:font-extrabold hover:text-lg">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://github.com/NewHorizonLatestTech"
                      className="hover:text-gray-950 duration-300 hover:font-extrabold hover:text-xl "
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/profile.php?id=100087931331816&sk=friends&_rdc=1&_rdr"
                      className="hover:text-gray-950 duration-300 hover:font-extrabold hover:text-xl "
                    >
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase hover:text-gray-950 duration-300 hover:font-extrabold hover:text-xl">
                  Product
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="acount"
                      className="hover:text-gray-950 duration-300 hover:font-extrabold hover:text-xl "
                    >
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="product"
                      className="hover:text-gray-950 duration-300 hover:font-extrabold hover:text-xl "
                    >
                      Product
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <span className="text-sm text-gray-500">
              © 2023{" "}
              <a href="https://www.panaverse.co/" className="hover:underline">
                Panaverse
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 ">
              <Link
                href="https://www.facebook.com/profile.php?id=100087931331816&sk=friends&_rdc=1&_rdr"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="https://www.instagram.com/adeemaamir240/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                href="https://twitter.com/amir_adeema"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                href="https://github.com/NewHorizonLatestTech"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
}

export default FullPage;
