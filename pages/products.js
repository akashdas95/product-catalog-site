import Head from 'next/head';
import Link from "next/link";
import Navbar from "../components/Navbar";


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      data
    }
  };
};



const productList = ({ data }) => {
  return (
    <>
      <Head>
        <title>Products of Ponno Bangladesh</title>
        <meta charset="UTF-8" />
        <meta name="description" content="A versatile product list" />
        <meta name="keyword" content="daily products, clothings, electronics, shoes, e-commerce" />
        <meta name="author" content="Akash das" />
      </Head>
      <Navbar />
      <div className="mx-auto py-6 w-full grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 xl:grid-cols-4 xl:gap-5 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-2"  >
        {data.map((curr) => {
          return (
            <div key = {curr.id} className="w-full rounded overflow-hidden border h-auto border-purple-200 transition ease-in-out duration-500 hover:shadow-xl hover:border-purple-300 cursor-pointer">
              <div className='flex justify-center h-40 my-2' >
                <img src={curr.image} alt="" className="w-fit overflow-hidden transition ease-in-out duration-500" />
              </div>
              <Link href={`/products/${curr.id}`}>
                <div className="px-5 py-1 bg-slate-200 h-full hover:bg-slate-300" >
                  <div className="font-bold text-black text-md mb-2">
                    {curr.title}
                    <ul className='text-sm'>
                      <li>
                        <strong>price: </strong>
                        {curr.price}$
                      </li>
                      <li>
                        <strong>rating: </strong>
                        {curr.rating.rate}
                      </li>
                    </ul>
                    <div className="py-1 flex justify-center">
                      <button className='bg-green-500 p-1 text-white text-lg rounded hover:bg-green-600'>Buy Now</button>
                    </div>
                  </div>
                </div>
                </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default productList;