import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log("restaurants in rest screen", restaurants);

  useEffect(() => {
    console.log("EFFECT restaurants in rest screen", restaurants);
  }, [restaurants]);

  return (
    <SafeArea>
      <Search />
      {/* {isLoading ? (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      ) : null} */}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
