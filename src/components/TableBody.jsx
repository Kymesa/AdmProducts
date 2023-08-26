/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const URL = "https://books-api-services.onrender.com/api/v1/books";

function TableBody({
  name,
  provider,
  category,
  price,
  id,
  setData,
  data,
  setItems,
}) {
  const DeleteButton = async (id) => {
    await axios.delete(`${URL}/${id}`);
    setData(data.filter((p) => p._id !== id));
    setItems(data.length - 1);
  };

  return (
    <>
      <tbody className="bg-gray-700 dark:divide-gray-700  divide-y divide-gray-200 ">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
            {provider}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
            {category}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
            {price}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to={`/edit/${id}`}>
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Edit
              </button>
            </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => DeleteButton(id)}
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableBody;
