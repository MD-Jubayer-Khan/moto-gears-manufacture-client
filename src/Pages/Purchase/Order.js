import React from 'react';

const Order = ({order}) => {
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-success">Congratulations</h3>
                <p className="py-4">We have accept your order for {order.name}</p>
                <div className="modal-action">
                  <label for="order-modal" className="btn mx-auto">Ok</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Order;