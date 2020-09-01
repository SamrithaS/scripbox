import Nav from "../components/nav";
import React, { useState, Component, useEffect } from "react";
const axios = require("axios").default;
import cx from "classnames";
function IndexPage() {
  const [val, setval] = useState(5000);
  const [toggle, setToggle] = useState("Equity");
  const [filter, setFilter] = useState("basic");
  const [startValue, setStartValue] = useState(0);
  const [List, setList] = useState({});

  const bodyfunc = () => {
    return {
      q: "",
      from: startValue,
      size: 20
    };
  };
  useEffect(() => {
    getStaticProps();
    console.log("List", List);
  }, [startValue]);
  async function getStaticProps() {
    console.log("called");
    const { data } = await await axios.post(
      `https://apus.scripbox.com/api/v1/search`,
      bodyfunc()
    );
    const initialFundsList = await data;
    console.log("ini", initialFundsList);
    setList(initialFundsList);
    return initialFundsList;
  }
  console.log(List, "posts");
  return (
    <div>
      <Nav />
      <section class="bg-gray">
        <div className="max-w-6xl px-6 pt-20 pb-6 mx-auto lg:px-4 sm:pt-5">
          <div class="flex  items-center sm:hidden">
            <img src="./" />
            <span class="pl-3 pr-3">></span>
            <p class="bg-white text-xs text-font font-thin">Mutual Funds</p>
          </div>

          <div>
            <h2 class="font-bold text-4xl sm:text-xl">Mutual Funds</h2>
            <p class="text-lg text-fontgrey font-thin max-w-lg sm:hidden">
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
              <p>{filter == "basic" ? "Filters" : "Advanced Filters"}</p>
              <p class="text-fontclr bg-bggrey text-xs rounded-md px-3 py-2 ">
                Reset Filters{" "}
                <span class="bg-bgdarkgrey rounded-sm px-2">3</span>
              </p>
            </div>
            <div class="pt-4">
              <h3 class="font-semibold">
                {filter == "basic" ? "Scripbox Verdict" : "Risk Level"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-orange bg-bgorange ml-3 text-sm">
                      {filter == "basic" ? "Recommended" : "Low"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    24
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-green bg-bggreen ml-3 text-sm">
                      {filter == "basic" ? "Top Ranked" : "Medium"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    24
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2">
                  <div>
                    <input type="checkbox" />
                    <label class="text-red bg-bgred ml-3 text-sm">
                      {filter == "basic" ? "Not Recommended" : "High"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    24
                  </span>
                </li>
              </ul>
              <h3 class="pt-2 font-semibold">
                {filter == "basic" ? "Fund Category" : "Fund Option"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">
                      {filter == "basic" ? "Equity" : "Divided Payout"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class="ml-3 text-sm">
                      {filter == "basic" ? "Debt" : "Divided Reinvestment"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">
                      {filter == "basic" ? "Hybrid" : "Reinvestment"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li
                  class={cx(
                    "flex justify-between items-center pb-2 font-thin text-fontgrey",
                    { hidden: filter != "basic" }
                  )}
                >
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Others</label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
              </ul>
              <div class="pt-4 border-b border-bgdarkgrey pb-4">
                <div
                  class={cx("flex justify-between pb-3", {
                    hidden: filter != "basic"
                  })}
                >
                  {" "}
                  <p class="font-semibold">Minimum Investment</p>
                  <span class="text-bgblue text-sm">₹{val}+</span>
                </div>

                <input
                  type="range"
                  min="200"
                  max="10000"
                  value={val}
                  class={cx(
                    "w-110 appearance-none bg-blue-500 h-3 rounded-full slider-thumb",
                    { hidden: filter != "basic" }
                  )}
                  id="myRange"
                  onChange={e => {
                    setval(e.target.value);
                    console.log(e);
                  }}
                ></input>
                <h3
                  class={cx("pt-2 font-semibold", {
                    hidden: filter == "basic"
                  })}
                >
                  {"Sub Category"}
                </h3>
                <ul
                  class={cx("pt-2 pb-2 border-b border-bgdarkgrey", {
                    hidden: filter == "basic"
                  })}
                >
                  <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                    <div>
                      <input type="checkbox" />
                      <label class=" ml-3 text-sm">
                        {filter == "basic" ? "Equity" : "Divided Payout"}
                      </label>
                    </div>
                    <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                      12
                    </span>
                  </li>
                  <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                    <div>
                      <input type="checkbox" />
                      <label class="ml-3 text-sm">{"Large Cap"}</label>
                    </div>
                    <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input type="checkbox" />
                      <label class=" ml-3 text-sm">{"Mid Cap"}</label>
                    </div>
                    <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input type="checkbox" />
                      <label class=" ml-3 text-sm">Small Cap</label>
                    </div>
                    <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input type="checkbox" />
                      <label class=" ml-3 text-sm">Sectoral / Thematic</label>
                    </div>
                    <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                      12
                    </span>
                  </li>
                </ul>
              </div>
              <h3 class="pt-2 font-semibold">
                {filter == "basic" ? "Fund House" : "Fund Size"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">
                      {filter == "basic"
                        ? "Aditya Birla Mutual Fund"
                        : "Below 500 Crores"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class="ml-3 text-sm">
                      {filter == "basic"
                        ? "HDFC Mutual Fund"
                        : "500 - 1000 Crores"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">
                      {filter == "basic"
                        ? "Reliance Mutual Fund"
                        : "Above 1000 Crores"}
                    </label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li
                  class={cx(
                    "flex justify-between items-center pb-2 font-thin text-fontgrey",
                    { hidden: filter != "basic" }
                  )}
                >
                  <div>
                    <input type="checkbox" />
                    <label class=" ml-3 text-sm">Tata Mutual Fund</label>
                  </div>
                  <span class={cx("text-fontclr bg-bggrey px-2 rounded-sm text-xs ",{hidden:filter!="basic"})}>
                    12
                  </span>
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <p class="ml-6 text-sm text-bgblue pt-1">
                      See 44 other fund houses
                    </p>
                  ) : (
                    <input
                      class="h-8 rounded-md shadow-sm p-1 mr-3 mt-3 border-t-1 border-bgdarkgrey"
                      placeholder="search"
                    ></input>
                  )}
                </li>
              </ul>
              <a
                onClick={() => {
                  filter == "basic"
                    ? setFilter("advanced")
                    : setFilter("basic");
                }}
                class="text-sm text-bgblue pt-3 pb-4 flex items-center cursor-pointer"
              >
                <svg
                  class="w-6 h-4"
                  width="13"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1a1 1 0 011-1h11a1 1 0 110 2H1a1 1 0 01-1-1zm1 4a1 1 0 011-1h9a1 1 0 110 2H2a1 1 0 01-1-1zm3 3a1 1 0 100 2h5a1 1 0 100-2H4z"
                    fill="#1971E4"
                  />
                </svg>
                {filter == "basic"
                  ? "Show advanced filters"
                  : "Back to basic filters"}
              </a>
            </div>
          </div>
          <div class="col-span-7 pl-6 lg:pl-0 lg:col-span-10 mb-12 ">
            <div class="flex justify-between items-center text-fontgrey lg:overflow-x-scroll lg:space-x-3">
              <p class="lg:hidden">Showing 20 of 126 funds</p>{" "}
              <div class="flex items-center">
                <p class="text-fontgrey text-xs pr-4 lg:hidden">Sort by </p>

                <select class="bg-white py-2 px-4 shadow-sm rounded-md lg:flex-shrink-0 ">
                  <option value="audi" selected>
                    Recommended{" "}
                  </option>
                  <option value="volvo">Track Record</option>
                  <option value="saab">Relative Size</option>
                  <option value="vw">Category View</option>
                  <option value="vw">Consistency</option>
                </select>
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
            </div>
            <div class="bg-white shadow-md rounded-md px-3 py-3 mt-4 mb-6">
              {List && List.results ? (
                List.results.map(item => {
                  return (
                    <div class="px-2  hover:text-bgblue flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                      <div class="flex items-center">
                        <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                        <img class="h-8 w-8" src={item._source.amc_logo_url} />
                        <div class="pl-4 ">
                          <p class="pb-2 ">{item._source.amc_name}</p>
                          <div class="flex space-x-4">
                            <span class="text-fontgrey text-sm font-thin">
                              Large Cap
                            </span>{" "}
                            <p class="bg-bgorange text-orange text-sm ">
                              Recommended
                            </p>{" "}
                            <p class="bg-bggreen text-sm text-green lg:hidden">
                              Top Ranked
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="flex lg:hidden items-center space-x-4 ">
                          <span class="pr-2 text-black lg:hidden">
                            {item._source.first_investment_amount} Cr
                          </span>
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
                        <div class="lg:hidden flex space-x-5 pt-1">
                          <span class="text-fontgrey font-thin text-sm">
                            Fund Size
                          </span>
                          <span class="text-fontgrey text-sm">5Y returns</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
              {/* <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange  text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden ">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 ">1,400 Cr</span>
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

                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex space-x-5  lg:hidden pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex  lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex space-x-5  lg:hidden pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>

              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm ">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green lg:hidden">
                        Top Ranked
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex lg:hidden items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                  <div class="flex lg:hidden space-x-5 pt-1">
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
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
                <div class="flex mt-3 justify-between overflow-x-scroll py-4 px-3 space-x-3">
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
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
              <div class="px-2 flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey hover:text-bgblue">
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
                      <p class="bg-bgorange text-orange text-sm lg:hidden">
                        Recommended
                      </p>{" "}
                      <p class="bg-bggreen text-sm text-green">Top Ranked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <span class="pr-2 text-black lg:hidden">1,400 Cr</span>
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
                    <span class="lg:hidden text-fontgrey font-thin text-sm">
                      Fund Size
                    </span>
                    <span class="text-fontgrey text-sm">5Y returns</span>
                  </div>
                </div>
              </div>
           */}{" "}
            </div>
            <div class="flex mb-4 justify-between items-center">
              <button
                class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm hover:bg-hoverbg"
                onClick={() =>
                  startValue > 0
                    ? setStartValue(startValue - 20)
                    : setStartValue(0)
                }
              >
                Previous
              </button>
              <ul class="flex  shadow-md rounded-md bg-white lg:hidden">
                {" "}
                <a
                  onClick={() => {
                    setStartValue(0);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 0,
                    "bg-bgblue text-white": startValue == 0
                  })}
                >
                  <li class=" px-4 py-2  ">1</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(20);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 20,
                    "bg-bgblue text-white": startValue == 20
                  })}
                >
                  <li class=" px-4 py-2  border-l border-bgdarkgrey">2</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(40);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 40,
                    "bg-bgblue text-white": startValue == 40
                  })}
                >
                  <li class=" px-4 py-2  border-l border-bgdarkgrey">3</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(60);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 60,
                    "bg-bgblue text-white": startValue == 60
                  })}
                >
                  <li class=" px-4 py-2  border-l border-bgdarkgrey">4</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(80);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 80,
                    "bg-bgblue text-white": startValue == 80
                  })}
                >
                  <li class=" px-4 py-2  border-l border-bgdarkgrey">5</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(100);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 100,
                    "bg-bgblue text-white": startValue == 100
                  })}
                >
                  <li class=" px-4 py-2  border-l border-bgdarkgrey">6</li>
                </a>
                <a
                  onClick={() => {
                    setStartValue(120);
                  }}
                  class={cx("cursor-pointer", {
                    "hover:bg-hoverbg": startValue != 120,
                    "bg-bgblue text-white": startValue == 120
                  })}
                >
                  <li class=" px-4 py-2  pr-3 border-l border-bgdarkgrey">7</li>
                </a>
              </ul>
              <button
                class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm hover:bg-hoverbg"
                onClick={() =>
                  startValue < 600
                    ? setStartValue(startValue + 20)
                    : setStartValue(600)
                }
              >
                Next
              </button>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="bg-lightblue pb-20 sm:pb-4 lg:pb-5">
        <div class="max-w-6xl mx-auto lg:pr-2 pt-20 lg:pt-10 flex pl-2 justify-between items-start content-start flex-wrap  lg:max-w-2xl">
          <div class="lg:order-2">
            <div class="lg:hidden">
              <span class="text-sm text-fontgrey font-normal">
                How does Scripbox rate funds?
              </span>
              <h1 class="text-3xl font-bold max-w-sm leading-8 pt-2 pb-3 ">
                Proprietary 4-step system to rate mutual funds
              </h1>
              <p class="max-w-xs text-fontgrey text-md font-thin pb-4">
                We use a proprietary system to rate mutual funds and based on
                that make a recommendation or top ranking
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
          <div class="lg:order-1">
            <div class="hidden lg:block ">
              <p class="text-sm text-fontgrey font-normal sm:text-center">
                How does Scripbox rate funds?
              </p>
              <h1 class="text-3xl font-bold  sm:pt-1 leading-8 pt-2 pb-3 sm:text-2xl sm:max-w-xs sm:text-center sm:mx-auto">
                Proprietary 4-step system to rate mutual funds
              </h1>
              <p class=" text-fontgrey text-md font-thin pb-4 sm:text-center">
                We use a proprietary system to rate mutual funds and based on
                that make a recommendation or top ranking
              </p>
            </div>
            <div class="hidden lg:block bg-bgblue1 text-center mt-8 mb-6 px-1 py-3 w-56 mx-auto rounded-md text-sm text-fontgrey">
              <a
                onClick={() => {
                  setToggle("Equity");
                }}
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Equity"
                  },
                  "cursor-pointer"
                )}
              >
                Equity Funds{" "}
              </a>
              <a
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Debt"
                  },
                  "cursor-pointer"
                )}
                onClick={() => {
                  setToggle("Debt");
                }}
              >
                Debt Funds
              </a>
            </div>
            <div class="max-w-xl flex lg:mx-auto ">
              <div class="shadow-lg bg-white rounded-l-md ">
                <div class="pt-4  pb-5  pl-4 lg:pr-8 md:pr-0 sm:pr-4">
                  <svg
                    class="w-8 h-8 sm:hidden"
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
                <div class="pt-4 pl-3 pb-5 lg:pr-0 border-t border-bggrey">
                  {toggle == "Equity" ? (
                    <svg
                      class="w-8 h-8 sm:hidden"
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
                  ) : (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="impact-of-interestrates"
                    >
                      <path
                        d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15z"
                        fill="#E6E6E6"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M11.179 13.857a2.678 2.678 0 100-5.357 2.678 2.678 0 000 5.357zM20.821 23.5a2.679 2.679 0 100-5.357 2.679 2.679 0 000 5.357z"
                        fill="#fff"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M9.572 22.429L23.5 8.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M18.143 8.5H23.5v5.357"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  )}
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity"
                      ? "Sub-asset Class View"
                      : "Impact of Interest Rates"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm md:pr-0">
                    {toggle == "Equity"
                      ? "We check if the sub-category of the fund is recommended by us"
                      : "We check the relative interest rate risk of the sub-category of the fund. Lower the better"}
                  </p>
                </div>
              </div>

              <div class=" bg-white shadow-lg rounded-r-md">
                <div class="pt-4 pl-4 pb-5">
                  <svg
                    class="w-8 h-8 sm:hidden"
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
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity" ? "Fund Size" : "Relative Size"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm">
                    We look at the size of the fund with respect to other funds
                    in the category. Larger funds are preferred
                  </p>
                </div>

                <div class=" pl-4 pt-4 border-t border-bggrey ">
                  {toggle == "Equity" ? (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="speedometer-2"
                    >
                      <path
                        d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
                        fill="#E6E6E6"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M20 6.6c-1.2-.5-2.6-.8-4-.8-3.788 0-7.118 2.105-8.877 5.2M19 13l4-4.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M16 20a4 4 0 110-8 4 4 0 010 8z"
                        fill="#fff"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="speedometer-1"
                    >
                      <g clip-path="url(#fyclip0)">
                        <path
                          d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                          fill="#E6E6E6"
                        ></path>
                        <path
                          d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.134 3.091a4.407 4.407 0 002.508-1.039 4.407 4.407 0 015.716 0 4.408 4.408 0 002.508 1.04 4.408 4.408 0 014.043 4.042 4.401 4.401 0 001.039 2.508 4.407 4.407 0 010 5.716 4.407 4.407 0 00-1.04 2.508 4.408 4.408 0 01-4.042 4.043 4.407 4.407 0 00-2.508 1.039 4.407 4.407 0 01-5.716 0 4.407 4.407 0 00-2.508-1.04 4.408 4.408 0 01-4.043-4.042 4.408 4.408 0 00-1.039-2.508 4.407 4.407 0 010-5.716 4.407 4.407 0 001.04-2.508 4.407 4.407 0 014.042-4.043z"
                          fill="#E6E6E6"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        ></path>
                        <circle
                          cx="16.5"
                          cy="12.5"
                          r="6.5"
                          fill="#fff"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        ></circle>
                        <path
                          d="M14 12l2.5 2.5 5-5.5"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  )}
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity"
                      ? "Fund Performance"
                      : "Credit Attractiveness"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pb-2 lg:text-sm ">
                    {toggle == "Equity"
                      ? "Consistency of performance over various tenures is analysed for a relative performance stack"
                      : "We check the relative interest rate risk of the sub-category of the fund. Lower the better"}
                  </p>
                </div>
              </div>
            </div>
            <div class=" lg:hidden bg-bgblue1 text-center mt-8  px-1 py-3 w-56 mx-auto rounded-md text-sm text-fontgrey">
              <a
                onClick={() => {
                  setToggle("Equity");
                }}
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Equity"
                  },
                  "cursor-pointer"
                )}
              >
                Equity Funds{" "}
              </a>
              <a
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Debt"
                  },
                  "cursor-pointer"
                )}
                onClick={() => {
                  setToggle("Debt");
                }}
              >
                Debt Funds
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gray pb-20 sm:pb-4">
        <div class="max-w-6xl mx-auto py-5 pt-16 lg:pl-2">
          <h2 class="text-3xl font-semibold text-center sm:text-xl">
            How to invest in best mutual funds with Scripbox
          </h2>
          <p class="text-md max-w-md mx-auto font-thin text-center text-textgrey pt-2">
            Investing through Scripbox is made easy and paperless. All you need
            to do is follow the below steps and start investing.
          </p>
          <div class="flex pt-8 space-x-6 lg:pb-4 lg:overflow-x-scroll">
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgyellow2  rounded-t-md">
                <svg
                  class="w-48 h-32 mx-auto "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 187 40"
                  id="group-card-images"
                >
                  <path
                    clip-rule="evenodd"
                    d="M1.944 37c-.535 0-1.02-.22-1.372-.572A1.937 1.937 0 010 35.056V3.077l2.643 1.321L5.44 3l2.798 1.398L11.035 3l2.797 1.398L16.63 3l2.798 1.398L22.224 3l2.797 1.398 2.642-1.32-.07 32.22c-.097.12-.27.212-.525.316-.718.294-1.927.541-3.941.753-3.761.396-10.194.633-21.183.633z"
                    fill="#fff"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M31.29 30H3.907v4.54c0 1.406-.58 2.453-2.059 2.453h28.043c.77 0 1.399-.63 1.399-1.399z"
                    fill="#8dbfff"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M9.133 22.873L20.52 11.368"
                    stroke="#5890da"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M15.781 20.703a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353zM13.926 10.106a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353z"
                    stroke="#5890da"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M64.543 38c8.977 0 16.254-7.277 16.254-16.253 0-8.976-7.277-16.253-16.254-16.253S48.29 12.77 48.29 21.747C48.29 30.723 55.567 38 64.543 38z"
                    fill="#fbae1f"
                  ></path>
                  <g stroke-width="1.5" stroke-linecap="round">
                    <path
                      d="M75.479 3.877h5.756M78.357 1v5.756M83.239 11.428h3.239M84.858 9.808v3.24"
                      stroke="#fbae1f"
                    ></path>
                    <path
                      d="M67.007 31.128L59.76 22.59h1.526c3.16 0 5.72-1.664 5.72-4.225s-2.56-4.226-5.72-4.226h-1.526"
                      stroke="#fff"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M59.753 18.373h9.808M59.755 14.132h9.808"
                      stroke="#fff"
                    ></path>
                  </g>
                  <path
                    clip-rule="evenodd"
                    d="M117.149 1c-2.011 0-4.146.686-5.597 2.684-.901 1.241-1.543 3.059-1.884 5.471-1.614.559-2.663 1.562-3.19 2.966-.517 1.378-.565 2.874-.12 4.489-.819 1.36-1.274 2.54-1.396 3.53-.194 1.57.09 3.573.485 4.914.647 2.191 1.76 4.185 3.229 5.586 1.384 1.32 3.082 2.122 5.014 2.122h6.604c2.668 0 4.959-2.282 6.376-3.959 1.57-1.856 2.447-4.035 2.447-8.248 0-2.221-.749-3.953-2.214-5.213.347-3.53-.146-5.978-1.318-7.416-.908-1.114-1.873-1.858-2.881-2.26-.219-1.815-1.01-3.086-2.301-3.864-1.012-.61-2.012-.802-3.254-.802z"
                    fill="#ace0a2"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M116.963 38.045V17.477M103.478 38.192h26.981M120.294 18.95l-3.331 4.097M113.163 21.908l3.805 3.293v4.727l4.652-5.698"
                    stroke="#54894a"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M156.043 29.25a.275.275 0 00-.268.318l.963 5.617a.983.983 0 00.966.815h2.357a.98.98 0 00.968-.828l.883-5.608a.271.271 0 00-.077-.236.271.271 0 00-.193-.08zM171.613 29.25a.275.275 0 00-.268.318l.965 5.618a.98.98 0 00.966.814h2.251a.98.98 0 00.965-.813l.97-5.618a.275.275 0 00-.269-.319z"
                    fill="#ff9e9e"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M153.672 7.015l3.024.527a2.046 2.046 0 011.692 1.872l.051.728a21.537 21.537 0 018.181-1.48c8.597 0 15.569 4.2 15.569 11.987 0 7.788-6.97 11.976-15.569 11.976-7.527 0-13.808-3.116-15.253-9.198l-3.175-1.098a1.087 1.087 0 01-.733-1.029v-2.248a1.087 1.087 0 01.74-1.032l3.465-1.172a10.237 10.237 0 012.563-4.006 2.036 2.036 0 01-.912-1.253l-.812-3.322a1.017 1.017 0 01.246-.942 1.024 1.024 0 01.923-.31z"
                    fill="#ffbdbd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M156.261 17.81a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395z"
                    fill="#c56565"
                  ></path>
                </svg>
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Choose Long Term Plan in the plans page
                </h4>
                <p class="max-w-xs text-textgrey text-sm">
                  The fund can be chosen once you select Long Term Plan
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgblue3  rounded-t-md py-8">
                <svg
                  class="w-20 h-16 mx-auto "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 56 59"
                  id="create-account"
                >
                  <path
                    d="M38.401 0H4.037A4.03 4.03 0 000 4.023v50.954A4.03 4.03 0 004.038 59H38.4a4.03 4.03 0 004.038-4.023V4.023A4.03 4.03 0 0038.4 0z"
                    fill="#fff"
                  ></path>
                  <g filter="url(#bsa)">
                    <path
                      d="M36.96 54.86H5.479c-.738 0-1.338-.784-1.338-1.75V5.89c0-.966.6-1.75 1.338-1.75h31.483c.738 0 1.337.784 1.337 1.75v47.22c0 .966-.599 1.75-1.337 1.75z"
                      fill="#b3b3b3"
                    ></path>
                  </g>
                  <path
                    d="M18.632 34.158h23.807v9.315H21.632a3 3 0 01-3-3z"
                    fill="#444"
                    opacity=".5"
                  ></path>
                  <path
                    d="M52.404 10.756H16.452c-1.655 0-2.996 1.208-2.996 2.7v21.602c0 1.492 1.34 2.7 2.996 2.7h35.952c1.655 0 2.996-1.208 2.996-2.7V13.456c0-1.492-1.341-2.7-2.996-2.7z"
                    fill="#ecc94b"
                  ></path>
                  <path
                    d="M18.632 17.892l1.552 1.775 3.623-4.14M18.632 30.313l1.552 1.775 3.623-4.14"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                  <g fill="#fff">
                    <rect
                      height="2.07"
                      rx="1.035"
                      width="21.737"
                      x="27.947"
                      y="17.597"
                    ></rect>
                    <rect
                      height="2.07"
                      rx="1.035"
                      width="21.737"
                      x="27.947"
                      y="30.018"
                    ></rect>
                  </g>
                </svg>
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Create an account
                </h4>
                <p class="max-w-xs text-textgrey text-sm">
                  Create an account with Scripbox through a paperless process,
                  to invest in this fund
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bggreen2  rounded-t-md py-8">
                <svg
                  class="w-16 h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 56 57"
                  id="invest"
                >
                  <path
                    d="M37.321 35.628a1.198 1.198 0 00-1.038-.497l-25.438 1.212a1.211 1.211 0 00-1.154 1.21c0 10.687 8.695 19.382 19.382 19.382.505 0 .957-.314 1.135-.786l7.268-19.382c.143-.382.084-.81-.155-1.139z"
                    fill="#f2c8ab"
                  ></path>
                  <g fill="#f2c7aa">
                    <path d="M8.48 12.113V7.268a3.634 3.634 0 117.268 0v4.845M18.171 12.114V6.057a3.634 3.634 0 017.268 0v6.057M37.553 12.114V6.057a3.634 3.634 0 117.268 0v6.057M27.861 12.114v-8.48a3.634 3.634 0 017.269 0v8.48"></path>
                  </g>
                  <path
                    d="M54.512 41.496h-53.3A1.211 1.211 0 010 40.285V11.21C0 10.542.542 10 1.211 10h53.301c.669 0 1.211.542 1.211 1.211v29.074c0 .668-.542 1.21-1.211 1.21z"
                    fill="#0ecf72"
                  ></path>
                  <path
                    d="M44.821 13.325H10.903a7.268 7.268 0 01-7.268 7.269v9.69a7.268 7.268 0 017.268 7.269H44.82a7.268 7.268 0 017.269-7.268v-9.691a7.268 7.268 0 01-7.269-7.269z"
                    fill="#a4f2ac"
                  ></path>
                  <path
                    d="M27.862 31.496a6.057 6.057 0 100-12.114 6.057 6.057 0 000 12.114z"
                    fill="#0ecf72"
                  ></path>
                  <path
                    d="M36.764 29.013v7.328c-3.834 0-8.7 2.126-11.265 5.159h10l10.18-.313c.225-1.179.354-2.391.354-3.634V20.668c-5.423-.664-9.269 3.115-9.269 8.345z"
                    fill="#000"
                    opacity=".2"
                  ></path>
                  <path
                    d="M48.455 20.668c-5.423-.664-7.268 3.115-7.268 8.345l-.384 8.944c-6.662 0-12.942 3.835-12.942 11.71V55.7c0 .667.53 1.233 1.196 1.234 10.694.008 19.398-8.69 19.398-19.383z"
                    fill="#f3cbaf"
                  ></path>
                </svg>{" "}
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Invest online & transfer
                </h4>
                <p class="max-w-xs text-textgrey text-sm pr-3">
                  Invest via netbanking, UPI or through an SIP (eNACH mandate).{" "}
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgviolet rounded-t-md py-8">
                <svg
                  class="w-16 h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 60 45"
                  id="track"
                >
                  <rect fill="#78b5f2" height="45" rx="5" width="60"></rect>
                  <path
                    d="M1.607 24.012h3.75l3.585 4.79 5.522-12.195 5.893 13.928 5.893-11.06 4.821 4.537 7.5-5.798 7.871 5.798 5.77-4.537 4.573-2.868h1.608"
                    opacity=".2"
                    stroke="#0a5ac2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="3"
                  ></path>
                  <path
                    d="M1.071 21.87h4.286l3.585 4.79 5.522-12.196 5.893 13.929 5.893-11.061 4.821 4.538 7.5-5.798 7.87 5.798 5.77-4.538 4.574-2.868h2.143"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M42.857 18.214c0-1.994-1.369-3.655-3.214-4.134V0H37.5v14.08c-1.845.479-3.214 2.14-3.214 4.134 0 1.995 1.369 3.656 3.214 4.134V45h2.143V22.348c1.845-.478 3.214-2.14 3.214-4.134z"
                    fill="#f6e05e"
                  ></path>
                </svg>{" "}
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Track your investments
                </h4>
                <p class="max-w-xs text-textgrey text-sm pr-3">
                  Track, invest more and withdraw your investments through the
                  Scripbox dashboard{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl mx-auto pt-20 px-3 sm:pt-12">
          <h3 class="text-3xl font-semibold text-center sm:text-2xl">
            What are Best Equity Mutual Funds?
          </h3>
          <div class="flex justify-between pt-12 lg:flex-wrap sm:pt-5">
            <div>
              <h4 class="font-semibold text-xl pb-3">
                Why invest in mutual funds?
              </h4>
              <p class="text-textgrey max-w-lg lg:max-w-4xl">
                Invest in the best mutual funds to invest recommended by
                Scripbox that are scientifically and algorithmically selected
                that best suit your needs.
              </p>
              <p class="text-textgrey lg:max-w-4xl max-w-lg pt-2">
                Be it long-term, short-term, tax saving or your emergency needs.
                We have you covered. Let’s take a look at the top mutual funds
                to invest this year. You can invest in the mutual funds based on
                broad categories namely equity funds, debt funds, balanced fund,
                and liquid funds
              </p>
            </div>

            <iframe
              class="w-64 lg:h-64 rounded-md lg:mx-auto lg:pt-10"
              src="https://www.youtube.com/embed/G8_zxdLM1Ao"
            ></iframe>
          </div>
          <div class="py-16 ">
            <h4 class="font-semibold text-xl pb-4">Invest Now</h4>
            <div class="flex space-x-12 lg:flex-wrap lg:space-x-0">
              <div class="max-w-xs lg:max-w-4xl">
                <h4 class="font-semibold">Scientifically-chosen funds</h4>
                <p class="text-textgrey text-sm pt-2">
                  Scripbox algorithms help you choose the best mutual funds to
                  invest now in India from over 8,000 choices based on their
                  historical performance
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">Start modest</h4>
                <p class="text-textgrey text-sm pt-2">
                  Start small, stay strong. The longer you stay invested with
                  us, the better your returns are. Why? Because it is the magic
                  of compounding
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">One-click investment</h4>
                <p class="text-textgrey text-sm pt-2">
                  Choose between SIPs (Systematic Investment Plan) and OTIs
                  (one-time investments). Invest in top mutual funds to invest
                  in India with a single click.
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">Track your investments</h4>
                <p class="text-textgrey text-sm pt-2">
                  We help you stay on track with your investments and also
                  inform you in case you need to change your selection.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-start lg:flex-wrap">
              <div class="">
                <h3 class="font-semibold text-xl">What are Mutual funds?</h3>
                <p class="pb-4  pt-2 text-textgrey font-normal text-sm">
                  An asset management company AMC or fund house pools
                  investments made by individual investors and institutional
                  investors. With this pool of investments, an AMC forms a
                  mutual fund.
                </p>
                <p class="pb-4  text-textgrey font-normal text-sm">
                  AMCs have fund managers who manage the fund investments amount
                  and invest in stocks, securities, and bonds, etc on the behalf
                  of investors.
                </p>
                <p class="text-textgrey font-normal text-sm">
                  Mutual fund investors are allocated units of the fund against
                  the quantum of investment. These units can be re-invested or
                  redeemed by investors on the maturity of the fund at the NAV.
                </p>
              </div>
              <div class="flex bg-lightblue rounded-md space-x-3 ml-8 max-w-lg pt-4 pb-8 pl-5 pr-10 items-start sm:mt-5 sm:max-w-2xl lg:ml-0 mt-8">
                <svg
                  class="w-16 h-8"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.365 0C6.49771 0 0.911133 5.60754 0.911133 12.5C0.911133 19.3925 6.49771 25 13.365 25C20.2323 25 25.8189 19.3925 25.8189 12.5C25.8189 5.60754 20.2323 0 13.365 0Z"
                    fill="#43A6DD"
                  ></path>
                  <path
                    d="M15.5305 17.3909H13.9061V11.4126C13.9061 11.1125 13.6639 10.8691 13.3646 10.8691H11.1987C10.8994 10.8691 10.6572 11.1125 10.6572 11.4126C10.6572 11.7128 10.8994 11.9561 11.1987 11.9561H12.8231V17.3909H11.1987C10.8994 17.3909 10.6572 17.6342 10.6572 17.9344C10.6572 18.2345 10.8994 18.4778 11.1987 18.4778H15.5305C15.8298 18.4778 16.072 18.2345 16.072 17.9344C16.072 17.6342 15.8298 17.3909 15.5305 17.3909Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.3652 9.23934C13.9633 9.23934 14.4481 8.7527 14.4481 8.15239C14.4481 7.55208 13.9633 7.06543 13.3652 7.06543C12.7671 7.06543 12.2822 7.55208 12.2822 8.15239C12.2822 8.7527 12.7671 9.23934 13.3652 9.23934Z"
                    fill="white"
                  ></path>
                </svg>
                <div>
                  <h3 class="pb-2">What is a mutual fund NAV?</h3>
                  <p class="text-textgrey font-normal text-sm">
                    Net asset value NAV is the market price of the fund. It is
                    important because it represents the worth of each share of
                    the fund. One can say just like shares have a share price,
                    mutual funds have a NAV to represent it’s worth.
                  </p>
                </div>
              </div>
            </div>
            <div class="h-6 w-20 bg-orange rounded-md mt-10 mb-6"></div>
            <div>
              <h3 class="text-xl font-semibold">
                How to Select the Top Performing Mutual Funds in India in 2020?
              </h3>
              <p class="max-w-2xl pt-2 text-blackdark font-thin">
                An investor would ultimately want a mutual fund that provides a
                higher return. The entire selection process can be guided by
                three attributes which are an investor’s life goals,
                understanding of investment risk and investment horizon
              </p>
            </div>
            <div class="flex pt-12 justify-between space-x-4 md:flex-wrap md:space-x-0">
              <div class="max-w-xl md:max-w-2xl ">
                <h3 class="font-semibold pb-3 text-lg">Investment Objective</h3>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  An investor should first sort out his personal life goals and
                  corresponding to the life goals an investment plan must be
                  chosen. Each scheme is different from the other and serves a
                  different purpose.
                </p>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  Hence to arrive at a meaningful decision the fund investments
                  objective must match an investor’s goals, investment plan and
                  risk appetite. A long term objective cannot be met with a
                  short term scheme.
                </p>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  All the necessary details related to the scheme, its asset
                  allocation, objective, and strategy are available in the key
                  information document and scheme information document.
                </p>
              </div>
              <div class="max-w-xl pl-8 md:pl-0 md:max-w-2xl md:pt-4 ">
                <h3 class="font-semibold pb-3 text-lg">Fund History</h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  The fund history is the track record of the fund’s performance
                  in the past during the ups and downs of the market. This shows
                  the strength of the fund during tough times.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  A recently launched fund may or may not outperform the tough
                  times i.e. bear runs in the market since it does not have
                  dealt with such scenarios. On the other hand, a fund with a
                  good history of generating consistent returns shows the
                  accuracy of investment strategies.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  To shortlist, an investor must check the track for the same
                  period for which the investment horizon is decided. For
                  example, if an investor is willing to invest for say 5 years
                  he must check the track record of 5 years of the fund. Expense
                  Ratio
                </p>
              </div>
            </div>
            <div class="flex pt-12 justify-between space-x-4 md:flex-wrap md:space-x-0 md:pt-4">
              <div class="max-w-xl pr-6 lg:pr-0 md:max-w-2xl ">
                <h3 class="font-semibold pb-3 text-lg">Expense Ratio</h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  An annual fee is charged by the fund house manager for
                  managing an investor’s funds, this is called expense ratio and
                  expressed as a percentage. The final payoff to an investor
                  will be the returns generated minus the expense ratio. The net
                  amount is the final amount that an investor received.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  A higher expense ratio would result in lower returns for an
                  investor. Hence while considering a fund, an investor must
                  choose a fund with a lower expense ratio compared to peer
                  funds in the category
                </p>
              </div>
              <div class="max-w-xl md:max-w-2xl md:pt-4 ">
                <h3 class="font-semibold pb-3 text-lg">
                  Performance of fund manager
                </h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  The fund manager’s involvement is critical in the performance
                  of a fund. It is the fund manager’s responsibility to ensure
                  the show is going smoothly. It is important to know the track
                  record of the fund manager.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  An investor must check the performance of the fund during the
                  market rally and slump. Better fund management is showcased
                  when a fund provides consistent returns and contains losses
                  during the bear runs of the market.
                </p>
              </div>
            </div>
            <div class="h-6 w-20 bg-orange rounded-md mt-10 mb-6"></div>
            <div class="flex items-center lg:flex-wrap mb-20">
              <div class="max-w-2xl pr-6 lg:pr-0 lg:max-w-6xl ">
                <h3 class="font-semibold pb-3 text-xl">
                  How to invest in Top Performing Mutual Fund?
                </h3>
                <p class="text-base font-thin text-textgrey pb-3">
                  An investor can invest a lump sum one time or through SIP
                  periodically. An investor can choose to invest lump sum one
                  time if he has considerable corpus to invest for a
                  longer-term. While SIP is a regular investment over a period
                  of time.
                </p>
                <p class="text-base font-thin text-textgrey pb-3">
                  An investor can choose to invest monthly, quarterly or
                  half-yearly. SIP mutual funds are recommended for the first
                  time mutual fund investors.
                </p>
                <p class="text-base font-thin text-textgrey pb-3">
                  Investing through Scripbox is made easy and{" "}
                  <span class="text-black font-semibold"> paperless</span>. All
                  you need to do is follow the 5 easy steps to start investing.
                </p>
              </div>
              <ul class="shadow-md rounded-md px-6 py-6 mx-auto lg:mt-6 ">
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    1
                  </span>
                  Sign in at scripbox.com
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    2
                  </span>
                  Enter your personal details like dob, gender
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    3
                  </span>
                  Complete your KYC
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    4
                  </span>
                  Add your bank details
                </li>
                <li class="text-black font-semibold text-md ">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    5
                  </span>
                  Create a new plan and start investing
                </li>
              </ul>
            </div>
          </div>
          <div class="max-w-6xl mx-auto bg-bgclr pt-6 lg:max-w-4xl rounded-md md:max-w-xl">
            <h4 class="text-orange bg-white w-48 mx-auto text-center mb-4 rounded-full font-semibold">
              The Scripbox Promise
            </h4>
            <h2 class="text-xl max-w-md font-semibold mx-auto text-center pb-6">
              Scripbox has helped over 2500 people become millionaires in the
              last 7 years
            </h2>
            <p class="text-white bg-green w-40 mx-auto rounded-md text-center py-1 mb-2">
              Start Investing Now
            </p>
            <div class="flex lg:flex-wrap mt-10 pb-20 mb-20 justify-between mx-3 md:pb-5 md:mb-5 ">
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl ">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 39 40"
                  id="portion"
                >
                  <g clip-path="url(#eiclip0)">
                    <path
                      d="M25.502 5.745L18 21l15.255 7.502"
                      fill="#fff"
                    ></path>
                    <path
                      d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z"
                      fill="#9F7AEA"
                    ></path>
                    <path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path>
                    <path
                      d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z"
                      fill="#E7FEF8"
                    ></path>
                    <path
                      d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z"
                      fill="#11C095"
                    ></path>
                  </g>
                </svg>
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0">Fund Selection</h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    You'll never have to worry about what funds to choose. We'll
                    suggest what's best for you.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl md:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="cup"
                >
                  <path
                    d="M10.1 19.355H8.8a5.22 5.22 0 01-3.677-1.512 5.142 5.142 0 01-1.523-3.65V3.872h6.5M30.9 19.355h1.3a5.22 5.22 0 003.677-1.512 5.142 5.142 0 001.523-3.65V3.872h-6.5M20.5 33.548v-7.742"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.5 25.806a11.745 11.745 0 01-8.273-3.4A11.57 11.57 0 018.8 14.193V1.29h23.4v12.904c0 1.524-.303 3.035-.89 4.444a11.608 11.608 0 01-2.537 3.767 11.706 11.706 0 01-3.796 2.517c-1.42.584-2.94.884-4.477.884z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.31 9.032v3.871M16.6 11.707l3.709 1.196M18.017 16.035l2.292-3.132M22.601 16.035l-2.292-3.132M24.018 11.707l-3.709 1.196"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32.2 38.71H8.8c0-1.711-.267-3.952 1.3-5.162 1.567-1.21 4.84-1.29 7.057-1.29h6.686c2.195 0 5.505.092 7.057 1.29 1.552 1.199 1.3 3.467 1.3 5.162z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    Continuous monitoring & alerts
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    We will track our recommendations and suggest changes & fund
                    exists whenever required.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl lg:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="archery-target"
                >
                  <g
                    clip-path="url(#anclip0)"
                    stroke="#007AFF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  >
                    <path
                      d="M16.5 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 32a8 8 0 100-16 8 8 0 000 16z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 25a1 1 0 100-2 1 1 0 000 2z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path d="M16.75 23.75l20-20"></path>
                    <path
                      d="M31.75 8.75L30.5 2.5l-5 5 1.25 6.25L33 15l5-5-6.25-1.25z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                  </g>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    All week call assistance
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    Our customer champions are available 7 days a week from 8AM
                    to 8PM.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl lg:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="savings"
                >
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.602 16.636a7.714 7.714 0 100-15.429 7.714 7.714 0 000 15.429z"
                    fill="#FEFCBF"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.602 16.893v6.685M20.602 6.607v4.629"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M8.773 28.464H32.43l-1.067 8.534a2 2 0 01-1.984 1.752H11.824a2 2 0 01-1.984-1.752l-1.067-8.534z"
                    fill="#B6F1E0"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    Annual reviews & rebalances
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    We review your investments and make course corrections every
                    year to make the best out of your investments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
