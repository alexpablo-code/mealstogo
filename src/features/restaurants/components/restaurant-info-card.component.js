import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component.js";
import open from "../../../../assets/open.js";
import star from "../../../../assets/star.js";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  RestaurantIcons,
  Rating,
} from "./restaurant-info-card.styles.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // this is to make a new array with elements amounts of rating, elements of undefined, math.ceil to avoid decimals and just round to whole numbers UP, math.floor to round DOWN

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RestaurantIcons>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </RestaurantIcons>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
