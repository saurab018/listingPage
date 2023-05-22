import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

function useFetch(url) {
  const { data, error, loading } = useSWR(url, fetcher);
  console.log("datad", data, "load", loading);

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

// function useFetch(url) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const abortController = new AbortController();
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url, {
//           signal: abortController.signal,
//         });
//         if (response.data.results == undefined) {
//           setData(response.data);
//         } else {
//           setData(response.data.results);
//         }
//       } catch (error) {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted");
//         } else {
//           throw error;
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//     return () => {
//       abortController.abort();
//     };
//   }, []);

//   return [data, loading];
// }

export default useFetch;
