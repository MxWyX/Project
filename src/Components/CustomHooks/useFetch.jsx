import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  // 3 useState variables to store the different data returned from promise
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use axias to fetch and jsonify api call response from URL passed in.
  useEffect(() => {
    if (url === null) return;
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  // pass all data back in an object to be handled in the file it's needed in.
  return { loading, data, error };
};

export default useFetch;
