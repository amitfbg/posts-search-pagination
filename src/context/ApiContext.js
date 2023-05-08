import React, { useState, useEffect, createContext } from "react";

import { fetchPost } from "../Api/api";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPost()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error("Invalid post");
        }
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <APIContext.Provider
      value={{
        loading,
        error,
        posts,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
