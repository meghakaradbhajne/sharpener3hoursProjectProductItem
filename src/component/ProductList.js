import React, { useRef, useState, useEffect } from "react";
import ShowProduct from "./ShowProduct";
import "./ProductList.css";
 const ProductList = () => {
  const ProductId = useRef();
  const SellingPrice = useRef();
  const ProductName = useRef();
  const ChooseACatagory = useRef();

  const [product, setProduct] = useState(() => {
     const savedProduct = localStorage.getItem("product");
     return savedProduct ? JSON.parse(savedProduct) : [];
  });

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  const SubmitHandler = (event) => {
    event.preventDefault();
    const Obj = {
      productId: ProductId.current.value,
      SellingPrice: SellingPrice.current.value,
      ProductName: ProductName.current.value,
      ChooseACatagory: ChooseACatagory.current.value,
    };
   setProduct((prev) => [...prev, Obj]);
    ProductId.current.value = "";
    SellingPrice.current.value = "";
    ProductName.current.value = "";
    ChooseACatagory.current.value = "";
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Products</h1>
        </div>
        <div className="formData">
          <form>
            <label>Product Id</label>
            <input type="text" name="Id" ref={ProductId} />

            <label> Selling Price:</label>
            <input type="number" name="number" ref={SellingPrice} />

            <label> Product Name</label>
            <input type="text" name="name" ref={ProductName} />

            <label>Choose a Catagory:</label>
            <select name="selectedOption" ref={ChooseACatagory}>
              <option value="">Select...</option>
              <option value="Electronics">Electronics</option>
              <option value="Food">Food</option>
              <option value="Skincare">SkinCare</option>
            </select>
            <button onClick={SubmitHandler} type="submit">
              Add Product
            </button>
          </form>
        </div>
        <ShowProduct product={product} setProduct={setProduct} />
      </div>
    </>
  );
};
export default ProductList;