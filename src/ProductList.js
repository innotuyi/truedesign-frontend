import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  // Assume your API endpoint for fetching the product list is /api/getProducts
  const fetchProductList = async () => {
    try {
      const response = await fetch('/api/getProducts');
      const data = await response.json();
      setProductList(data); // Assuming the API returns an array of product items
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  useEffect(() => {
    // Fetch the product list when the component mounts
    fetchProductList();
  }, []);

    // Handle search term changes
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        // Filter the product list based on the search term
        const filtered = productList.filter(
          (product) =>
            product.productName.toLowerCase().includes(term) ||
            product.productCategory.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
      };

  return (
    <>
    <div class="container-fluid pt-2">
    <div class="row">
        <Sidebar />
        
        <div className="col-md-9">
      <div className="card m-4 border-0 shadow statistics">
        <div className="card-body">
          <h3 className="mb-4">Product List</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or category"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Photo 1</th>
                <th scope="col">Photo 2</th>
                <th scope="col">Photo 3</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>
                    <img src={product.photo1} alt="Photo 1" className="img-thumbnail" />
                  </td>
                  <td>
                    <img src={product.photo2} alt="Photo 2" className="img-thumbnail" />
                  </td>
                  <td>
                    <img src={product.photo3} alt="Photo 3" className="img-thumbnail" />
                  </td>
                  <td>
                    {/* Add any action buttons or links for each item */}
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
</div>
</>
  );
};

export default ProductList;
