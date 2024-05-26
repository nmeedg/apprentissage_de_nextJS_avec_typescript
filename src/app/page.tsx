import Link from "next/link";

export default function Home() {
  return (
    <div className="my-2 bg-gray-200 p-2 h-full rounded-lg mx-3">
      <nav className="mx-4">
        <ul className=" flex justify-between items-center">
          <li className=" text-green-500 text-lg font-medium duration-100 hover:border hover:border-indigo-500 px-2 py-1 hover:rounded-md hover:text-blue-700">
            <Link href="/blog">Blog</Link>
          </li>
          <li className=" text-green-500 text-lg font-medium duration-100 hover:border hover:border-indigo-500 px-2 py-1 hover:rounded-md hover:text-blue-700">
            <Link href="/about">About</Link>
          </li>
          <li className=" text-green-500 text-lg font-medium duration-100 hover:border hover:border-indigo-500 px-2 py-1 hover:rounded-md hover:text-blue-700">
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <h1 className=" font-bold text-center mt-4 text-2xl">Welcome To Home !</h1>
  <h4 className=" mt-28 font-medium opacity-50 text-center">Your dream is a reality</h4>
    </div>
  );
}
