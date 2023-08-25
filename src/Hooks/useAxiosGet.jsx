import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosGet(url) {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => setData(result.data.data))
      .catch((e) => setError(e.message));
    axios
      .get(url)
      .then((result) => setItems(result.data.totalItems))
      .catch((e) => setError(e.message));
  }, []);

  return { data, items, error, setData, setItems };
}

export { useAxiosGet };
