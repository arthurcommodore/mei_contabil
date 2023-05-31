// File Routes imports

export const innerRoutes = [
    {
        path: '/dashboard',
        name: 'Home',
        icon: '/images/sidebar/home.png',
        element: <></>,
    },
    {
        name: "Files",
        icon: '/images/sidebar/file.png',
        childrens: [

            {
                path: '/companies',
                name: 'Companies',

                element: <></>,
            },
            {
                name: 'Reports',
            },
        ]
    },

    {
        path: '/calendar',
        name: 'Calendar',
        icon: '/images/sidebar/calendar.png',
        element: <></>,
    },

    {
        path: '/accounts',
        name: 'Accounts',
        icon: '/images/sidebar/home.png',
        childrens: [
            {
                path: '/settings',
                name: 'Settings',
                element: <></>,
            },

            {
                name: 'Logout',
            },
        ]
    },

];