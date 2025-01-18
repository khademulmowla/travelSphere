import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Community from "../pages/Community/Community";
import AboutUs from "../pages/AboutUs/AboutUs";
import Trips from "../pages/Trips/Trips";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Profile from "../pages/Dashboard/Common/Profile";
import AddStories from "../pages/Dashboard/Common/AddStories";
import ManageStories from "../pages/Dashboard/Common/ManageStories";
import JoinGuide from "../pages/Dashboard/Tourist/JoinGuide";
import MyBookings from "../pages/Dashboard/Tourist/MyBookings";
import MyAssignedTours from "../pages/Dashboard/TourGuide/MyAssignedTours";
import AddPackage from "../pages/Dashboard/Admin/AddPackage";
import ManageCandidates from "../pages/Dashboard/Admin/ManageCandidates";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/community",
                element: <Community></Community>
            },
            {
                path: "/trips",
                element: <Trips></Trips>

            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            }

        ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [{
            index: true,
            element: <Profile></Profile>
        },
        {
            path: '/add-story',
            element: <AddStories></AddStories>
        },
        {
            path: '/manage-story',
            element: <ManageStories></ManageStories>
        },
        {
            path: '/join-guide',
            element: <JoinGuide></JoinGuide>
        },
        {
            path: '/my-bookings',
            element: <MyBookings></MyBookings>
        },
        {
            path: '/myassigntour',
            element: <MyAssignedTours></MyAssignedTours>
        },
        {
            path: '/add-package',
            element: <AddPackage></AddPackage>
        },
        {
            path: '/manage-candidate',
            element: <ManageCandidates></ManageCandidates>
        },
        {
            path: '/manage-user',
            element: <ManageUsers></ManageUsers>
        }
        ]
    }

])