import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Productlist = () => {
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setProductData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/product/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/product/detail/" + id);
  };
  const removeStudent = (id) => {
    if (window.confirm("Do You Want To Remove")) {
      fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("remove successfuly");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Product List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/product/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <br />
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>available</td>
                <td>price</td>
                <td>catagory</td>
              </tr>
            </thead>
            <tbody>
            {productData &&
                productData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.available ? "Yes" : "No"}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>  
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeStudent(item.id);
                        }}
                      >
                        Delete
                      </a>  
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
