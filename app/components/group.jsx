"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
function Group() {
  const { changeTheme } = useContext(ThemeContext);
  const themes = [
    {
      name: "light",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#FFFFFF", // Replace with actual background color
      change: () => {
        changeTheme("light");
      },
    },
    {
      name: "dark",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#000000", // Replace with actual background color
      change: () => {
        changeTheme("dark");
      },
    },
    {
      name: "cupcake",
      color: "#D926AA", // Replace with actual text color
      backgroundColor: "#FFD1DC", // Replace with actual background color
      change: () => {
        changeTheme("cupcake");
      },
    },
    {
      name: "bumblebee",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#FFEB3B", // Replace with actual background color
      change: () => {
        changeTheme("bumblebee");
      },
    },
    {
      name: "emerald",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#2ECC71", // Replace with actual background color
      change: () => {
        changeTheme("emerald");
      },
    },
    {
      name: "corporate",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#007BFF", // Replace with actual background color
      change: () => {
        changeTheme("corporate");
      },
    },
    {
      name: "synthwave",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#D741A7", // Replace with actual background color
      change: () => {
        changeTheme("synthwave");
      },
    },
    {
      name: "retro",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#FFC107", // Replace with actual background color
      change: () => {
        changeTheme("retro");
      },
    },
    {
      name: "cyberpunk",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#00FF00", // Replace with actual background color
      change: () => {
        changeTheme("cyberpunk");
      },
    },
    {
      name: "valentine",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#FF69B4", // Replace with actual background color
      change: () => {
        changeTheme("valentine");
      },
    },
    {
      name: "halloween",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#FF7518", // Replace with actual background color
      change: () => {
        changeTheme("halloween");
      },
    },
    {
      name: "garden",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#4CAF50", // Replace with actual background color
      change: () => {
        changeTheme("garden");
      },
    },
    {
      name: "forest",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#228B22", // Replace with actual background color
      change: () => {
        changeTheme("forest");
      },
    },
    {
      name: "aqua",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#00FFFF", // Replace with actual background color
      change: () => {
        changeTheme("aqua");
      },
    },
    {
      name: "lofi",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#F5F5F5", // Replace with actual background color
      change: () => {
        changeTheme("lofi");
      },
    },
    {
      name: "pastel",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#FFDAB9", // Replace with actual background color
      change: () => {
        changeTheme("pastel");
      },
    },
    {
      name: "fantasy",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#8E44AD", // Replace with actual background color
      change: () => {
        changeTheme("fantasy");
      },
    },
    {
      name: "wireframe",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#BDC3C7", // Replace with actual background color
      change: () => {
        changeTheme("wireframe");
      },
    },
    {
      name: "black",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#000000", // Replace with actual background color
      change: () => {
        changeTheme("black");
      },
    },
    {
      name: "luxury",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#B3A369", // Replace with actual background color
      change: () => {
        changeTheme("luxury");
      },
    },
    {
      name: "dracula",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#FF79C6", // Replace with actual background color
      change: () => {
        changeTheme("dracula");
      },
    },
    {
      name: "cmyk",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#00FFFF", // Replace with actual background color
      change: () => {
        changeTheme("cmyk");
      },
    },
    {
      name: "autumn",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#D35400", // Replace with actual background color
      change: () => {
        changeTheme("autumn");
      },
    },
    {
      name: "business",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#34495E", // Replace with actual background color
      change: () => {
        changeTheme("business");
      },
    },
    {
      name: "acid",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#BFFF00", // Replace with actual background color
      change: () => {
        changeTheme("acid");
      },
    },
    {
      name: "lemonade",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#FFFACD", // Replace with actual background color
      change: () => {
        changeTheme("lemonade");
      },
    },
    {
      name: "night",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#2C3E50", // Replace with actual background color
      change: () => {
        changeTheme("night");
      },
    },
    {
      name: "coffee",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#6F4E37", // Replace with actual background color
      change: () => {
        changeTheme("coffee");
      },
    },
    {
      name: "winter",
      color: "#000000", // Replace with actual text color
      backgroundColor: "#00BFFF", // Replace with actual background color
      change: () => {
        changeTheme("winter");
      },
    },
    {
      name: "dim",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#696969", // Replace with actual background color
      change: () => {
        changeTheme("dim");
      },
    },
    {
      name: "nord",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#5E81AC", // Replace with actual background color
      change: () => {
        changeTheme("nord");
      },
    },
    {
      name: "sunset",
      color: "#FFFFFF", // Replace with actual text color
      backgroundColor: "#FF4500", // Replace with actual background color
      change: () => {
        changeTheme("sunset");
      },
    },
  ];

  console.log(themes);

  return (
    <>
      <div className="btn-group flex flex-grow gap-5 p-5 flex-wrap justify-between">
        {themes.map((e, k) => {
          return (
            <button
              key={k}
              className="btn capitalize"
              style={{ background: e.backgroundColor, color: e.color }}
              onClick={e.change}
            >
              {k + 1} - {e.name}
            </button>
          );
        })}
      </div>

      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">Navbar Title</div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a>Navbar Item 1</a>
                  </li>
                  <li>
                    <a>Navbar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            Content
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>

        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>

        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>

          <div className="btm-nav">
            <button className="bg-pink-200 text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="btm-nav-label">Home</span>
            </button>
            <button className="active border-blue-600 bg-blue-200 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="btm-nav-label">Warnings</span>
            </button>
            <button className="bg-teal-200 text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="btm-nav-label">Statics</span>
            </button>
          </div>

          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <footer className="footer bg-neutral text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
export default Group;
