/** @format */

import { Outlet } from "react-router-dom";

export default function ProductsListLayout() {
  return (
    <div className='careers-layout'>
      <h2>Products:</h2>

      <Outlet />
    </div>
  )
}
