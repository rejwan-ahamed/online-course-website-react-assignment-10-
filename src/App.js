import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Hero from "./Components/Hero/Hero";
import Main from "./Layout/Main";
import Register from "./Components/Register/Register";
import Courses from "./Components/Courses/Courses";
import Blog from "./Components/Blog/Blog";
import Faq from "./Components/Faq/Faq";
import Course from "./Components/Course/Course";
import { Toaster } from "react-hot-toast";
import CheckOut from "./Components/CheckOut/CheckOut";
import Buy from "./Components/Buy/Buy";
import NotFound from "./Components/NotFound/NotFound";
import Private from "./Routs/Private";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Hero></Hero> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: async () => {
            return await fetch("http://localhost:5002/course");
          },
        },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/faq", element: <Faq></Faq> },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: async ({ params }) => {
            return await fetch(`http://localhost:5002/course/${params.id}`);
          },
        },
        {
          path: "/checkOut/:id",
          element: (
            <Private>
              <CheckOut></CheckOut>
            </Private>
          ),
          loader: async ({ params }) => {
            return await fetch(`http://localhost:5002/course/${params.id}`);
          },
        },
        {
          path: "/buy",
          element: (
            <Private>
              <Buy></Buy>
            </Private>
          ),
        },
      ],
    },
    { path: "*", element: <NotFound></NotFound> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
