import React from 'react'
import Link from 'next/link'

function productone() {
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
              <Link href="product" className="menu-item">product <pre> </pre> <b>{">"}</b></Link>
              <ul className="dropdown-menu">
                <li><Link href="productone" className="menu-item">product 1</Link></li>
                <li><Link href="producttwo" className="menu-item">product 2</Link></li>
                <li><Link href="productthree" className="menu-item">product 3</Link></li>
              </ul>
            </li>
            <li><Link href="acount" className="menu-item" id="contact1">Contact</Link></li>
            <button id="logihj" className="ring-2 w-20 rounded-3xl hover:rounded-lg duration-300 h-9 ring-indigo-500 relative left-[179px]">Login</button>
            <button id="htihgk" className="ring-2 w-32 rounded-3xl hover:rounded-lg duration-300 h-10 bg-violet-600 text-white ml-4 relative left-[180px]">Get Started</button>

          </ul>
        </nav>
      </header>
  
        <br /><br /><br /><br /><br /><br />
        <div className="flex flex-wrap h-[87px]"  id="onestopshoppingmallmaindivfghj">
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
  
      {/* side bar */}
      <div className="max-w-2xl mx-auto">

        <aside className="w-64" aria-label="Sidebar"  id="mianfdiv">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800" id='aside'>
            <ul className="space-y-2">
              <li>
                <Link href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                  <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                    <Link href="/"
                      className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Home</Link>
                  </li>
                  <li>
                    <Link href="product"
                      className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Products</Link>
                  </li>
                  <li>
                    <Link href="acount"
                      className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Acount</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* card */}
      <div className="" id="gridmainddivfott">
      <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id='footertop'>
        <div className="flex">
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton1">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$850</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://plus.unsplash.com/premium_photo-1682433350110-0b2816cd701a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hotel Photo" />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-slate-400">4.9</span>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700" id="hilton1">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$850</p>


                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://plus.unsplash.com/premium_photo-1682432838340-e1001c1d97c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$450</p>
                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>

        </div>
        <div className="flex">

          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$450</p>
                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$450</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">The Hilton Hotel</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$450</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
        <center>
          <div className="flex flex-wrap">
            <button
              type="button"
              className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              id="previous"
            >
              <Link href="product">Previous</Link>
            </button>
            <button
              type="button"
              className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              id="next"
            >
              <Link href="producttwo">Next</Link>
 
            </button>
          </div>
        </center>
      </div>
</div>
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
      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>

    </>
  )
}

export default productone
