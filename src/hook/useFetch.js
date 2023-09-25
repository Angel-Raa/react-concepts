/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          let err = new Error("Error al obtener los datos");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrión un error";
          throw err;
        }
        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
          setError("");
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, isPending, error };
};
