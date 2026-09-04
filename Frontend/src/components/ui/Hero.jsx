import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-[#ffffff] py-20 px-6  font-sans text-[#161616]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Build software
              <br />
              faster, together.
            </h1>
            <p className="text-lg text-gray-700 max-w-md mt-2">
              Instant cloud development environments for your web projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                to="/create-project"
                className="bg-[#DCFF50] text-[#161616] font-semibold text-sm px-6 py-3 rounded-md shadow-sm hover:brightness-95 transition-all"
              >
                Start Coding
              </Link>
              <Link
                href="#"
                className="bg-white border border-[#161616] text-[#161616] font-semibold text-sm px-6 py-3 rounded-md hover:bg-gray-50 transition-all"
              >
                Try a Template
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#DCFF50] rounded-full blur-2xl opacity-60 mix-blend-multiply z-0 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5">
              <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="h-5 w-48 bg-white border border-gray-200 rounded text-center"></div>
                <div className="w-12"></div>{" "}
              </div>

              <div className="flex h-64 w-full bg-white">
                <div className="w-1/3 h-full border-r border-gray-100 p-4 flex flex-col gap-3">
                  <div className="w-full h-3 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded-sm ml-4"></div>
                  <div className="w-5/6 h-3 bg-gray-100 rounded-sm ml-4"></div>
                  <div className="w-1/2 h-3 bg-gray-100 rounded-sm ml-4"></div>
                  <div className="w-full h-3 bg-gray-200 rounded-sm mt-2"></div>
                  <div className="w-2/3 h-3 bg-gray-100 rounded-sm ml-4"></div>
                </div>

                <div className="w-2/3 h-full p-6 flex flex-col gap-3 relative">
                  <div className="w-1/2 h-3 bg-gray-100 rounded-sm"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded-sm ml-4"></div>
                  <div className="w-full h-3 bg-gray-100 rounded-sm ml-4"></div>
                  <div className="w-5/6 h-3 bg-gray-100 rounded-sm ml-8"></div>

                  <div className="w-3/4 h-4 bg-[#DCFF50]/30 border-l-2 border-[#DCFF50] flex items-center mt-2 pl-2">
                    <div className="w-1/2 h-2 bg-[#161616]/40 rounded-sm"></div>
                  </div>

                  <div className="w-1/2 h-3 bg-gray-100 rounded-sm ml-4 mt-2"></div>
                  <div className="w-1/3 h-3 bg-gray-100 rounded-sm"></div>

                  <div className="absolute right-12 bottom-12 z-20">
                    <svg
                      className="w-5 h-5 text-[#161616] drop-shadow-md"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full  bg-[#ffffff] pb-16 px-6 font-sans text-[#161616] flex justify-center">
        <div className="max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 border  border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg border bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Instant Deploys</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Easy and fast cloud development in our web projects.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg border bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Real-time Collaboration</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Instant cloud development environments or anywhere.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Pre-configured Templates</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Resources and premises and templates for solutions.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Developer Templates</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Easy exploration, scaling and maintaining websites.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Automatic Shapes</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Real-time combinations, and real-time projects.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DCFF50] flex items-center justify-center text-[#95ad26]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Runtime Optimization</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Improve exploration sourcing and reasons for processors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ffffff] py-16 px-6 font-sans text-[#161616] flex justify-center">
        <div className="max-w-5xl w-full">
          <h2 className="text-2xl font-extrabold mb-8 tracking-tight">
            Start from a template
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#61DAFB]">
                <svg viewBox="0 0 118 103" fill="currentColor">
                  <path d="M59.6 19.3c-20 0-37.8 4.7-49 12.3-1.1.8-1.1 2.3 0 3.1 11.2 7.6 29 12.3 49 12.3s37.8-4.7 49-12.3c1.1-.8 1.1-2.3 0-3.1-11.2-7.6-29-12.3-49-12.3zm0 29.5c-23.7 0-43.6-6-54.8-15.6-2.9-2.5-2.9-6.9 0-9.4C16 14.1 35.9 8.2 59.6 8.2s43.6 6 54.8 15.6c2.9 2.5 2.9 6.9 0 9.4-11.2 9.6-31.1 15.6-54.8 15.6z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">React</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Create a popular framework for React.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#41B883]">
                <svg viewBox="0 0 256 221" fill="currentColor">
                  <path d="M204.8 0H256L128 220.8 0 0h51.2L128 132.48 204.8 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Vue</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Create a popular frameworks.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#DD0031]">
                <svg viewBox="0 0 250 250" fill="currentColor">
                  <path d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Angular</h4>
                <p className="text-xs text-gray-600 mt-1">
                  A persona framework and Angular.
                </p>
              </div>
              <svg
                className="absolute bottom-2 right-4 w-6 h-6 text-[#161616] drop-shadow-md z-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
              </svg>
            </a>

            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#339933]">
                <svg viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128 14.6l-98.1 56.7v113.4l98.1 56.7 98.1-56.7V71.3z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Node.js</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Compare performance and Node.js.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#161616]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Rean.js</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Build a continuous choice to Sest.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="p-5 border border-gray-100 rounded-xl shadow-sm bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
            >
              <div className="w-8 h-8 text-[#1572B6]">
                <svg viewBox="0 0 256 256" fill="currentColor">
                  <path d="M37 28h182l-16 177-75 23-75-23L44 72h137l-3 44H62z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">CSS</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Protect client with Vim software.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
