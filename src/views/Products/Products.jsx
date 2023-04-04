import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);
  console.log(selectedProduct);

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductDetail />
    </section>
  );
};

export default Products;
