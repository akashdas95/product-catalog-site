import Head from 'next/head';
import Link from "next/link";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <Head>
        <title>About Ponno bangladesh</title>
        <meta charset="UTF-8" />
        <meta name="description" content="A brief introduction of our site and vision" />
        <meta name="keyword" content="daily products, clothings, electronics, shoes, e-commerce" />
        <meta name="author" content="Akash das" />
      </Head>
      <Navbar />
      <div className="mx-auto relative h-full w-full bg-slate-300">
        <div className="grid place-items-center pt-16 backdrop-blur bg-black/70 rounded-lg border-4 border-indigo-600">
          <h1 className="text-white font-bold text-xl underline md:text-4xl lg:text-6xl">Our Story</h1>
          <p className="text-white text-sm md:text-xl lg:text-2xl px-2 pt-1 pb-4 md:px-12 ">we are a startup e-commerce company. we started at early 2020s to get our products to your doorstep.
            Its a huge vision to accomplish for that we need your support to grow and serve. It all started when local market
            get saturated and stocked were limited, people get famished and feel deserted but we believe no one deserved to
            feel like a cast away, so we bought our line of products at competitive price to fill the gap. </p>
          <Link href={`/products`}>
          <button className="border-2 bg-green-500 p-1 rounded-md text-white text-sm md:text-lg md:font-bold mb-5">explore products</button>  
          </Link>
        </div>
      </div>
    </>
  )
}

export default About;