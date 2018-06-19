import React from 'react';
import PropTypes from "prop-types";

const ProductForm = ({
  handleInputChange,
  formState,
  formTitle,
  handleSubmit,
  actionText
}) => {
  return (
    <div>
      <div>
        <header>
          <div className="wrapper">
            <h1>{formTitle}</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Product title"
                onChange={handleInputChange}
                value={formState.title}
              />
              <br />
              <label>Image URL</label>
              <br />
              <input
                type="text"
                name="imageUrl"
                value={formState.imageUrl}
                onChange={handleInputChange}
                placeholder="Image..."
              />
              <br />
              <label>Description</label>
              <br />
              <input
                type="text"
                name="description"
                placeholder="Product description"
                onChange={handleInputChange}
                value={formState.description}
              />
              <br />
              <label>Price</label>
              <br />
              <input
                type="text"
                name="price"
                placeholder="Product price"
                onChange={handleInputChange}
                value={formState.price}
              />
              <button type="submit">{actionText}</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};


export default ProductForm;