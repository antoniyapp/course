import React from 'react';

//import CartList from '../cart/';

const OrderListItem = ({ id, date, user, status, items, totalPrice }) => {

    return (

        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0 collapsed" data-toggle="collapse" data-target={"#" + id} aria-expanded="false" aria-controls="collapseOne">
                    <button className="btn btn-link" >
                        <div>
                            <span>Status: {status}</span>
                            <span>OrderId: {id}</span>
                        </div>
                        <div>
                            <span>From: {user.firstName + ' ' + user.lastName}</span>
                            <span>Phone: {user.phoneNumber}</span>
                        </div>
                        <span>Adress: {user.adress}</span>
                        <span>Total Price: {totalPrice}</span>

                    </button>
                </h5>
            </div>

            <div id={id} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    content
                </div>
            </div>
        </div>
    );
};

export default OrderListItem;