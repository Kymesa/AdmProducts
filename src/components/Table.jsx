import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Skeleton from "./Skeleton";
import { useAxiosGet } from "../Hooks/useAxiosGet";
const URL = "https://books-api-services.onrender.com/api/v1/books";
import { Link } from "react-router-dom";
function Table() {
  const { data, items, error, msj, setData, setItems } = useAxiosGet(URL);
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Link to="/new">
            <button className="py-2 mb-4 mt-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              NEW
            </button>
          </Link>
        </div>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-gray-700">
              {error && <strong>{error}</strong>}
              {msj && <strong>SE HIZO LA PETICION</strong>}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <TableHeader items={items} />
                {data ? (
                  data.map((p) => (
                    <TableBody
                      setItems={setItems}
                      data={data}
                      setData={setData}
                      id={p._id}
                      name={p.name}
                      provider={p.provider}
                      category={p.category}
                      price={p.price}
                      key={p._id}
                    />
                  ))
                ) : (
                  <Skeleton />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
