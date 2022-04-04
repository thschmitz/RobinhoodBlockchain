import React from 'react'
import Image from "next/image"
import Logo from "../assets/logo.png"
import {AiOutlineSearch} from "react-icons/ai"

const styles={
  container: "flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed",
  leftHeader: "flex flex-1",
  logo: "object-cover cursor-pointer",
  searchWrapper: "flex flex-1",
  searchInputContainer: "text-white items-center flex flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1e2123] duration-300 p-3 rounded-lg", 
  searchIcon: "text-gray-400 text-3xl mr-3",
  searchInputWrapper: "text-gray-400 text-lg w-full",
  searchInput: "bg-transparent outline-none w-full",
  rightHeader: "flex items-center justify-end text-white gap-8",
  menuItem: "cursor-pointer font-bold hover:text-green-500 duration-300",
}

// Make dynamic after

const isAuthenticated = false
const formattedAccount = "0x6be...38b"


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <Image src={Logo} height={100} width={100} className={styles.logo}/>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <AiOutlineSearch className={styles.searchIcon}/>
          <div className={styles.searchInputWrapper}>
            <input placeholder="Search..." className={styles.searchInput}/>
          </div>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.menuItem}>Rewards</div>
        <div className={styles.menuItem}>Portfolio</div>
        <div className={styles.menuItem}>Cash</div>
        <div className={styles.menuItem}>Messages</div>
        {isAuthenticated && (
          <>
            <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => signOut()}>Logout</div>
          </>
        )}

        {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connetWallet()}>Connect Wallet</div>
        )}

      </div>
    </div>
  )
}

export default Header