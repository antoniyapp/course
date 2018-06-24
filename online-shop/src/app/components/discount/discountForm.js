import React from 'react';

const DiscountForm = ({
  handleInputChange,
  discountName,
  handleSubmit
}) => {
  return (
    <div>
      <div>
        <header>
          <div className="wrapper">
            <h1>Discount</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="discountName"
                placeholder="Discount Name"
                onChange={handleInputChange}
                value={discountName}
              />
              <br />
              <button type="submit">+</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};


export default DiscountForm;