import Link from "next/link";
import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();


  const paths = data.map((curr) => {
    return {
      params: {
        pageNo: curr.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
};



const pageNo = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className='mx-auto block md:grid grid-cols-2 h-screen w-full justify-around bg-slate-200 rounded-lg p-9 ' >
        <div className="w-full h-fit p-5 border-4 border-gray-500 bg-white">
          <img src={data.image} alt="products" className="hover:scale-105 hover:cursor-pointer transition-all duration-300" />
       </div>
       <div className="h-auto w-auto text-black pt-5 md:pl-5 md:pt-0">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-4xl">{data.title}</h1>
        <h2 className="text-sm my-2 md:text-md lg:text-lg  xl:text-xl">{data.description}</h2>
        <ul className='font-bold text-sm md:text-lg lg:text-xl xl:text-2xl'>
          <li>
            <strong>price: </strong>
                {data.price}$
          </li>
          <li>
            <strong>rating: </strong> 
              {data.rating.rate}
          </li>
        </ul>
            
        <div className="py-8">
          <Link href={`../addToCart`}>
            <button className='bg-green-500 p-2 text-white text-xl rounded hover:bg-green-600'>Buy Now</button>
          </Link>
        </div>
            
        </div>
      </div>
    </>
  )
}

export default pageNo;