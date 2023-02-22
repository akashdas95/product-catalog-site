import Head from 'next/head';
import Link from "next/link";
import Navbar from "../components/Navbar";


const home = () => {
  return (
    <>
      <Head>
        <title>Online shopping site in bangladesh</title>
        <meta charset="UTF-8" />
        <meta name="keyword" content="daily products, clothings, electronics, shoes, e-commerce" />
        <meta name="author" content="Akash das"/>
      </Head>
      <Navbar/>
      <div className=" bg-[url('/casual-sm.png')] xl:bg-[url('/pexels.png')] lg:bg-[url('/pexels-lg.png')] md:bg-[url('/pexels-md.png')] bg-slate-200 bg-cover mx-auto flex flex-col place-items-center w-auto h-screen pt-2 ">
        <div className="w-full h-full flex flex-col place-items-start md:place-items-end m-1 p-1 md:p-5 md:m-5 font-bold">
          <h1 className='text-indigo-600 md:text-white px-5 text-2xl md:text-3xl lg:text-5xl md:pt-24'>Get Your Daily products <span className='text-green-600 text-3xl md:text-4xl lg:text-6xl'>easily and conveniently</span></h1>
          <p className='text-indigo-500 md:text-white text-xl lg:text-2xl px-5'>you will get free shipping with every purchase </p>
          <p className='text-indigo-500 md:text-white text-xl lg:text-2xl px-5'>so get your products now</p>
          <Link href={`/products`}>
            <button className='text-lg md:text-xl lg:text-2xl text-white md:text-white mx-5 p-4 m-9 border-black shadow-lg rounded-lg bg-green-600 hover:scale-90 transition-all w-auto'>Go shopping</button>
          </Link>
        </div>
      </div>
    </>
  )
}



// researched app to whole content as react will react to the core of agility

// whole are as per requirement to core resilience 

// whole fault as per division of core Fragment

// data insecurity to vulnerability at default phase

// whole package can reprimand to higher order function 

export default home;