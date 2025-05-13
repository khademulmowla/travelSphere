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
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import EditStory from "../pages/EditStory/EditStory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import GuideRoute from "./GuideRoute";
import TourGuideProfile from "../pages/TourGuideProfile/TourGuideProfile";
import Statistics from "../pages/Dashboard/Common/Statistics";

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
                path: '/package/:id',
                element: <PackageDetails></PackageDetails>
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
            },
            {
                path: "/guideprofile/:id",
                element: <TourGuideProfile></TourGuideProfile>
            }

        ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashBoardLayout></DashBoardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: (
                    <PrivateRoute>
                        <Statistics />
                    </PrivateRoute>
                ),
            },
            {
                index: true,
                path: 'profile',
                element: (<PrivateRoute><Profile></Profile></PrivateRoute>),
            },
            {
                path: 'add-story',
                element: (<PrivateRoute><AddStories></AddStories></PrivateRoute>),
            },
            {
                path: 'manage-story',
                element: (<PrivateRoute><ManageStories></ManageStories></PrivateRoute>),
            },
            {
                path: 'edit-story/:id',
                element: (<PrivateRoute><EditStory></EditStory></PrivateRoute>),
            },
            {
                path: 'join-guide',
                element: (<PrivateRoute><JoinGuide></JoinGuide></PrivateRoute>),
            },
            {
                path: 'my-bookings',
                element: (<PrivateRoute><MyBookings></MyBookings></PrivateRoute>)
            },
            {
                path: 'myassigntour',
                element: (<PrivateRoute>
                    <GuideRoute>
                        <MyAssignedTours></MyAssignedTours>
                    </GuideRoute>
                </PrivateRoute>)
            },
            {
                path: 'add-package',
                element: (<PrivateRoute>
                    <AdminRoute>
                        <AddPackage></AddPackage>
                    </AdminRoute>
                </PrivateRoute>)
            },
            {
                path: 'manage-candidates',
                element: (<PrivateRoute>
                    <AdminRoute>
                        <ManageCandidates></ManageCandidates>
                    </AdminRoute>
                </PrivateRoute>)
            },
            {
                path: 'manage-users',
                element: (<PrivateRoute>
                    <AdminRoute>
                        <ManageUsers></ManageUsers>
                    </AdminRoute>
                </PrivateRoute>)
            }
        ]
    }

])