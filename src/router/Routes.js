import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/Main/MainLayout';
import Cricket from '../pages/Cricket/Cricket';
import CricketMatches from '../pages/Cricket/CricketMatches/CricketMatches';
import Football from '../pages/Football/Football';
import FootballMatches from '../pages/Football/FootballMatches/FootballMatches';
import FootballSchedules from '../pages/Football/FootballSchedules/FootballSchedules';
import Home from '../pages/Home/Home';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/cricket',
                    element: <Cricket />,
                    children: [
                        {
                            path: '/cricket/',
                            element: <CricketMatches />
                        }
                    ]
                },
                {
                    path: '/football',
                    element: <Football />,
                    children: [
                        {
                            path: '/football',
                            element: <FootballMatches />
                        },
                        {
                            path: '/football/schedules',
                            element: <FootballSchedules />
                        }
                    ]
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}

export default Routes;
