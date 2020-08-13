import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <section class="bg-gray">
      <div>
        <Nav />
        <div className="max-w-6xl px-6 pt-20 pb-6 mx-auto">
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
      </div>
      <div class="max-w-6xl mx-auto grid grid-cols-10 pl-6 ">
        <div class="col-span-3">
          <div class="flex justify-between items-center text-fontgrey border-b border-bgdarkgrey pb-3">
            <p>Filters</p>
            <p class="text-fontclr bg-bggrey text-xs rounded-md px-3 py-2 ">
              Reset Filters <span class="bg-bgdarkgrey rounded-sm px-2">3</span>
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
                  <label class=" ml-3 text-sm">Aditya Birla Mutual Fund</label>
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
        <div class="col-span-7 pl-6 ">
          <div class="flex justify-between items-center text-fontgrey">
            <p>Showing 20 of 126 funds</p>{" "}
            <div class="flex items-center">
              <p class="text-fontgrey text-xs pr-4">Sort by </p>
              <span class="bg-white py-2 px-4 shadow-sm rounded-md">
                Recommended
              </span>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-md px-3 py-3 mt-4">
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
            <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-3 cursor-pointer">
                <div class="flex ">
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
                  <span class="text-fontgrey text-sm font-thin">Large Cap</span>{" "}
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
             <div class="flex space-x-5 pt-1"><span class="text-fontgrey font-thin text-sm">Fund Size</span><span class="text-fontgrey text-sm">5Y returns</span></div>
              </div>
            </div>
          
         </div>
         </div>{" "}
        
      </div>
    </section>
  );
}
