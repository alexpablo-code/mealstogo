import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    console.log("Searching for:", searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then((result) => {
        console.log("locationRequest result:", result);
        return locationTransform(result);
      })
      .then((transformedResult) => {
        setIsLoading(false);
        setLocation(transformedResult);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.error("Error in onSearch:", err);
      });
  };

  useEffect(() => {
    console.log("LocationProvider initialized"); // Log initialization
  }, []);

  console.log("LocationProvider: Rendered");

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
