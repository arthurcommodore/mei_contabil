// Routes file to be used for unauthenicated outer pages

import Signup from "../views/outerViews/signup";

const outerRoutes = [

    {
        path: "/forgetpassword",
        element: <></>,
    },

    {
        path: "/signup",
        element: <Signup></Signup>
    },

    {
        path: "/verifyEmail",
        element: <></>
    },

    {
        path: "/expiredEmail",
        element: <></>
    },

    {
        path: "/changePassword/:token",
        element: <></>
    },

];

export default outerRoutes;
