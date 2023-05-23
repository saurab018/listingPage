import axios from "axios";
import useSWR from "swr";

function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return { data, loading: !error && !data, error };
}

const fetcher = async (url) => {
  const response = await axios.get(url);
  if (response.data.results == undefined) {
    return response.data;
  } else {
    return response.data.results;
  }
};

export default useFetch;
