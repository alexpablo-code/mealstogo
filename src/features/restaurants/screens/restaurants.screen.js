import React, { useContext } from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
