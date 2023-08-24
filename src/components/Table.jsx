import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Skeleton from "./Skeleton";
import { useAxiosGet } from "../Hooks/useAxiosGet";

function Table() {
  const { data, items } = useAxiosGet(
    "https://books-api-services.onrender.com/api/v1/books"
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-gray-700">
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
