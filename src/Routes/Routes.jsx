import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Friends from "../Components/Friends/Friends";
import Error from "../Pages/Error/Error";
import FriendDetails from "../Components/Friend/FriendDetails";
import Timeline from "../Components/Timeline/Timeline";
import Stats from "../Components/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch("data.json");
          if (!response.ok) throw new Error("Failed to load friends data");
          return response.json();
        },
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/data.json");
          const data = await response.json();
          const friend = data.find((f) => f.id === parseInt(params.id));
          if (!friend) throw new Error("Friend not found");
          return friend;
        },
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
        loader: () => JSON.parse(localStorage.getItem("timeline")) || [],
      },
    ],
    errorElement: <Error></Error>,
  },
]);
