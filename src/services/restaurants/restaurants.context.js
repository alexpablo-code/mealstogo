import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then((data) => {
          const transformedData = restaurantsTransform(data);
          console.log("restaurantTransform result", transformedData);
          return transformedData;
        })
        .then((results) => {
          setIsLoading(false);
          console.log("results in after transform", results);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log("error in retrieveRestaurants", err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log("LOCATION STRING IN USEEFFECT", locationString);
      retrieveRestaurants(locationString);
      console.log("#####", restaurants);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        // restaurants: restaurants -> same thing,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
