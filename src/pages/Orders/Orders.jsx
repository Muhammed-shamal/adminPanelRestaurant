import React from 'react'
import './Orders.css'

import {assets} from '../../assets/assets'

function Orders() {
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        <div className="order-item">
          <img src={assets.parcel_icon} alt="" />
          <div>
            <p className='order-item-food'>
              item name
            </p>
            <p>
              order address
            </p>
            <div className='order-item-address'>
              <p>street</p>
              <p>city</p>
            </div>
            <p className="order-item-phone">
              phone
            </p>
          </div>
          <p>orderitems length</p>
          <p>$amount</p>
          <select>
            <option value="Food Processing">Food Processing</option>
            <option value="Out For Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Orders