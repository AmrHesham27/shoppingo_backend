import { useState } from "react";

function useFetch(url, requestConfig) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const getResponse = async () => {
    const response = await fetch(url, requestConfig);
    return await response.json();
  };

  setIsLoading(true);
  getResponse()
    .then((data) => {
      setResponse(data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  return [response, error, isLoading];
}

export default useFetch;
