import { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Contact, Home, Layout, Login, ProductById, Products, Registration, WishList } from "./routes/routes"

function App() {
 
  const router = createBrowserRouter(
    [
      {
        path:"/login",
        element:
        (
          <Suspense fallback={<div>Loading...</div>}>
            <Login/>
          </Suspense>
        )
      },
      {
        path:"/registration",
        element:
        (
          <Suspense fallback={<div>Loading...</div>}>
            <Registration/>
          </Suspense>
        )
      },
      {
        path:"/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Layout/>
          </Suspense>
        ),
        children:
        [
          {
            index: true,
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <Home/>
              </Suspense>
            )
          },
          {
            path:"about",
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <About/>
              </Suspense>
            )
          },
          {
            path:"contact",
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <Contact/>
              </Suspense>
            )
          },
          {
            path:"products",
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <Products/>
              </Suspense>
            )
          },
          {
            path:"productById",
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <ProductById/>
              </Suspense>
            )
          },
          {
            path:"wishList",
            element:
            (
              <Suspense fallback={<div>Loading...</div>}>
                <WishList/>
              </Suspense>
            )
          }
        ]
      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App
