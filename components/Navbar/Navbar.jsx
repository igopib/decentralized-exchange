import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import Style from "./Navbar.module.css"
import { Model, TokenList } from "../index"
import images from "../../assets"
import { connectWallet } from "../../utils/appFeatures"

const Navbar = () => {
  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)
  const [account, setAccount] = useState(false)

  return (
    <div className=" fixed w-full z-[100] bg-[#27262C]">
      <div className="flex justify-between items-center w-full p-2">
        <div className="md:flex flex-row">
          <div>
            <Image
              src={images.logo}
              alt="logo"
              width={50}
              height={50}
              className="mx-8 pb-1"
            />
          </div>
          <div className="flex jusify-between mx-5 items-center ">
            <Link href="/">
              <p className="px-4 mr-5 hover:bg-[#121626] py-2 rounded-lg transform duration-200">
                Swap
              </p>
            </Link>
            <Link href="/d">
              <p className="px-4 mr-5 hover:bg-[#121626] rounded-lg py-2 transform duration-200">
                Tokens
              </p>
            </Link>
            <Link href="/">
              <p className="px-4  hover:bg-[#121626] rounded-lg py-2 transform duration-200">
                Pools
              </p>
            </Link>
          </div>
        </div>
        <div className={Style.Search_Token}>
          <div className="hover:border-[#EDCBFE] border-white/50 bg-white/10  ease-in transform duration-200 hover:shadow-neon-main border-[1px] mr-20 rounded-xl">
            <input
              type="text"
              placeholder="Search Tokens"
              className=" px-20 py-2 focus:bg-black/50  placeholder:text-center rounded-xl transform duration-200"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center gap-8">
            <h2 className=" px-10 py-2 hover:bg-white/10 border-[1px] border-white/50  rounded-xl transform duration-200 cursor-pointer">
              Network
            </h2>
            {account ? (
              <button
                onClick={() => setOpenModel(true)}
                className="bg-[#121626]  py-2 px-10 border-2 border-white/50 rounded-xl cursor-pointer hover:bg-[#f2e6bc] transform duration-300"
              >
                Connect
              </button>
            ) : (
              <button
                onClick={() => setOpenTokenBox(true)}
                className="bg-[#EDCBFE] text-pink-600 hover:text-pink-600/70 py-2 px-10 border-2 border-white/50 rounded-xl  cursor-pointer transform duration-200"
              >
                Address
              </button>
            )}

            {openModel && (
              <Model setOpenModel={setOpenModel} connectWallet="Connect" />
            )}
          </div>
        </div>
      </div>

      {/* TOKEN LIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="Date" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  )
}

export default Navbar
