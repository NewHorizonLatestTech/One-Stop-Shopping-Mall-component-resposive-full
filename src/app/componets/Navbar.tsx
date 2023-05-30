import Link from "next/link"


function Navbar() {
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

      <div className="flex flex-wrap">
        <h1 id="onestopshophjj" className="text-3xl font-semibold m-5 mt-10 mb-10 hover:text-red-400 duration-300">OneStopShop</h1>
        <input
          className="border-2 border-gray-300 bg-white h-10 m-5 mt-10 mb-10 w-5/12 focus:ring-1 focus:ring-slate-500 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" id="search" />
        <img src="search.png" alt="search" className="h-10 w-12 rounded-xl relative right-4 mt-10 mb-10 " />
        <img src="del.png" alt="del" className="h-14 w-20 rounded-xl m-6 mt-8 mb-10 hover:h-16 duration-300" id="del" />
        <h1 className="text-sm mt-7 relative right-9" id="fast">Fast Dispatch</h1>
        <h1 className="text-sm mt-7 relative right-32 top-5 text-muted-foreground max-[1236px]:relative max-[1236px]:left-[1120px] max-[1236px]:top-[-127px]" id="get">Get your order in 2-3 days</h1>
        <img src="cart.png" id="cart" alt="c" className="w-40 rounded-xl relative bottom-48 left-[1120px] hover:w-44 duration-300 mt-8 mb-10 max-[1032px]:relative max-[1032px]:left[213px] max-[1032px]:top[-67px]" />
      </div>

      <div className="bg-slate-100 flex flex-wrap relative bottom-[268px]">
        <h6 className="m-5 relative left-[461px] hover:text-red-600 duration-300 hover:text-2xl" id="new">New summer sale - limited time only!</h6>
      </div>



    </>
  )
}

export default Navbar