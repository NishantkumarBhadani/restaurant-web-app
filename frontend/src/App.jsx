import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { Home, Menu, Contact, About, Services, BookTable,Cart, SignUpForm, LoginForm, ViewBooking, Orders, Help } from "./Components";
import { Provider } from "react-redux";
import {store} from "./StateManagement/Cart_Management/app/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Menu",
          element: (
              <Menu />
          ),
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Services",
          element: <Services />,
        },
        {
          path: "BookTable",
          element: <BookTable />,
        },
        {
          path: "SignUp",
          element: <SignUpForm />,
        },
        {
          path:"Login",
          element:<LoginForm/>
        },
        {
          path:"Cart",
          element:(
              <Cart/>
          )
        },
        {
          path:"BookedTable",
          element:<ViewBooking/>
        },
        {
          path:"orders",
          element:<Orders/>
        },
        {
          path:"help",
          element:<Help/>
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
