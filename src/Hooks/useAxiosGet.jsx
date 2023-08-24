import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosGet(url) {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(0);
  const [error, setError] = useState(null);
  const getData = async (params_url) => {
    try {
      const result = await axios(params_url);
      setData(result.data.data);
      setItems(result.data.totalItems);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData(url);
    // axios
    //   .get(url)
    //   .then((result) => setData(result.data.data))
    //   .catch((e) => setError(e.message));
    // axios
    //   .get(url)
    //   .then((result) => setItems(result.data.totalItems))
    //   .catch((e) => setError(e.message));
  }, [url]);

  return { data, items, error };
}

export { useAxiosGet };
