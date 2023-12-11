import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handlePhoto1Change = (e) => {
    // Handle file upload for photo1
    const file = e.target.files[0];
    setPhoto1(file);
  };

  const handlePhoto2Change = (e) => {
    // Handle file upload for photo2
    const file = e.target.files[0];
    setPhoto2(file);
  };

  const handlePhoto3Change = (e) => {
    // Handle file upload for photo3
    const file = e.target.files[0];
    setPhoto3(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or API call here
    // Include the form data: productName, productCategory, photo1, photo2, photo3
    // You can use FormData to send files along with other form data

    // Example using FormData:
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productCategory', productCategory);
    formData.append('photo1', photo1);
    formData.append('photo2', photo2);
    formData.append('photo3', photo3);

    // Send formData to your API endpoint or perform further actions
    // fetch('/api/addProduct', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="col-md-9 statistics">
      <div className="card m-4 border-0 shadow">
        <div className="card-body">
          <h3 className="mb-4">Add Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={handleProductNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <select
                className="form-select"
                id="productCategory"
                value={productCategory}
                onChange={handleProductCategoryChange}
                required
              >
                <option value="" disabled>Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="photo1" className="form-label">Photo 1</label>
              <input
                type="file"
                className="form-control"
                id="photo1"
                accept="image/*"
                onChange={handlePhoto1Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo2" className="form-label">Photo 2</label>
              <input
                type="file"
                className="form-control"
                id="photo2"
                accept="image/*"
                onChange={handlePhoto2Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo3" className="form-label">Photo 3</label>
              <input
                type="file"
                className="form-control"
                id="photo3"
                accept="image/*"
                onChange={handlePhoto3Change}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
