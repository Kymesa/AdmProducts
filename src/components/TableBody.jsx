/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types

function TableBody({ name, provider, category, price }) {
  return (
    <>
      <tbody className="bg-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
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
            <a className="text-blue-500 hover:text-blue-700" href="#">
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Edit
              </button>
            </a>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a className="text-blue-500 hover:text-blue-700" href="#">
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Delete
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableBody;