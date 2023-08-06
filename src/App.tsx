import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
