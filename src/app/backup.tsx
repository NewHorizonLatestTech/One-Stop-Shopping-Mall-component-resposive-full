// import Footer from "./Footer"

// function Navbar() {
//     return (
//         <>
//             {/* navbar */}
//             <div className="flex flex-col" x-cloak x-data="appData()" x-init="appInit()">
//                 <nav className="flex justify-between bg-black
//              backdrop-blur-md shadow-md w-full
//              fixed z-10">
//                     <a className="cursor-pointer" href='/'>
//                         <img className="h-28 w-40 hover:h-32 hover:w-44 duration-300"
//                             src="logo.png" alt="Store Logo" />
//                     </a>
//                     <div className="items-center space-x-60 max-desktop:space-x-16 relative top-7 lg:flex">
//                         <a className="text-white max-[320px]:hidden hover:text-red-600
//                      cursor-pointer transition-colors duration-300 mb-60" href="/">
//                             Home
//                         </a>
//                         <a className="text-white hover:text-red-600
//                      cursor-pointer transition-colors duration-300" href="product">
//                             Product
//                         </a>
//                         <a className=" text-white hover:text-blue-600
//                      cursor-pointer transition-colors duration-300" href="acount">
//                             <button className='bg-zinc-400 duration-300 hover:bg-red-300 w-48 rounded h-10 mr-10'>Create New Account</button>
//                         </a>
//                     </div>
//                 </nav>
//             </div>

//             <br /><br /><br /><br /><br /><br />
//             <div className="flex flex-wrap">
//                 <h1 className="text-3xl font-semibold m-5 mt-10 mb-10 hover:text-red-400 duration-300">OneStopShop</h1>
//                 <input
//                     className="border-2 border-gray-300 bg-white h-10 m-5 mt-10 mb-10 w-5/12 focus:ring-1 focus:ring-slate-500 rounded-lg text-sm focus:outline-none"
//                     type="search" name="search" placeholder="Search" id="search" />
//                 <img src="search.png" alt="search" className="h-10 w-12 rounded-xl relative right-4 mt-10 mb-10 " />
//                 <img src="del.png" alt="del" className="h-14 w-20 rounded-xl m-6 mt-8 mb-10 hover:h-16 duration-300" id="del" />
//                 <h1 className="text-sm mt-7 relative right-9" id="fast">Fast Dispatch</h1>
//                 <h1 className="text-sm mt-7 relative right-32 top-5 text-muted-foreground max-[1236px]:relative max-[1236px]:left-[1120px] max-[1236px]:top-[-127px]" id="get">Get your order in 2-3 days</h1>
//                 <img src="cart.png" id="cart" alt="c" className="w-40 rounded-xl relative bottom-48 left-[1120px] hover:w-44 duration-300 mt-8 mb-10 max-[1032px]:relative max-[1032px]:left[213px] max-[1032px]:top[-67px]" />
//             </div>

//             <div className="bg-slate-100 flex flex-wrap relative bottom-[268px]">
//                 <h6 className="m-5 relative left-[461px] hover:text-red-600 duration-300 hover:text-2xl" id="new">New summer sale - limited time only!</h6>
//             </div>

//             {/* Main Heading */}
//             <div className="flex bg-white h-[600px] relative bottom-60" id="inhg">
//                 <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2" id="inhgr">
//                     <div>
//                         <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl hover:text-4xl hover:text-emerald-500 duration-300" id="buildyournewidea">Build Your New <span className="text-indigo-600 hover:text-red-500 duration-300">Idea</span></h2>
//                         <p className="mt-2 text-sm text-gray-500 md:text-base hover:text-red-500 hover:text-lg duration-300" id="loremdolor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
//                         <div className="flex justify-center lg:justify-start mt-6">
//                             <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#" id="getstarted">Get Started</a>
//                             <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#" id="learn">Learn More</a>
//                         </div>
//                     </div>

//                     <img src="vi.jpg" className="w-8/12 h-[600px]" id="shoo" alt="shoes" />
//                 </div>
//             </div>
//             <Footer />
//             {/* Cards */}
//             <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 <div className="flex">
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article1"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
//                                     <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton1">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon1">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$850</p>

//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article2"
//                     >
//                         <a href="#">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
//                                     <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton2">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon2">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$850</p>


//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article3"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
//                                     <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton3">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon3">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>
//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article4"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
//                                     <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
//                                 </a>
//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton4">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon4">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>
//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                 </div>

//                 <div className="flex">

//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article5"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
//                                     <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton5">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon5">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>
//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article6"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80">
//                                     <img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton6">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon6">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>

//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article7"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80">
//                                     <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton7">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon7">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>

//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                     <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
//                         id="article8"
//                     >
//                         <a href="#" target="_blank">
//                             <div className="relative flex items-end overflow-hidden rounded-xl">
//                                 <a href="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80">
//                                     <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="Hotel Photo" />
//                                 </a>

//                             </div>

//                             <div className="mt-1 p-2">
//                                 <h2 className="text-slate-700" id="hilton8">The Hilton Hotel</h2>
//                                 <p className="mt-1 text-sm text-slate-400" id="lisbon8">Lisbon, Portugal</p>

//                                 <div className="mt-3 flex items-end justify-between">
//                                     <p className="text-lg font-bold text-blue-500">$450</p>

//                                     <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                                         </svg>

//                                         <button className="text-sm">Add to cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </article>
//                 </div>
//             </div>

//             {/* View All Product */}
//             <div className="md:flex md:flex-flow-col md:grid-cols-3 md:grid-rows-3 gap-6 px-6"
//                 id="viewallproductre"
//             >
//                 <div>
//                     <div>
//                         <div className="mb-4">
//                             <button type="button" className='flex bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5' id="mainbutton">
//                                 <div className="col-span-1">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="icoond">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
//                                     </svg>
//                                 </div>
//                                 <a href="product" className="col-span-2 pt-1.5" id="viewallproduct">view all product</a>
//                                 <div ></div>
//                             </button>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             {/* footer */}
//             <footer className="flex flex-wrap bg-gray-200" id="footer4">
//                 <div className="flex flex-wrap gap-x-20 self-center m-5">
//                     <span>Copy right © 2023 by Panaverse Dao</span>
//                     <a rel="noopener noreferrer" href="#">
//                         <span>Privacy policy</span>
//                     </a>
//                     <a rel="noopener noreferrer" href="#">
//                         <span>Terms of service</span>
//                     </a>
//                 </div>
//                 <div className="flex justify-center pt-4 space-x-4 relative left-96 lg:pt-0 lg:col-end-13">
//                     <a rel="noopener noreferrer" href="mailto:adeemaamir1722@gmail.com" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//                         </svg>
//                     </a>
//                     <a rel="noopener noreferrer" href="https://twitter.com/AmirAdeema" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
//                             <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
//                         </svg>
//                     </a>
//                     <a rel="noopener noreferrer" href="https://github.com/NewHorizonLatestTech?tab=repositories" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
//                             <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
//                         </svg>
//                     </a>
//                 </div>
//             </footer>

//             <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>

//             <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>

//         </>
//     )
// }

// export default Navbar
