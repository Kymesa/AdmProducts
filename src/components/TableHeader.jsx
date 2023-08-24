function TableHeader({ items }) {
  return (
    <>
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            {items > 0 && (
              <span className="text-xs py-0.5 px-1.5 rounded-full font-medium bg-blue-50 border border-blue-200 text-blue-600">
                {items}
              </span>
            )}
            {"   "}
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            Provider
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            Action
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
          >
            Action
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
