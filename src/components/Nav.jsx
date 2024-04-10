import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";


const Navbar = async () => {
    const session = await getServerSession(options);
  return (
    <>
      <div className="w-full h-20 bg-gray-500 sticky top-0">
        <div className="container mx-auto px-4 h-full flex-row ">
            <Link href="/" className="text-white m-5">
                Home
            </Link>
            <Link href="/products" className="text-white m-5">
                Products
            </Link>
            <Link href="/services" className="text-white m-5">
                Services
            </Link>
            <Link href="/about" className="text-white m-5">
                About
            </Link>
            {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        
        </div>
      </div>
    </>
  );
};

export default Navbar;