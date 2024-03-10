import React from "react";
import "./ShowProduct.css";

const ShowProduct = (props) => {
  const deleteItem = (productId) => {
    // Remove the item from the product state
    const deleteProduct = props.product.filter((item) => item.productId !== productId);
    props.setProduct(deleteProduct);
    // Remove the item from localStorage
    localStorage.removeItem(productId);
  };

  return (
    <>
      <div className="eletronicsList">
        <h1>Electronics</h1>
  </div>
      <div className="chooseCategory">
        {props.product
          .filter((item) => item.ChooseACatagory === "Electronics")
          .map((pitem) => (
            <div className="listItem" key={pitem.productId}>
              <p>{pitem.SellingPrice}</p>
              <p>{pitem.ProductName}</p>
              <p>{pitem.ChooseACatagory}</p>
              <button onClick={() => deleteItem(pitem.productId)}>delete</button>
            </div>
          ))}
      </div>
    

      <div className="Skincare">
        <h1>SkinCare</h1>
      </div>
      <div>
        {props.product
          .filter((item) => item.ChooseACatagory === "Skincare")
          .map((pitem) => (
            <div key={pitem.productId}>
              <p>{pitem.SellingPrice}</p>
              <p>{pitem.ProductName}</p>
              <p>{pitem.ChooseACatagory}</p>
              <button onClick={() => deleteItem(pitem.productId)}>delete</button>
            </div>
          ))}
      </div>
      <div className="FoodList">
        <h1>Food</h1>
      </div>
      <div className="showList">
        <div>
          {props.product
            .filter((item) => item.ChooseACatagory === "Food")
            .map((pitem) => (
              <div key={pitem.productId}>
                <p>{pitem.SellingPrice}</p>
                <p>{pitem.ProductName}</p>
                <p>{pitem.ChooseACatagory}</p>
                <button onClick={() => deleteItem(pitem.productId)}>delete</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;