import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import "./index.scss";

const Home = ({data}) => {
  console.log(data)
  return <div className="home">
    <HeaderMenu />
    <Search />
<div className="home__product">
  {data.map(product => 
      (<ProductCard key={product.id} data={product} />
      ))}
</div>
  </div> ;
};

export default Home;
