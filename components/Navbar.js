import Link from "next/link";

const navbar = () => {
    return (
        <div className="mx-auto block md:flex justify-between bg-gradient-to-r from-cyan-400 to-purple-500 bg-opacity-50 sticky top-0 z-40">
            <div className="text-md md:text-xl text-white  ">
                <ul className="block p-2 m-0 md:flex gap-3 md:m-3 md:p-4 justify-between w-full bg-gray-800  rounded shadow-xl ">
                    <li className="hover: cursor-pointer hover:text-green-500">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="hover: cursor-pointer hover:text-green-500">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className="hover: cursor-pointer hover:text-green-500">
                        <Link href="/products">
                            Products
                        </Link>
                    </li>
                    <li className="hover: cursor-pointer hover:text-green-500">
                        <Link href="/addToCart">
                            Add to cart
                        </Link>
                    </li>
                    <li className="text-green-500 hover: cursor-pointer hover:text-green-600">
                        <Link href="/signIn">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href="/">
                <h1 className="p-2 m-2 text-2xl md:text-5xl text-white md:p-1 md:m-4 hover:text-black cursor-pointer hover:scale-95 transition-all">Ponno</h1>
            </Link>
        </div>
    )
}

export default navbar;