import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";

const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return <div>{products && products.length}</div>;
};

export default TopPageComponent;
