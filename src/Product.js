import "./Product.css";

const Product = (props) => {
  console.log(props, "abcd");
  return (
    <div className="Product">
      <h3>{props.title}</h3>
      <h5>Product Description</h5>
    </div>
  );
};

export default Product;
