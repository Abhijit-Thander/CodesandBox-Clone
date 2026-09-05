import { useNavigate } from "react-router";
import { useCreateProject } from "../hooks/apis/mutations/createProject";

const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const res = await createProjectMutation();
      console.log(res);
      navigate(`/project/${res.data.data}`);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#fafafa] py-16 px-6 font-sans text-[#161616] flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Create a New Project
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Choose a framework or template to kickstart your development.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616] transition-shadow shadow-sm"
            />
          </div>
        </div>

        <h2 className="text-lg font-bold mb-5 tracking-tight">
          Official Templates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group border border-gray-200 rounded-xl p-5 bg-white hover:border-[#161616] hover:shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                <svg
                  className="w-7 h-7 text-[#161616]"
                  viewBox="0 0 180 180"
                  fill="currentColor"
                >
                  <path d="M90 10.3C46 10.3 10.3 46 10.3 90C10.3 134 46 169.7 90 169.7C134 169.7 169.7 134 169.7 90C169.7 46 134 10.3 90 10.3ZM129.5 137.9L73.6 63.6H58.4V116.4H71.5V78.2L119.5 142.1C122.9 141 126.3 139.6 129.5 137.9ZM121.6 116.4H134.7V63.6H121.6V116.4Z" />
                </svg>
              </div>
              <span className="bg-[#DCFF50]/30 text-[#161616] text-[10px] font-extrabold tracking-wider px-2 py-1 rounded uppercase">
                Popular
              </span>
            </div>

            <div className="grow">
              <h3 className="font-bold text-base">Next.js</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                The React Framework for the Web. Includes App Router, Tailwind
                CSS, and ESLint.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-[#161616] transition-colors">
                Node.js Environment
              </span>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#DCFF50] transition-colors shadow-sm">
                <svg
                  className="w-4 h-4 text-[#161616]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="group border border-gray-200 rounded-xl p-5 bg-white hover:border-[#161616] hover:shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-[#61DAFB]/10 rounded-xl flex items-center justify-center border border-[#61DAFB]/20">
                <svg
                  className="w-7 h-7 text-[#087ea4]"
                  viewBox="0 0 118 103"
                  fill="currentColor"
                >
                  <path d="M59.6 19.3c-20 0-37.8 4.7-49 12.3-1.1.8-1.1 2.3 0 3.1 11.2 7.6 29 12.3 49 12.3s37.8-4.7 49-12.3c1.1-.8 1.1-2.3 0-3.1-11.2-7.6-29-12.3-49-12.3zm0 29.5c-23.7 0-43.6-6-54.8-15.6-2.9-2.5-2.9-6.9 0-9.4C16 14.1 35.9 8.2 59.6 8.2s43.6 6 54.8 15.6c2.9 2.5 2.9 6.9 0 9.4-11.2 9.6-31.1 15.6-54.8 15.6z"></path>
                </svg>
              </div>
            </div>

            <div className="grow">
              <h3 className="font-bold text-base">React.js</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                A standard Vite-powered React single page application setup with
                fast refresh.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-[#161616] transition-colors">
                Vite Environment
              </span>

              <button
                onClick={handleCreateProject}
                className="border px-3 py-1 rounded-sm cursor-pointer bg-[#DCFF50]"
              >
                {isPending ? "Creating..." : "Create Project"}
              </button>
            </div>
          </div>

          <div className="group border border-gray-200 rounded-xl p-5 bg-white hover:border-[#161616] hover:shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-[#DD0031]/10 rounded-xl flex items-center justify-center border border-[#DD0031]/20">
                <svg
                  className="w-7 h-7 text-[#DD0031]"
                  viewBox="0 0 250 250"
                  fill="currentColor"
                >
                  <path d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"></path>
                </svg>
              </div>
            </div>

            <div className="grow">
              <h3 className="font-bold text-base">Angular.js</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                The modern web developer's platform. Includes routing and core
                UI components.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-[#161616] transition-colors">
                Angular CLI
              </span>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#DCFF50] transition-colors shadow-sm">
                <svg
                  className="w-4 h-4 text-[#161616]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProject;
