import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    ID: "",
    name: "",
    email: "",
    availiable: "",
    price: "",
    category: "",
    photo: "http://source.unsplash.com/random/200x200/?portrait",
  });
  const navigete = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
        id: product.id,  
        name: product.name,
        available: product.available,
        phone: product.phone,
        price: product.price,
        category: product.category,
        photo: product.photo,
      };
    fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        alert: "Save sucessfully";
        navigete("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Product</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">id</label>
                      <input
                        type="text"
                        required
                        name="id"
                        id="id"
                        value={product.id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">available</label>
                      <input
                        type="text"
                        
                        name="available"
                        id="available"
                        value={product.available}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">price</label>
                      <input
                        type="text"
                        required
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">category</label>
                      <input
                        type="text"
                        
                        name="category"
                        id="category"
                        value={product.category}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  
};

export default EditProduct;