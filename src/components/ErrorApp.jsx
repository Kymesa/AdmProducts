import { useRouteError } from "react-router-dom";

export default function ErrorApp() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-red-500 font-semibold">{error.status} Error</h3>
            <p className="text-white text-4xl font-semibold sm:text-5xl">
              {error.statusText}
            </p>
            <p className="text-white">{error.error["message"]}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                Go back
              </a>
              <a className="block py-2 px-4 text-white hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                Contact support
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
