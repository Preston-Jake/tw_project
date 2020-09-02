import React from "react";
import { StyledTopNav } from "../styles/StyledTopNav";

export default function TopNav(props) {
  // console.log("TOPNAV RENDER")
  console.log(props)
  return (
    <StyledTopNav collapsed={props.menuCollapsed}>
      <div id="logo-container">
        <svg
          id="logo-svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m58.78 26.3c-3.3-3.4-21.4-22-24.7-24.7-1.2-.9-2.7-1.6-4.6-1.6s-3.4.7-4.6 1.6c-3.4 2.7-21.4 21.3-24.8 24.7-.2.3 0 .8.4.8h7.8c.8 0 1.1-.1 1.6-.7s3.1-3.3 3.1-3.3c3.3-3.5 11.2-11.3 14.1-13.7 1.1-.9 2.3-.9 2.3-.9s1.3 0 2.3.9c3 2.5 11 10.2 14.2 13.7 0 0 2.6 2.8 3.1 3.3.5.6.8.7 1.6.7h7.8c.4 0 .7-.5.4-.8m-58.7 4.5c3.3 3.4 21.4 22 24.7 24.7 1.2.9 2.7 1.6 4.6 1.6s3.4-.7 4.6-1.6c3.4-2.7 21.4-21.3 24.7-24.7.3-.3 0-.8-.4-.8h-7.8c-.8 0-1.1.1-1.6.7s-3.1 3.3-3.1 3.3c-3.3 3.5-11.2 11.3-14.1 13.7-1.1.9-2.3.9-2.3.9s-1.3 0-2.3-.9c-2.9-2.4-10.9-10.2-14.1-13.7 0 0-2.6-2.8-3.1-3.3-.5-.6-.8-.7-1.6-.7h-7.8c-.4-.1-.6.4-.4.8m27.2 3.9c-1.5-1.4-4.1-3.9-5.1-5-.4-.5-.4-1.1-.4-1.1s0-.6.4-1.1c1-1.1 3.6-3.7 5.1-5 .6-.6.8-.9.8-1.6v-7.7c0-.3-.4-.5-.6-.2-3.3 3.1-10.7 10.4-13.2 13.2-1.2 1.3-1.1 2.5-1.1 2.5s-.1 1.3 1.1 2.5c2.5 2.8 9.9 10.2 13.2 13.2.3.3.6.1.6-.3v-7.7c-.1-.8-.2-1.1-.8-1.7m4.3 0c1.5-1.4 4.1-3.9 5.1-5 .4-.5.4-1.1.4-1.1s0-.6-.4-1.1c-1-1.1-3.6-3.7-5.1-5-.6-.6-.8-.9-.8-1.6v-7.7c0-.4.3-.5.6-.3 3.3 3.1 10.7 10.4 13.2 13.2 1.2 1.3 1.1 2.5 1.1 2.5s.1 1.3-1.1 2.5c-2.5 2.8-9.9 10.2-13.2 13.2-.3.3-.6.1-.6-.3v-7.7c.1-.7.2-1 .8-1.6"
            fill="#ff8214"
          />
        </svg>
        <span id="logo-title">RIVIAN</span>
      </div>
      <div
        onClick={() => {
          props.menuClick()
        }}
        id="hambuger-container"
      >
        <button
          id="hamburger-button"
          className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
        >
          <svg
            id="hamburger-svg"
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div id="nav-container" >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
          >
            R1T
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
          >
            R1S
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
          >
            Technology
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
          >
            About
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0"
          >
            Pre-Order
          </a>
        </div>
      </div>
    </StyledTopNav>
  );
}
