import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Skeleton from "./Skeleton";
import { useAxiosGet } from "../Hooks/useAxiosGet";
const URL = "https://books-api-services.onrender.com/api/v1/books";

function Table() {
  const { data, items, error, msj } = useAxiosGet(URL);

  return (
    <>
      <div className="flex flex-col">
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
