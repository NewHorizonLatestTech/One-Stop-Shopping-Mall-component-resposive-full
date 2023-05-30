import React from 'react'
import Link from 'next/link';


function acount() {
    return (
        <>
            {/* navbar */}
            <header className="header" id="heder2">
        <Link href="/">
          <img src="imglogo.png" id="logo" alt="" className="w-52  mt-2 ml-10 hover:w-60 duration-500" />
        </Link>
        <nav>
          <ul className="menu-items">
            <li><Link href="#" className="menu-item" id="home1">Home</Link></li>
            <li>
              <Link href="#" className="menu-item" id="index1">Index</Link>
            </li>
            <li className="dropdown" id="dropdown1">
              <Link href="product" className="menu-item">Product <pre> </pre> <b>{">"}</b></Link>
              <ul className="dropdown-menu">
                <li><Link href="productone" className="menu-item">Product 1</Link></li>
                <li><Link href="producttwo" className="menu-item">Product 2</Link></li>
                <li><Link href="productthree" className="menu-item">Product 3</Link></li>
              </ul>
            </li>
            <li><Link href="acount" className="menu-item" id="contact1">Contact</Link></li>
            <button id="logihj" className="ring-2 w-20 rounded-3xl hover:rounded-lg duration-300 h-9 ring-indigo-500 relative left-[179px]">Login</button>
            <button id="htihgk" className="ring-2 w-32 rounded-3xl hover:rounded-lg duration-300 h-10 bg-violet-600 text-white ml-4 relative left-[180px]">Get Started</button>

          </ul>
        </nav>
      </header>
        <div className="flex flex-wrap h-[87px]">
          <h1 className="text-3xl font-semibold m-5 mt-10 mb-10 hover:text-red-400 duration-300">OneStopShop</h1>
          <input
            className="border-2 border-gray-300 bg-white h-10 m-5 mt-10 mb-10 w-5/12 focus:ring-1 focus:ring-slate-500 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" id="search" />
          <img src="search.png" alt="search" className="h-10 w-12 rounded-xl relative right-4 mt-10 mb-10 " />
          <img src="del.png" alt="del" className="h-14 w-20 rounded-xl m-6 mt-8 mb-10 hover:h-16 duration-300" id="del" />
          <h1 className="text-sm mt-7 relative right-9" id="fast">Fast Dispatch</h1>
          <h1 className="text-sm mt-7 relative right-32 top-5 text-muted-foreground max-[1236px]:relative max-[1236px]:left-[1120px] max-[1236px]:top-[-127px]" id="get">Get your order in 2-3 days</h1>
          <img src="cart.png" id="cart" alt="c" className="w-40 rounded-xl relative bottom-48 left-[1120px] hover:w-44 duration-300 mt-8 mb-10 max-[1032px]:relative max-[1032px]:left[213px] max-[1032px]:top[-67px]" />
        </div>
  
        <div className="bg-slate-100 flex flex-wrap relative bottom-[4px]">
          <h6 className="m-5 relative left-[461px] hover:text-red-600 duration-300 hover:text-2xl" id="new">New summer sale - limited time only!</h6>
        </div>   
            <section className="h-screen">
                <div className="h-full">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full animate-pulse"
                                alt="Sample image" />
                        </div>

                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>
                                <div
                                    className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg">Sign in with</p>

                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                        Or
                                    </p>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address" />
                                    <label

                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput22"
                                        placeholder="Password" />
                                    <label
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Login
                                    </button>


                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Don't have an account?
                                        <Link
                                            href=""
                                            className="text-danger text-black transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        >Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
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
    )
}

export default acount