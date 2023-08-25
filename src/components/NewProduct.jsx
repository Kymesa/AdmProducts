import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const URL = "https://books-api-services.onrender.com/api/v1/books";
function NewProduct() {
  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const submitForm = async (e) => {
    e.preventDefault();
    const dataPostForm = { name, provider, category, price };
    try {
      await axios.post(URL, dataPostForm);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "PRODUCTO CREADO CON EXITO",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-700 dark:divide-gray-700">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          NEW PRODUCTS
        </h2>

        <form onSubmit={submitForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Provider
              </label>
              <input
                onChange={(e) => setProvider(e.target.value)}
                id="provider"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Category
              </label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Link to="/">
              <button className="px-8 mr-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewProduct;
