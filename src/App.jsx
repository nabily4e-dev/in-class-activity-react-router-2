/** @format */

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './layouts/Root'
import ProductsListLayout from './layouts/ProductsListLayout'
import Home from './pages/Home'
import ProductsList, { productsLoader } from './pages/products/ProductsList'
import About from './pages/About'
import NoPageFound from './pages/NoPageError'
import ProductInfo, { productsInfoLoader } from './pages/products/ProductsInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='products'
        element={<ProductsListLayout />}
        loader={productsLoader}
      >
        <Route
          index
          element={<ProductsList />}
          loader={productsLoader}
        />
        <Route
          path=':id'
          element={<ProductInfo />}
          loader={productsInfoLoader}
        />
      </Route>
      <Route
        path='*'
        element={<NoPageFound />}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
