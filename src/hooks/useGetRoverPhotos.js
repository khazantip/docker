import { useState } from "react";
import { fetchQuery } from "../api/query";
import { useQuery } from "@tanstack/react-query";

export const useGetRoverPhotos = () =>
  useQuery({
    queryKey: ["fotos"],
    queryFn: fetchQuery,
  });

// const [data, setData] = useState([]);
//   const [error, setError] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchData = () => {
//     fetchQuery()
//       .then(json => setData(json.results))
//       .catch(error => setError(error.message))
//       .finally(() => setIsLoading(false));
//   };
