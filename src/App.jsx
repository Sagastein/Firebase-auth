import "./App.css";
import Home from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./hooks/Protected";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "home",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    { path: "/signin", id: "about", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
