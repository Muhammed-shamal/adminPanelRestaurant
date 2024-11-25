import React from 'react'
import './ListItems.css'

function ListItems() {
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <div className="list-table-format">
          <img src="" alt="" />
          <p>name</p>
          <p>category</p>
          <p>$price</p>
          <p className='cursor'>x</p>
        </div>
      </div>
    </div>
  )
}

export default ListItems