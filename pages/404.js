import Link from "next/link";
import Navbar from "../components/Navbar";

const errorPage = () => {
    return (
      <>
      <Navbar/>
      <div className="mx-auto h-full text-purple-700 flex flex-col place-items-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-4xl">We are sorry, Page not found!</p>
        <p className="text-2xl">The Page you are looking for might have been remove or had its name change or is temporarily unavailable.</p>
        <Link href="/">
        <button className="text-4xl text-green-500 border-2 p-2 mt-5 rounded-md hover:shadow-xl">Back to homepage</button>
         </Link>
      </div>
      </>
    )
  }

  export default errorPage;