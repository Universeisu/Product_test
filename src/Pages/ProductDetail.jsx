import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="offset-lg-3 col-lg-6">
      <div className="container">
        <div className="card-row">
          <div className="card-title">
            <h2>Product Detail</h2>
          </div>
          {productData && (
            <div className="card-body">
              <img src={productData.photo + "&" + productData.id} alt="product" />
              <div className="card-text">
                <h3>
                  {productData.name} - ({productData.id})
                </h3>
                <h4>Contact Detail:</h4>
                <h5>Available: {productData.available ? "Yes" : "No"}</h5>
                <h5>Price: {productData.price}</h5>
                <h5>Category: {productData.category}</h5>
              </div>
              <Link to="/" className="btn btn-danger">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
