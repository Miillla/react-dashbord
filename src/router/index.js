import Error from "../pages/Error";
import App from "../App";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <App>
        <h1>Hello world</h1>
      </App>
    ),
  },
  {
    path: "/about",
    element: (
      <App>
        <About />
      </App>
    ),
  },
  {
    path: "/posts",
    element: (
      <App>
        <Posts />
      </App>
    ),
  },
  {
    path: "/error",
    element: (
      <App>
        <Error />
      </App>
    ),
  },
  {
    path: "/posts/:id",
    element: (
      <App>
        <PostIdPage />
      </App>
    ),
  },
];
