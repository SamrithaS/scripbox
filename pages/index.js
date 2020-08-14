import Nav from "../components/nav";
import React, { useState, Component } from "react";
export default function IndexPage() {
  
  return (
    <div>
      <Nav />
      <section class="bg-gray">
        <div className="max-w-6xl px-6 pt-20 pb-6 mx-auto lg:px-4">
          <div class="flex  items-center">
            <img src="./" />
            <span class="pl-3 pr-3">></span>
            <p class="bg-white text-xs text-font font-thin">Mutual Funds</p>
          </div>

          <div>
            <h2 class="font-bold text-4xl">Mutual Funds</h2>
            <p class="text-lg text-fontgrey font-thin max-w-lg">
              Invest in the best mutual funds recommended by Scripbox that are
              algorithmically selected that best suit your needs.
            </p>
          </div>
          <div class="flex space-x-8 pt-3 overflow-x-scroll pl-1 pb-5">
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="w-10 h-10 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 46"
                id="growth-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.207 1c-2.384 0-4.915.813-6.634 3.182-1.068 1.47-1.828 3.625-2.233 6.485-1.914.662-3.157 1.851-3.781 3.515-.613 1.633-.67 3.406-.143 5.32-.97 1.612-1.51 3.011-1.654 4.186-.23 1.86.106 4.235.575 5.823.767 2.598 2.085 4.961 3.826 6.622 1.641 1.565 3.654 2.515 5.944 2.515h7.828c3.162 0 5.878-2.705 7.558-4.692 1.86-2.2 2.9-4.783 2.9-9.777 0-2.633-.888-4.685-2.625-6.18.412-4.184-.173-7.085-1.562-8.79-1.075-1.32-2.22-2.202-3.414-2.677-.26-2.152-1.198-3.66-2.728-4.582C19.865 1.227 18.68 1 17.207 1z"
                  fill="#ACE0A2"
                  stroke="#54894A"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M16.986 44.91V20.53M1 45.084h31.982M20.935 22.277l-3.949 4.856M12.482 25.783l4.51 3.903v5.603l5.514-6.754"
                  stroke="#54894A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="text-green1 bg-bggreen1 text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                5+ years
              </span>
              <h4 class="font-semibold text-base pb-1">Long Term Funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Top equity mutual funds for long-term goals
              </p>
            </div>
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 43"
                id="coin-fund-filters"
              >
                <path
                  d="M18.876 41.694c9.872 0 17.876-8.004 17.876-17.876 0-9.873-8.004-17.876-17.876-17.876C9.003 5.942 1 13.945 1 23.818c0 9.872 8.003 17.876 17.876 17.876z"
                  fill="#FFE1A8"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M30.902 4.165h6.33M34.066 1v6.33M39.438 12.469H43M41.219 10.687v3.563"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M21.585 34.135l-7.97-9.389h1.68c3.473 0 6.29-1.83 6.29-4.647s-2.817-4.647-6.29-4.647h-1.68"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.607 20.107h10.788M13.61 15.443h10.787"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="bg-bgyellow1 text-xs absolute right-0 top-0 mt-4 px-2 py-1 text-mustard">
                1-5 years
              </span>
              <h4 class="font-semibold text-base pb-1 pt-1">
                Short Term Funds
              </h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 37 42"
                id="tax-saving-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.174 41.15c-.598 0-1.14-.246-1.535-.64A2.167 2.167 0 011 38.976V2.086l2.956 1.478L7.086 2l3.128 1.564L13.343 2l3.129 1.564L19.6 2l3.129 1.564L25.859 2l3.129 1.564 2.955-1.477-.079 37.16c-.108.132-.302.236-.587.352-.803.33-2.156.606-4.408.843-4.207.443-11.403.708-23.695.708z"
                  fill="#fff"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 33.324H5.373v5.078c0 1.572-.65 2.744-2.304 2.744h31.368a1.57 1.57 0 001.565-1.564v-6.258z"
                  fill="#8DBFFF"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M11.216 24.23L23.95 11.36"
                  stroke="#5890DA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.652 21.802a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM16.576 9.949a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span class="text-bleu bg-bgbleu text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                Lowest lock-in
              </span>
              <h4 class="font-semibold text-base pb-1 pt-1">
                Tax Saving Funds
              </h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>

            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 49 37"
                id="emergency-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.361 27.854a.33.33 0 00-.323.383l1.162 6.78a1.182 1.182 0 001.166.983h2.845a1.182 1.182 0 001.168-.998l1.066-6.769a.335.335 0 00-.093-.284.33.33 0 00-.234-.097l-6.757.002zM30.152 27.854a.329.329 0 00-.323.383l1.165 6.78a1.182 1.182 0 001.165.983h2.716a1.182 1.182 0 001.166-.981l1.17-6.781a.331.331 0 00-.324-.384h-6.735z"
                  fill="#FFBDBD"
                  stroke="#B26868"
                  stroke-width="1.5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.499 1.018l3.649.636a2.471 2.471 0 012.042 2.26l.062.878a25.992 25.992 0 019.874-1.786c10.375 0 18.79 5.069 18.79 14.467 0 9.399-8.413 14.454-18.79 14.454-9.085 0-16.665-3.76-18.41-11.102l-3.831-1.324A1.313 1.313 0 011 18.259v-2.713a1.314 1.314 0 01.893-1.246l4.182-1.414A12.354 12.354 0 019.169 8.05a2.455 2.455 0 01-1.101-1.512l-.98-4.008a1.236 1.236 0 011.41-1.512z"
                  fill="#FFBDBD"
                  stroke="#B26868"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M11.623 14.046a1.446 1.446 0 100-2.89 1.446 1.446 0 000 2.89z"
                  fill="#C56565"
                ></path>
                <path
                  d="M20.29 5.938a27.144 27.144 0 018.662.1M42.914 12.886c2.447-.608 4.04-.111 4.778 1.492"
                  stroke="#B26868"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="text-pink bg-bgpink text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                Under 1 year
              </span>
              <h4 class="font-semibold text-base pb-1">Emergency Funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>
            <div class=" w-48 px-3 py-3 mt-4 relative flex-shrink-0  bg-bggrey rounded-md">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                id="down-arrow-rounded"
              >
                <circle cx="24" cy="24" r="24" fill="#E6E6E6"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.708 24.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L23 28.586V17a1 1 0 112 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  fill="#737373"
                ></path>
              </svg>
              <h4 class="font-semibold text-base pb-1">See all equity funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Top Equity mutual funds for long-term growth
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-10 pl-6 lg:px-4">
          <div class="col-span-3 lg:hidden sticky">
            <div class="flex justify-between items-center text-fontgrey border-b border-bgdarkgrey pb-3">
              <p>Filters</p>
              <p class="text-fontclr bg-bggrey text-xs rounded-md px-3 py-2 ">
                Reset Filters{" "}
                <span class="bg-bgdarkgrey rounded-sm px-2">3</span>
              </p>
            </div>
            <div class="pt-4">
              <h3 class="font-semibold">Scripbox Verdict</h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-orange bg-bgorange ml-3 text-sm">
                      Recommended
                    </label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    24
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-green bg-bggreen ml-3 text-sm">
                      Top Ranked
                    </label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    24
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-red bg-bgred ml-3 text-sm">
                      Not Recommended
                    </label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    24
                  </span>
                </li>
              </ul>
              <h3 class="pt-2 font-semibold">Fund Category</h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Equity</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class="ml-3 text-sm">Debt</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Hybrid</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Others</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
              </ul>
              <div class="flex justify-between pt-4 border-b border-bgdarkgrey pb-4">
                <p class="font-semibold">Minimum Investment</p>
                <span class="text-bgblue text-sm">₹5000+</span>
              </div>
              <h3 class="pt-2 font-semibold">Fund Category</h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">
                      Aditya Birla Mutual Fund
                    </label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class="ml-3 text-sm">HDFC Mutual Fund</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Reliance Mutual Fund</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Tata Mutual Fund</label>
                  </div>
                  <span class="text-fontclr bg-bggrey px-2 rounded-sm text-xs ">
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <p class="ml-6 text-sm text-bgblue pt-1">
                    See 44 other fund houses
                  </p>
                </li>
              </ul>
              <p class="ml-6 text-sm text-bgblue pt-3 pb-4">
                Show advanced filters
              </p>
            </div>
          </div>
          <div class="col-span-7 pl-6 lg:pl-0 lg:col-span-10 mb-12 ">
            <div class="flex justify-between items-center text-fontgrey">
              <p>Showing 20 of 126 funds</p>{" "}
              <div class="flex items-center">
                <p class="text-fontgrey text-xs pr-4">Sort by </p>
                <span class="bg-white py-2 px-4 shadow-sm rounded-md">
                  Recommended
                </span>
              </div>
            </div>
            <div class="bg-white shadow-md rounded-md px-3 py-3 mt-4 mb-6">
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 37 18"
                    id="small-logo-mirae"
                  >
                    <path
                      d="M33.712 3.257c.706-.306 1.38-.646 2.052-.952-.875 3.706-3.903 6.426-7.168 8.126.875-.986 1.986-1.734 2.794-2.788 1.076-1.258 1.783-2.788 2.322-4.386z"
                      fill="#F68026"
                      stroke="#F68026"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M3.087 1.013h2.187c.168 1.292.337 2.55.538 3.808.539-1.258 1.077-2.55 1.65-3.808h2.254c-.168 2.21-.269 4.42-.303 6.664H7.731C7.865 6.181 8 4.719 8 3.223c-.774 1.428-1.279 2.992-1.918 4.454-.438 0-.875 0-1.313-.034-.134-1.496-.37-3.026-.538-4.556-.404 1.496-.64 3.06-1.01 4.556-.538.034-1.077.034-1.615.034.505-2.21 1.01-4.42 1.48-6.664zm8.01.034c.605-.034 1.21-.034 1.817-.034-.303 2.21-.64 4.42-.91 6.664h-1.816c.302-2.21.639-4.42.908-6.63zm2.893-.034c1.246.068 2.592-.204 3.803.306 1.38.918.808 3.468-.875 3.604.438.884.875 1.836 1.313 2.754h-1.75c-.438-1.054-.842-2.142-1.346-3.128-.202 1.02-.303 2.074-.438 3.094-.538.034-1.11.034-1.649.034.303-2.21.64-4.42.942-6.664zm7.303 0h2.188c.37 2.244.706 4.454 1.11 6.664h-1.716c-.034-.476-.101-.918-.135-1.394-.706 0-1.413.034-2.12.068l-.505 1.326h-1.75c1.01-2.21 1.952-4.454 2.928-6.664zm4.61 0c1.347.034 2.727.034 4.107 0-.034.476-.101.952-.135 1.428-.841 0-1.683-.034-2.524-.034-.067.408-.101.85-.135 1.258.74 0 1.481 0 2.221-.034-.033.476-.1.952-.134 1.394-.774 0-1.548-.034-2.322-.034-.068.442-.101.85-.169 1.258h2.524c-.033.476-.1.952-.168 1.394-1.413.034-2.827 0-4.24.034.336-2.21.64-4.454.976-6.664zM3.929 10.805c.74 0 1.447 0 2.187.034.135.85.27 1.7.404 2.584-.64-.17-1.279-.34-1.918-.476-.471.442-.942.884-1.413 1.36 3.062.272 6.158.476 9.22.238.27 1.394-.672 3.026-2.153 3.094-1.11.17-2.154-.374-2.995-1.088.269-.442.538-.918.807-1.36.673.714 2.322 1.53 2.625.034-1.312-.068-2.591-.068-3.87-.136.101.816.236 1.598.404 2.38H5.51c-.068-.578-.169-1.122-.27-1.7H3.457c-.236.578-.471 1.122-.707 1.7H1c.976-2.21 1.952-4.454 2.928-6.664z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M8.81 11.013c1.044-.884 2.626-.578 3.736.068-.202.408-.404.85-.572 1.258-.64-.238-1.75-1.02-2.02.068.203.68 1.044.884 1.549 1.258-1.11-.034-2.255-.102-3.365-.136-.169-.884-.068-1.904.673-2.516zm5.375-.222c1.077-.612 2.356-.272 3.366.272-.169.442-.37.918-.572 1.36-.606-.238-1.212-.918-1.851-.374-.404.816.572 1.088 1.043 1.462-.942.068-1.918.102-2.86.17-.438-.986-.135-2.346.874-2.89zm4.652.014h4.173l-.202 1.428H20.25c0 .238-.067.646-.067.884-.572.102-1.145.204-1.683.306.135-.884.236-1.734.337-2.618z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M23.447 10.805c1.279.034 2.591-.068 3.87.102-1.346.578-2.726 1.054-4.106 1.496.068-.544.169-1.054.236-1.598z"
                      fill="#004079"
                      stroke="#004079"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15 14.307c4.51-.51 9.087-1.462 13.192-3.502-.1.51-.201 1.02-.302 1.564h-1.313c-.236 1.666-.438 3.332-.707 4.998h-1.817c.27-1.564.438-3.128.673-4.692-.74.272-1.48.544-2.255.782-.067.408-.168.85-.269 1.258a17.646 17.646 0 00-2.322.034l-.101 1.224c.841-.034 1.683-.034 2.524-.034-.034.34-.135 1.054-.168 1.428a86.756 86.756 0 00-4.207 0c.1-.986.27-1.972.404-2.958-.169 0-.572.034-.74.068-.068.816 0 1.836-.741 2.414-1.279 1.156-3.264.646-4.409-.442.27-.442.572-.884.842-1.326.572.408 1.178.986 1.952.85.572-.068.706-1.02.1-1.156-.706-.034-1.447.068-2.187.136.067-.17.135-.51.202-.68a5.345 5.345 0 001.65.034z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15.168 4.073a34.43 34.43 0 00.27-1.836c.47.102 1.38-.034 1.346.714.168.952-.943 1.122-1.616 1.122zm5.99.918c.337-.85.674-1.7 1.044-2.516.134.85.235 1.666.336 2.482-.47.034-.908.034-1.38.034z"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width=".5"
                    ></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2">Mirae Asset Large Cap Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>

              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 26"
                    id="small-logo-axis"
                  >
                    <path
                      d="M4.255 19.334C7.825 13.246 11.43 7.124 15 1l.315.07c1.295 2.077 2.485 4.223 3.745 6.3.28.422.665.985.315 1.478-1.225 2.216-2.555 4.433-3.78 6.686 2.8 0 5.6-.036 8.4 0 1.645 3.061 3.29 6.123 5.005 9.15v.28c-2.835 0-5.67 0-8.505.036-1.82-2.991-3.36-6.158-5.18-9.15-1.96 2.956-3.5 6.159-5.425 9.15-2.94-.035-5.915.035-8.89-.211v-.07c1.19-1.725 2.135-3.59 3.255-5.385z"
                      fill="#AC265B"
                      stroke="#AC265B"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2 pl-3">Axis Bluechip Fund Growth Growth</p>
                    <div class="flex space-x-4 pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    id="small-logo-kotak"
                  >
                    <path d="M0 0h28v28H0V0z" fill="#ED232A"></path>
                    <path d="M5 5h18v18H5V5z" fill="#fff"></path>
                    <path d="M13 0h2v28h-2V0z" fill="#fff"></path>
                    <path d="M0 13h28v2H0v-2z" fill="#fff"></path>
                    <path d="M10 10h8v8h-8v-8z" fill="#004C8F"></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2  pl-3">Kotak Standard Multicap Growth</p>
                    <div class="flex space-x-4  pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 34 22"
                    id="small-logo-invesco"
                  >
                    <path
                      d="M14.61 1.843c1.09-.602 2.48-.542 3.69-.843.666 1.386 1.755 2.53 2.783 3.554v2.41c2.601 2.53 5.384 5 8.832 6.385.605 1.386 1.815 2.29 3.085 2.952-.544.362-1.089.723-1.694 1.145-2.42-2.47-5.323-4.398-8.045-6.506-1.27-1.807-3.63-3.434-2.904-5.964-.484-.542-1.028-1.084-1.512-1.566-.302.24-.907.723-1.21 1.024-.06 1.325-.12 2.71-1.028 3.795a76.915 76.915 0 002.238 2.169c-.302.3-.907.903-1.21 1.144a34.856 34.856 0 002.117 2.109c.424 1.325.847 2.65 1.452 3.915a94.537 94.537 0 012.42-1.084c-.545-.964-.968-1.928-1.391-2.952 1.875.542 2.54 2.41 3.508 3.916-1.754.542-3.448 1.144-4.96 2.289-.424-1.024-.968-1.928-1.513-2.892-.423-.18-.846-.361-1.33-.542-.242-.482-.726-1.325-.968-1.807-.968 1.627-1.09 3.554-.666 5.361-.786.362-1.633.723-2.42 1.145-.18-.241-.665-.723-.846-.964.181-.904.363-1.747.544-2.65h-1.815a89.892 89.892 0 01-2.359 2.41c-.423-.121-1.33-.422-1.754-.543v-2.53c-1.815-.241-3.63-.362-5.263.663-.363-.06-1.028-.241-1.33-.302 0-.843-.061-1.686-.061-2.59 2.36-1.024 4.476-2.771 7.138-2.65.605-.904 1.089-1.808 1.573-2.711 2.238-2.049 3.145-4.94 4.9-7.29z"
                      fill="#0D388E"
                      stroke="#0D388E"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2">Invesco India Oppurtunities Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 37 18"
                    id="small-logo-mirae"
                  >
                    <path
                      d="M33.712 3.257c.706-.306 1.38-.646 2.052-.952-.875 3.706-3.903 6.426-7.168 8.126.875-.986 1.986-1.734 2.794-2.788 1.076-1.258 1.783-2.788 2.322-4.386z"
                      fill="#F68026"
                      stroke="#F68026"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M3.087 1.013h2.187c.168 1.292.337 2.55.538 3.808.539-1.258 1.077-2.55 1.65-3.808h2.254c-.168 2.21-.269 4.42-.303 6.664H7.731C7.865 6.181 8 4.719 8 3.223c-.774 1.428-1.279 2.992-1.918 4.454-.438 0-.875 0-1.313-.034-.134-1.496-.37-3.026-.538-4.556-.404 1.496-.64 3.06-1.01 4.556-.538.034-1.077.034-1.615.034.505-2.21 1.01-4.42 1.48-6.664zm8.01.034c.605-.034 1.21-.034 1.817-.034-.303 2.21-.64 4.42-.91 6.664h-1.816c.302-2.21.639-4.42.908-6.63zm2.893-.034c1.246.068 2.592-.204 3.803.306 1.38.918.808 3.468-.875 3.604.438.884.875 1.836 1.313 2.754h-1.75c-.438-1.054-.842-2.142-1.346-3.128-.202 1.02-.303 2.074-.438 3.094-.538.034-1.11.034-1.649.034.303-2.21.64-4.42.942-6.664zm7.303 0h2.188c.37 2.244.706 4.454 1.11 6.664h-1.716c-.034-.476-.101-.918-.135-1.394-.706 0-1.413.034-2.12.068l-.505 1.326h-1.75c1.01-2.21 1.952-4.454 2.928-6.664zm4.61 0c1.347.034 2.727.034 4.107 0-.034.476-.101.952-.135 1.428-.841 0-1.683-.034-2.524-.034-.067.408-.101.85-.135 1.258.74 0 1.481 0 2.221-.034-.033.476-.1.952-.134 1.394-.774 0-1.548-.034-2.322-.034-.068.442-.101.85-.169 1.258h2.524c-.033.476-.1.952-.168 1.394-1.413.034-2.827 0-4.24.034.336-2.21.64-4.454.976-6.664zM3.929 10.805c.74 0 1.447 0 2.187.034.135.85.27 1.7.404 2.584-.64-.17-1.279-.34-1.918-.476-.471.442-.942.884-1.413 1.36 3.062.272 6.158.476 9.22.238.27 1.394-.672 3.026-2.153 3.094-1.11.17-2.154-.374-2.995-1.088.269-.442.538-.918.807-1.36.673.714 2.322 1.53 2.625.034-1.312-.068-2.591-.068-3.87-.136.101.816.236 1.598.404 2.38H5.51c-.068-.578-.169-1.122-.27-1.7H3.457c-.236.578-.471 1.122-.707 1.7H1c.976-2.21 1.952-4.454 2.928-6.664z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M8.81 11.013c1.044-.884 2.626-.578 3.736.068-.202.408-.404.85-.572 1.258-.64-.238-1.75-1.02-2.02.068.203.68 1.044.884 1.549 1.258-1.11-.034-2.255-.102-3.365-.136-.169-.884-.068-1.904.673-2.516zm5.375-.222c1.077-.612 2.356-.272 3.366.272-.169.442-.37.918-.572 1.36-.606-.238-1.212-.918-1.851-.374-.404.816.572 1.088 1.043 1.462-.942.068-1.918.102-2.86.17-.438-.986-.135-2.346.874-2.89zm4.652.014h4.173l-.202 1.428H20.25c0 .238-.067.646-.067.884-.572.102-1.145.204-1.683.306.135-.884.236-1.734.337-2.618z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M23.447 10.805c1.279.034 2.591-.068 3.87.102-1.346.578-2.726 1.054-4.106 1.496.068-.544.169-1.054.236-1.598z"
                      fill="#004079"
                      stroke="#004079"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15 14.307c4.51-.51 9.087-1.462 13.192-3.502-.1.51-.201 1.02-.302 1.564h-1.313c-.236 1.666-.438 3.332-.707 4.998h-1.817c.27-1.564.438-3.128.673-4.692-.74.272-1.48.544-2.255.782-.067.408-.168.85-.269 1.258a17.646 17.646 0 00-2.322.034l-.101 1.224c.841-.034 1.683-.034 2.524-.034-.034.34-.135 1.054-.168 1.428a86.756 86.756 0 00-4.207 0c.1-.986.27-1.972.404-2.958-.169 0-.572.034-.74.068-.068.816 0 1.836-.741 2.414-1.279 1.156-3.264.646-4.409-.442.27-.442.572-.884.842-1.326.572.408 1.178.986 1.952.85.572-.068.706-1.02.1-1.156-.706-.034-1.447.068-2.187.136.067-.17.135-.51.202-.68a5.345 5.345 0 001.65.034z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15.168 4.073a34.43 34.43 0 00.27-1.836c.47.102 1.38-.034 1.346.714.168.952-.943 1.122-1.616 1.122zm5.99.918c.337-.85.674-1.7 1.044-2.516.134.85.235 1.666.336 2.482-.47.034-.908.034-1.38.034z"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width=".5"
                    ></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2">Mirae Asset Large Cap Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 26"
                    id="small-logo-axis"
                  >
                    <path
                      d="M4.255 19.334C7.825 13.246 11.43 7.124 15 1l.315.07c1.295 2.077 2.485 4.223 3.745 6.3.28.422.665.985.315 1.478-1.225 2.216-2.555 4.433-3.78 6.686 2.8 0 5.6-.036 8.4 0 1.645 3.061 3.29 6.123 5.005 9.15v.28c-2.835 0-5.67 0-8.505.036-1.82-2.991-3.36-6.158-5.18-9.15-1.96 2.956-3.5 6.159-5.425 9.15-2.94-.035-5.915.035-8.89-.211v-.07c1.19-1.725 2.135-3.59 3.255-5.385z"
                      fill="#AC265B"
                      stroke="#AC265B"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2 pl-3">Axis Bluechip Fund Growth Growth</p>
                    <div class="flex space-x-4 pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    id="small-logo-kotak"
                  >
                    <path d="M0 0h28v28H0V0z" fill="#ED232A"></path>
                    <path d="M5 5h18v18H5V5z" fill="#fff"></path>
                    <path d="M13 0h2v28h-2V0z" fill="#fff"></path>
                    <path d="M0 13h28v2H0v-2z" fill="#fff"></path>
                    <path d="M10 10h8v8h-8v-8z" fill="#004C8F"></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2  pl-3">Kotak Standard Multicap Growth</p>
                    <div class="flex space-x-4  pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 34 22"
                    id="small-logo-invesco"
                  >
                    <path
                      d="M14.61 1.843c1.09-.602 2.48-.542 3.69-.843.666 1.386 1.755 2.53 2.783 3.554v2.41c2.601 2.53 5.384 5 8.832 6.385.605 1.386 1.815 2.29 3.085 2.952-.544.362-1.089.723-1.694 1.145-2.42-2.47-5.323-4.398-8.045-6.506-1.27-1.807-3.63-3.434-2.904-5.964-.484-.542-1.028-1.084-1.512-1.566-.302.24-.907.723-1.21 1.024-.06 1.325-.12 2.71-1.028 3.795a76.915 76.915 0 002.238 2.169c-.302.3-.907.903-1.21 1.144a34.856 34.856 0 002.117 2.109c.424 1.325.847 2.65 1.452 3.915a94.537 94.537 0 012.42-1.084c-.545-.964-.968-1.928-1.391-2.952 1.875.542 2.54 2.41 3.508 3.916-1.754.542-3.448 1.144-4.96 2.289-.424-1.024-.968-1.928-1.513-2.892-.423-.18-.846-.361-1.33-.542-.242-.482-.726-1.325-.968-1.807-.968 1.627-1.09 3.554-.666 5.361-.786.362-1.633.723-2.42 1.145-.18-.241-.665-.723-.846-.964.181-.904.363-1.747.544-2.65h-1.815a89.892 89.892 0 01-2.359 2.41c-.423-.121-1.33-.422-1.754-.543v-2.53c-1.815-.241-3.63-.362-5.263.663-.363-.06-1.028-.241-1.33-.302 0-.843-.061-1.686-.061-2.59 2.36-1.024 4.476-2.771 7.138-2.65.605-.904 1.089-1.808 1.573-2.711 2.238-2.049 3.145-4.94 4.9-7.29z"
                      fill="#0D388E"
                      stroke="#0D388E"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2">Invesco India Oppurtunities Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>

              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 37 18"
                    id="small-logo-mirae"
                  >
                    <path
                      d="M33.712 3.257c.706-.306 1.38-.646 2.052-.952-.875 3.706-3.903 6.426-7.168 8.126.875-.986 1.986-1.734 2.794-2.788 1.076-1.258 1.783-2.788 2.322-4.386z"
                      fill="#F68026"
                      stroke="#F68026"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M3.087 1.013h2.187c.168 1.292.337 2.55.538 3.808.539-1.258 1.077-2.55 1.65-3.808h2.254c-.168 2.21-.269 4.42-.303 6.664H7.731C7.865 6.181 8 4.719 8 3.223c-.774 1.428-1.279 2.992-1.918 4.454-.438 0-.875 0-1.313-.034-.134-1.496-.37-3.026-.538-4.556-.404 1.496-.64 3.06-1.01 4.556-.538.034-1.077.034-1.615.034.505-2.21 1.01-4.42 1.48-6.664zm8.01.034c.605-.034 1.21-.034 1.817-.034-.303 2.21-.64 4.42-.91 6.664h-1.816c.302-2.21.639-4.42.908-6.63zm2.893-.034c1.246.068 2.592-.204 3.803.306 1.38.918.808 3.468-.875 3.604.438.884.875 1.836 1.313 2.754h-1.75c-.438-1.054-.842-2.142-1.346-3.128-.202 1.02-.303 2.074-.438 3.094-.538.034-1.11.034-1.649.034.303-2.21.64-4.42.942-6.664zm7.303 0h2.188c.37 2.244.706 4.454 1.11 6.664h-1.716c-.034-.476-.101-.918-.135-1.394-.706 0-1.413.034-2.12.068l-.505 1.326h-1.75c1.01-2.21 1.952-4.454 2.928-6.664zm4.61 0c1.347.034 2.727.034 4.107 0-.034.476-.101.952-.135 1.428-.841 0-1.683-.034-2.524-.034-.067.408-.101.85-.135 1.258.74 0 1.481 0 2.221-.034-.033.476-.1.952-.134 1.394-.774 0-1.548-.034-2.322-.034-.068.442-.101.85-.169 1.258h2.524c-.033.476-.1.952-.168 1.394-1.413.034-2.827 0-4.24.034.336-2.21.64-4.454.976-6.664zM3.929 10.805c.74 0 1.447 0 2.187.034.135.85.27 1.7.404 2.584-.64-.17-1.279-.34-1.918-.476-.471.442-.942.884-1.413 1.36 3.062.272 6.158.476 9.22.238.27 1.394-.672 3.026-2.153 3.094-1.11.17-2.154-.374-2.995-1.088.269-.442.538-.918.807-1.36.673.714 2.322 1.53 2.625.034-1.312-.068-2.591-.068-3.87-.136.101.816.236 1.598.404 2.38H5.51c-.068-.578-.169-1.122-.27-1.7H3.457c-.236.578-.471 1.122-.707 1.7H1c.976-2.21 1.952-4.454 2.928-6.664z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M8.81 11.013c1.044-.884 2.626-.578 3.736.068-.202.408-.404.85-.572 1.258-.64-.238-1.75-1.02-2.02.068.203.68 1.044.884 1.549 1.258-1.11-.034-2.255-.102-3.365-.136-.169-.884-.068-1.904.673-2.516zm5.375-.222c1.077-.612 2.356-.272 3.366.272-.169.442-.37.918-.572 1.36-.606-.238-1.212-.918-1.851-.374-.404.816.572 1.088 1.043 1.462-.942.068-1.918.102-2.86.17-.438-.986-.135-2.346.874-2.89zm4.652.014h4.173l-.202 1.428H20.25c0 .238-.067.646-.067.884-.572.102-1.145.204-1.683.306.135-.884.236-1.734.337-2.618z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M23.447 10.805c1.279.034 2.591-.068 3.87.102-1.346.578-2.726 1.054-4.106 1.496.068-.544.169-1.054.236-1.598z"
                      fill="#004079"
                      stroke="#004079"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15 14.307c4.51-.51 9.087-1.462 13.192-3.502-.1.51-.201 1.02-.302 1.564h-1.313c-.236 1.666-.438 3.332-.707 4.998h-1.817c.27-1.564.438-3.128.673-4.692-.74.272-1.48.544-2.255.782-.067.408-.168.85-.269 1.258a17.646 17.646 0 00-2.322.034l-.101 1.224c.841-.034 1.683-.034 2.524-.034-.034.34-.135 1.054-.168 1.428a86.756 86.756 0 00-4.207 0c.1-.986.27-1.972.404-2.958-.169 0-.572.034-.74.068-.068.816 0 1.836-.741 2.414-1.279 1.156-3.264.646-4.409-.442.27-.442.572-.884.842-1.326.572.408 1.178.986 1.952.85.572-.068.706-1.02.1-1.156-.706-.034-1.447.068-2.187.136.067-.17.135-.51.202-.68a5.345 5.345 0 001.65.034z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15.168 4.073a34.43 34.43 0 00.27-1.836c.47.102 1.38-.034 1.346.714.168.952-.943 1.122-1.616 1.122zm5.99.918c.337-.85.674-1.7 1.044-2.516.134.85.235 1.666.336 2.482-.47.034-.908.034-1.38.034z"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width=".5"
                    ></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2">Mirae Asset Large Cap Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 37 18"
                    id="small-logo-mirae"
                  >
                    <path
                      d="M33.712 3.257c.706-.306 1.38-.646 2.052-.952-.875 3.706-3.903 6.426-7.168 8.126.875-.986 1.986-1.734 2.794-2.788 1.076-1.258 1.783-2.788 2.322-4.386z"
                      fill="#F68026"
                      stroke="#F68026"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M3.087 1.013h2.187c.168 1.292.337 2.55.538 3.808.539-1.258 1.077-2.55 1.65-3.808h2.254c-.168 2.21-.269 4.42-.303 6.664H7.731C7.865 6.181 8 4.719 8 3.223c-.774 1.428-1.279 2.992-1.918 4.454-.438 0-.875 0-1.313-.034-.134-1.496-.37-3.026-.538-4.556-.404 1.496-.64 3.06-1.01 4.556-.538.034-1.077.034-1.615.034.505-2.21 1.01-4.42 1.48-6.664zm8.01.034c.605-.034 1.21-.034 1.817-.034-.303 2.21-.64 4.42-.91 6.664h-1.816c.302-2.21.639-4.42.908-6.63zm2.893-.034c1.246.068 2.592-.204 3.803.306 1.38.918.808 3.468-.875 3.604.438.884.875 1.836 1.313 2.754h-1.75c-.438-1.054-.842-2.142-1.346-3.128-.202 1.02-.303 2.074-.438 3.094-.538.034-1.11.034-1.649.034.303-2.21.64-4.42.942-6.664zm7.303 0h2.188c.37 2.244.706 4.454 1.11 6.664h-1.716c-.034-.476-.101-.918-.135-1.394-.706 0-1.413.034-2.12.068l-.505 1.326h-1.75c1.01-2.21 1.952-4.454 2.928-6.664zm4.61 0c1.347.034 2.727.034 4.107 0-.034.476-.101.952-.135 1.428-.841 0-1.683-.034-2.524-.034-.067.408-.101.85-.135 1.258.74 0 1.481 0 2.221-.034-.033.476-.1.952-.134 1.394-.774 0-1.548-.034-2.322-.034-.068.442-.101.85-.169 1.258h2.524c-.033.476-.1.952-.168 1.394-1.413.034-2.827 0-4.24.034.336-2.21.64-4.454.976-6.664zM3.929 10.805c.74 0 1.447 0 2.187.034.135.85.27 1.7.404 2.584-.64-.17-1.279-.34-1.918-.476-.471.442-.942.884-1.413 1.36 3.062.272 6.158.476 9.22.238.27 1.394-.672 3.026-2.153 3.094-1.11.17-2.154-.374-2.995-1.088.269-.442.538-.918.807-1.36.673.714 2.322 1.53 2.625.034-1.312-.068-2.591-.068-3.87-.136.101.816.236 1.598.404 2.38H5.51c-.068-.578-.169-1.122-.27-1.7H3.457c-.236.578-.471 1.122-.707 1.7H1c.976-2.21 1.952-4.454 2.928-6.664z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M8.81 11.013c1.044-.884 2.626-.578 3.736.068-.202.408-.404.85-.572 1.258-.64-.238-1.75-1.02-2.02.068.203.68 1.044.884 1.549 1.258-1.11-.034-2.255-.102-3.365-.136-.169-.884-.068-1.904.673-2.516zm5.375-.222c1.077-.612 2.356-.272 3.366.272-.169.442-.37.918-.572 1.36-.606-.238-1.212-.918-1.851-.374-.404.816.572 1.088 1.043 1.462-.942.068-1.918.102-2.86.17-.438-.986-.135-2.346.874-2.89zm4.652.014h4.173l-.202 1.428H20.25c0 .238-.067.646-.067.884-.572.102-1.145.204-1.683.306.135-.884.236-1.734.337-2.618z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M23.447 10.805c1.279.034 2.591-.068 3.87.102-1.346.578-2.726 1.054-4.106 1.496.068-.544.169-1.054.236-1.598z"
                      fill="#004079"
                      stroke="#004079"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15 14.307c4.51-.51 9.087-1.462 13.192-3.502-.1.51-.201 1.02-.302 1.564h-1.313c-.236 1.666-.438 3.332-.707 4.998h-1.817c.27-1.564.438-3.128.673-4.692-.74.272-1.48.544-2.255.782-.067.408-.168.85-.269 1.258a17.646 17.646 0 00-2.322.034l-.101 1.224c.841-.034 1.683-.034 2.524-.034-.034.34-.135 1.054-.168 1.428a86.756 86.756 0 00-4.207 0c.1-.986.27-1.972.404-2.958-.169 0-.572.034-.74.068-.068.816 0 1.836-.741 2.414-1.279 1.156-3.264.646-4.409-.442.27-.442.572-.884.842-1.326.572.408 1.178.986 1.952.85.572-.068.706-1.02.1-1.156-.706-.034-1.447.068-2.187.136.067-.17.135-.51.202-.68a5.345 5.345 0 001.65.034z"
                      fill="#00447B"
                      stroke="#00447B"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M15.168 4.073a34.43 34.43 0 00.27-1.836c.47.102 1.38-.034 1.346.714.168.952-.943 1.122-1.616 1.122zm5.99.918c.337-.85.674-1.7 1.044-2.516.134.85.235 1.666.336 2.482-.47.034-.908.034-1.38.034z"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width=".5"
                    ></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2">Mirae Asset Large Cap Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="bg-gray px-4 py-3 mt-1">
                <h2 class="text-base font-semibold pb-1">Achieve Life Goals</h2>
                <p class="text-sm font-thin text-textgrey">
                  Find funds that suit your investment objective
                </p>
                <div class="flex mt-3 justify-between">
                  <div class="flex bg-white shadow-sm rounded-md px-3 py-2 hover:bg-hoverbg cursor-pointer">
                    <svg
                      class="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      id="chair"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.5 14.3c-.027-.003-.054-.002-.082-.005-.22-6.598-5.652-11.898-12.302-11.898h-3.001c-6.65 0-12.083 5.3-12.303 11.898-.027.003-.054.002-.081.005-1.234.146-.54 6.767 2.08 19.865h23.61C34.04 21.067 34.732 14.446 33.5 14.3z"
                        fill="#E9A97A"
                      ></path>
                      <path
                        d="M9.023 23.603c11.232-2.78 19.97-.377 21.179-.013"
                        stroke="#B66428"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M37.17 17.43c.246 1.515-.458 2.962-1.794 3.686a.463.463 0 00-.243.408v14.962a.724.724 0 01-.723.723h-3.5a.724.724 0 01-.723-.723V18.024a3.52 3.52 0 013.51-3.516 3.5 3.5 0 013.472 2.922zM2.049 17.43c-.246 1.515.458 2.962 1.794 3.686.15.081.242.238.242.408v14.962c0 .399.325.723.723.723h3.5a.724.724 0 00.723-.723V18.024a3.52 3.52 0 00-3.944-3.49 3.5 3.5 0 00-3.038 2.896z"
                        fill="#E6965B"
                        stroke="#B66428"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M5.998 13.612C6.228 7.17 11.536 2 18.032 2h3.162c6.497 0 11.805 5.17 12.034 11.612"
                        stroke="#B66428"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        clip-rule="evenodd"
                        d="M8.773 34.269h21.179H8.773z"
                        stroke="#B66428"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                    <p class="w-24 pl-2">Retire Confidently</p>
                  </div>

                  <div class="flex bg-white shadow-sm rounded-md px-3 py-2 hover:bg-hoverbg cursor-pointer">
                    <svg
                      class="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      id="paper-diploma"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.778 27.998c0 2.61-2.114 4.746-4.698 4.746H12.11c-2.584 0-4.698-2.135-4.698-4.746V16.851h25.366v11.147z"
                        fill="#93B4FF"
                        stroke="#5A82DF"
                        stroke-width="1.5"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.1 22.445L1.286 15.44a.44.44 0 01.008-.828L20.15 8l18.66 6.562a.44.44 0 01.008.827L20.1 22.445z"
                        fill="#BDD1FF"
                        stroke="#5A82DF"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M37.834 15.848v12.07"
                        stroke="#5A82DF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <p class="w-24 pl-2">Child Education</p>
                  </div>
                  <div class="flex bg-white shadow-sm rounded-md px-3 py-2 hover:bg-hoverbg cursor-pointer">
                    <svg
                      class="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      id="cloud"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.44 23.637c-.224.135.991-.15 3.094-.15 3.489 0 6.352 2.771 6.352 6.126 0 3.398-2.863 6.172-6.352 6.172H7.351C3.863 35.785 1 33.013 1 29.659c0-3.233 2.592-5.862 5.849-6.108.165-.011.629-1.09.495-1.078 1.162-3.846 4.919-6.575 9.436-6.575 4.964 0 9.035 3.31 9.66 7.737v.002z"
                        fill="#B1ACF5"
                      ></path>
                      <path
                        d="M35.598 6.042c-3.65-.222-6.79.456-9.053 1.624-3.458 1.784-6.537 4.947-8 8.359m20.412-5.648a14.84 14.84 0 00-10.778 1.306 14.265 14.265 0 00-5.912 6.042m14.06-3.428c-2.618-.246-4.65.11-7.006 1.536-1.8 1.1-3.234 2.783-4.16 4.787"
                        stroke="#6F66D1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M7.023 22.788c1.163-3.846 4.92-6.574 9.437-6.574 4.964 0 9.034 3.31 9.66 7.737"
                        stroke="#6F66D1"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M24.255 26.144c1.163-1.7 3.175-2.727 5.28-2.727 3.488 0 6.35 2.771 6.35 6.125 0 3.399-2.862 6.172-6.35 6.172H7.35C3.863 35.714 1 32.943 1 29.59c0-3.399 2.863-6.126 6.351-6.126 1.925 0 3.712.85 4.92 2.28"
                        stroke="#6F66D1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <p class="w-24 pl-2">Dream Planner</p>
                  </div>
                  <div class="flex bg-white shadow-sm rounded-md px-3 py-2 hover:bg-hoverbg cursor-pointer">
                    <svg
                      class="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      id="diamond"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.053 6.143l-4.79 7.15-7.28-7.15h12.07zM18.69 6.399l-7.254 6.753L6.62 6.4H18.69z"
                        fill="#E9F1FC"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.527 6.599l4.818 6.603H28.08l4.447-6.603z"
                        fill="#AED1FD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.38 13.99h9.963l6.765 17.504L1.381 13.991z"
                        fill="#8DBFFF"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.2 6.583l4.518 6.752H1.682L6.2 6.583zM19.555 32.29l-7.768-18.793h15.328l-7.56 18.794z"
                        fill="#AED1FD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.2 32.648l7.38-18.517h10.104L20.199 32.648z"
                        fill="#8DBFFF"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.412 6.399l6.884 6.936h-13.64l6.756-6.937z"
                        fill="#CCE2FF"
                      ></path>
                      <path
                        d="M1.682 13.732h35.664"
                        stroke="#5890DA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M6.5 6.232l4.975 7.5 8.081 19.399 7.77-19.399 4.999-7.5"
                        stroke="#5890DA"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M11.68 13.732L19.41 6l7.913 7.732"
                        stroke="#5890DA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        clip-rule="evenodd"
                        d="M19.555 33.484l18.588-19.752L32.537 6H6.32L1 13.732l18.555 19.752z"
                        stroke="#5890DA"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <p class="w-24 pl-2">My First Core</p>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 26"
                    id="small-logo-axis"
                  >
                    <path
                      d="M4.255 19.334C7.825 13.246 11.43 7.124 15 1l.315.07c1.295 2.077 2.485 4.223 3.745 6.3.28.422.665.985.315 1.478-1.225 2.216-2.555 4.433-3.78 6.686 2.8 0 5.6-.036 8.4 0 1.645 3.061 3.29 6.123 5.005 9.15v.28c-2.835 0-5.67 0-8.505.036-1.82-2.991-3.36-6.158-5.18-9.15-1.96 2.956-3.5 6.159-5.425 9.15-2.94-.035-5.915.035-8.89-.211v-.07c1.19-1.725 2.135-3.59 3.255-5.385z"
                      fill="#AC265B"
                      stroke="#AC265B"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2 pl-3">Axis Bluechip Fund Growth Growth</p>
                    <div class="flex space-x-4 pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 26"
                    id="small-logo-axis"
                  >
                    <path
                      d="M4.255 19.334C7.825 13.246 11.43 7.124 15 1l.315.07c1.295 2.077 2.485 4.223 3.745 6.3.28.422.665.985.315 1.478-1.225 2.216-2.555 4.433-3.78 6.686 2.8 0 5.6-.036 8.4 0 1.645 3.061 3.29 6.123 5.005 9.15v.28c-2.835 0-5.67 0-8.505.036-1.82-2.991-3.36-6.158-5.18-9.15-1.96 2.956-3.5 6.159-5.425 9.15-2.94-.035-5.915.035-8.89-.211v-.07c1.19-1.725 2.135-3.59 3.255-5.385z"
                      fill="#AC265B"
                      stroke="#AC265B"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2 pl-3">Axis Bluechip Fund Growth Growth</p>
                    <div class="flex space-x-4 pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    id="small-logo-kotak"
                  >
                    <path d="M0 0h28v28H0V0z" fill="#ED232A"></path>
                    <path d="M5 5h18v18H5V5z" fill="#fff"></path>
                    <path d="M13 0h2v28h-2V0z" fill="#fff"></path>
                    <path d="M0 13h28v2H0v-2z" fill="#fff"></path>
                    <path d="M10 10h8v8h-8v-8z" fill="#004C8F"></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2  pl-3">Kotak Standard Multicap Growth</p>
                    <div class="flex space-x-4  pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    id="small-logo-kotak"
                  >
                    <path d="M0 0h28v28H0V0z" fill="#ED232A"></path>
                    <path d="M5 5h18v18H5V5z" fill="#fff"></path>
                    <path d="M13 0h2v28h-2V0z" fill="#fff"></path>
                    <path d="M0 13h28v2H0v-2z" fill="#fff"></path>
                    <path d="M10 10h8v8h-8v-8z" fill="#004C8F"></path>
                  </svg>
                  <div class="pl-4">
                    <p class="pb-2  pl-3">Kotak Standard Multicap Growth</p>
                    <div class="flex space-x-4  pl-3">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 34 22"
                    id="small-logo-invesco"
                  >
                    <path
                      d="M14.61 1.843c1.09-.602 2.48-.542 3.69-.843.666 1.386 1.755 2.53 2.783 3.554v2.41c2.601 2.53 5.384 5 8.832 6.385.605 1.386 1.815 2.29 3.085 2.952-.544.362-1.089.723-1.694 1.145-2.42-2.47-5.323-4.398-8.045-6.506-1.27-1.807-3.63-3.434-2.904-5.964-.484-.542-1.028-1.084-1.512-1.566-.302.24-.907.723-1.21 1.024-.06 1.325-.12 2.71-1.028 3.795a76.915 76.915 0 002.238 2.169c-.302.3-.907.903-1.21 1.144a34.856 34.856 0 002.117 2.109c.424 1.325.847 2.65 1.452 3.915a94.537 94.537 0 012.42-1.084c-.545-.964-.968-1.928-1.391-2.952 1.875.542 2.54 2.41 3.508 3.916-1.754.542-3.448 1.144-4.96 2.289-.424-1.024-.968-1.928-1.513-2.892-.423-.18-.846-.361-1.33-.542-.242-.482-.726-1.325-.968-1.807-.968 1.627-1.09 3.554-.666 5.361-.786.362-1.633.723-2.42 1.145-.18-.241-.665-.723-.846-.964.181-.904.363-1.747.544-2.65h-1.815a89.892 89.892 0 01-2.359 2.41c-.423-.121-1.33-.422-1.754-.543v-2.53c-1.815-.241-3.63-.362-5.263.663-.363-.06-1.028-.241-1.33-.302 0-.843-.061-1.686-.061-2.59 2.36-1.024 4.476-2.771 7.138-2.65.605-.904 1.089-1.808 1.573-2.711 2.238-2.049 3.145-4.94 4.9-7.29z"
                      fill="#0D388E"
                      stroke="#0D388E"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2">Invesco India Oppurtunities Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                <div class="flex items-center">
                  <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                  <svg
                    class="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 34 22"
                    id="small-logo-invesco"
                  >
                    <path
                      d="M14.61 1.843c1.09-.602 2.48-.542 3.69-.843.666 1.386 1.755 2.53 2.783 3.554v2.41c2.601 2.53 5.384 5 8.832 6.385.605 1.386 1.815 2.29 3.085 2.952-.544.362-1.089.723-1.694 1.145-2.42-2.47-5.323-4.398-8.045-6.506-1.27-1.807-3.63-3.434-2.904-5.964-.484-.542-1.028-1.084-1.512-1.566-.302.24-.907.723-1.21 1.024-.06 1.325-.12 2.71-1.028 3.795a76.915 76.915 0 002.238 2.169c-.302.3-.907.903-1.21 1.144a34.856 34.856 0 002.117 2.109c.424 1.325.847 2.65 1.452 3.915a94.537 94.537 0 012.42-1.084c-.545-.964-.968-1.928-1.391-2.952 1.875.542 2.54 2.41 3.508 3.916-1.754.542-3.448 1.144-4.96 2.289-.424-1.024-.968-1.928-1.513-2.892-.423-.18-.846-.361-1.33-.542-.242-.482-.726-1.325-.968-1.807-.968 1.627-1.09 3.554-.666 5.361-.786.362-1.633.723-2.42 1.145-.18-.241-.665-.723-.846-.964.181-.904.363-1.747.544-2.65h-1.815a89.892 89.892 0 01-2.359 2.41c-.423-.121-1.33-.422-1.754-.543v-2.53c-1.815-.241-3.63-.362-5.263.663-.363-.06-1.028-.241-1.33-.302 0-.843-.061-1.686-.061-2.59 2.36-1.024 4.476-2.771 7.138-2.65.605-.904 1.089-1.808 1.573-2.711 2.238-2.049 3.145-4.94 4.9-7.29z"
                      fill="#0D388E"
                      stroke="#0D388E"
                      stroke-width=".094"
                    ></path>
                  </svg>{" "}
                  <div class="pl-4">
                    <p class="pb-2">Invesco India Oppurtunities Growth</p>
                    <div class="flex space-x-4">
                      <span class="text-fontgrey text-sm font-thin">
                        Large Cap
                      </span>{" "}
                      <p class="bg-bgorange text-orange text-sm">Recommended</p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2">1,400 Cr</span>
                    <svg
                      class="sparkline-growth"
                      width="64"
                      height="13"
                      stroke-width="2"
                      stroke="blue"
                      fill="rgba(0, 0, 255, .2)"
                    >
                      <path
                        class="sparkline--fill"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                        stroke="none"
                      ></path>
                      <path
                        class="sparkline--line"
                        d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                        fill="none"
                      ></path>
                      <line
                        class="sparkline--cursor"
                        x1="-1000"
                        x2="-1000"
                        y1="0"
                        y2="13"
                        stroke-width="2"
                      ></line>
                      <circle
                        class="sparkline--spot"
                        cx="-1000"
                        cy="4.55"
                        r="2"
                      ></circle>
                      <rect
                        width="64"
                        height="13"
                        class="sparkline--interaction-layer"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex space-x-5 pt-1">
                    <span class="text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mb-4 justify-between items-center">
              <button class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm">
                Previous
              </button>
              <ul class="flex space-x-6 shadow-md rounded-md bg-white"> <a href="#" class="">
                <li class=" pl-3 py-2 ">1</li>
              </a>
 <a href="#" class="">
                <li class=" pl-3 py-2 border-l border-bgdarkgrey">2</li>
              </a>
 <a href="#" class="">
                <li class=" pl-3 py-2 border-l border-bgdarkgrey">3</li>
              </a>
 <a href="#" class=" ">
                <li class=" pl-3 py-2 border-l border-bgdarkgrey">4</li>
              </a>
 <a href="#" class="">
                <li class=" pl-3 py-2 border-l border-bgdarkgrey">5</li>
              </a>
 <a href="#" class="">
                <li class=" pl-3 py-2 border-l border-bgdarkgrey">6</li>
              </a>
 <a href="#" class="">
                <li class=" pl-3 py-2 pr-3 border-l border-bgdarkgrey">7</li>
              </a>

                            </ul>
              <button class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm">
                Next
              </button>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="bg-lightblue ">
        <div class="max-w-6xl mx-auto pt-20 flex pl-2 justify-between items-start content-start flex-wrap lg:mr-2  lg:max-w-2xl">
          <div class="order-2">
              <div class="lg:hidden">
            <span class="text-sm text-fontgrey font-normal">
              How does Scripbox rate funds?
            </span>
            <h1 class="text-3xl font-bold max-w-sm leading-8 pt-2 pb-3">
              Proprietary 4-step system to rate mutual funds
            </h1>
            <p class="max-w-xs text-fontgrey text-md font-thin pb-4">
              We use a proprietary system to rate mutual funds and based on that
              make a recommendation or top ranking
            </p>
            </div>
            <div class="bg-white pl-4 py-3 rounded-md mb-4 lg:mt-8 lg:pb-8">
              <h4 class="pb-2">Recommended</h4>
              <p class="text-fontgrey text-sm max-w-xs font-thin lg:max-w-2xl ">
                Scripbox algorithm recommends 2-4 funds for investment for an
                investment asset class such as large cap, diversified, liquid
                etc. When you invest for an objective, the algorithm suggests
                the appropriate asset class and funds.
              </p>
            </div>
            <div>
              <p class="border-b border-bgdarkgrey pl-1 pb-3 text-md">
                Top Ranked
              </p>
            </div>
            <div>
              <p class="pl-1 pb-3 text-md pt-2">Not Recommended</p>
            </div>
          </div>
          <div class="order-1">
              <div class="hidden lg:block">
          <span class="text-sm text-fontgrey font-normal">
              How does Scripbox rate funds?
            </span>
            <h1 class="text-3xl font-bold  leading-8 pt-2 pb-3">
              Proprietary 4-step system to rate mutual funds
            </h1>
            <p class=" text-fontgrey text-md font-thin pb-4">
              We use a proprietary system to rate mutual funds and based on that
              make a recommendation or top ranking
            </p>
            </div>
            <div class="max-w-xl  flex lg:mx-auto ">
              <div class="shadow-lg bg-white rounded-l-md pl-3">
                <div class="pr-1 pt-4  pb-5  pl-3 ">
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 31"
                    id="calender-event-icon"
                  >
                    <path
                      d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z"
                      fill="#E6E6E6"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z"
                      fill="#fff"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M11 21l3 3 7-7"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M31 12H1"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M8 1v3M24 1v3"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <h4 class="font-semibold pt-3 pb-2">Track Record</h4>
                  <p class="max-w-xs text-md text-textgrey pr-4 lg:text-sm">
                    We look at consistent and long historical performance for
                    our analysis
                  </p>
                </div>
                <div class="pr-3 pt-4 pl-3  pb-5">
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    id="three-dimensional-world"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15H1zm30 0H1c0 2.761 6.716 5 15 5 8.284 0 15-2.239 15-5z"
                      fill="#E6E6E6"
                    ></path>
                    <path
                      d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15zM13 11.107c-.86.06-1.7.139-2.5.245M19 11.107c.86.06 1.7.139 2.5.245"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M27.194 12.68C29.554 13.563 31 14.724 31 16c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5 0-1.276 1.446-2.437 3.806-3.32"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                  <h4 class="font-semibold pt-3 pb-2">Sub-asset Class View</h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm">
                    We check if the sub-category of the fund is recommended by
                    us
                  </p>
                </div>
                
            </div>

              <div class="pl-4 bg-white shadow-lg rounded-r-md">
                <div class="pt-4">
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    id="safe-1"
                  >
                    <g
                      clip-path="url(#fbclip0)"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    >
                      <path
                        d="M26 1H6a5 5 0 00-5 5v20a5 5 0 005 5h20a5 5 0 005-5V6a5 5 0 00-5-5z"
                        fill="#E6E6E6"
                        stroke-linecap="square"
                      ></path>
                      <path d="M23 16h8M1 16h8" stroke-linecap="round"></path>
                      <path
                        d="M16 23a7 7 0 100-14 7 7 0 000 14z"
                        fill="#fff"
                        stroke-linecap="square"
                      ></path>
                      <path d="M17 15l3-3" stroke-linecap="round"></path>
                    </g>
                  </svg>
                  <h4 class="font-semibold pt-3 pb-2">Fund Size</h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm">
                    We look at the size of the fund with respect to other funds
                    in the category. Larger funds are preferred
                  </p>
                </div>
              
                <div class="pt-8 ">
                <svg class="w-8 h-8"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" id="speedometer-2"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" fill="#E6E6E6" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M20 6.6c-1.2-.5-2.6-.8-4-.8-3.788 0-7.118 2.105-8.877 5.2M19 13l4-4.5" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M16 20a4 4 0 110-8 4 4 0 010 8z" fill="#fff" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path></svg> <h4 class="font-semibold pt-3 pb-2">Fund Performance</h4>
                  <p class="max-w-xs text-md text-textgrey pb-2 lg:text-sm ">
                    Consistency of performance over various tenures is analysed
                    for a relative performance stack
                  </p>
                </div>
              </div>
              </div>
              <div class="bg-bgblue1 text-center mt-8  px-3 py-3 w-56 mx-auto rounded-md text-sm text-fontgrey"><a href="" class="bg-white px-3 py-2 rounded-md mr-1">Equity Funds </a>Debt Funds</div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
