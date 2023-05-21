import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(url);
    if (response.data.results == undefined) {
      setData(response.data);
    } else {
      setData(response.data.results);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading];
}

export default useFetch;
