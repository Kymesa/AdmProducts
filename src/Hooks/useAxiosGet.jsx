import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosGet(url) {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(0);
  useEffect(() => {
    axios.get(url).then((result) => setData(result.data.data));
    axios.get(url).then((result) => setItems(result.data.totalItems));
  }, [url]);

  return { data, items };
}

export { useAxiosGet };
