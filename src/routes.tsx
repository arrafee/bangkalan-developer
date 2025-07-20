import Layout from '@layouts/Layout';
import AboutPage from '@pages/about';
import AdminDashboard from '@pages/admin/dashboard';
import LayoutAdmin from '@pages/admin/layouts/LayoutAdmin';
import CareerPage from '@pages/career';
import DetailCareerPage from '@pages/career/detail';
import EventPage from '@pages/event';
import DetailEventPage from '@pages/event/detail';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import ServicePage from '@pages/service';
import { RouteObject } from 'react-router-dom';

export default [
  // Home
  {
    path: '/',
    element: <Layout component={<HomePage />} />,
  },
  {
    path: '/services',
    element: <Layout component={<ServicePage />} />,
  },
  {
    path: '/about',
    element: <Layout component={<AboutPage />} />,
  },
  {
    path: '/career',

    children: [
      { index: true, element: <Layout component={<CareerPage />} /> },
      {
        path: ':id',
        element: <Layout component={<DetailCareerPage />} />,
      },
    ],
  },
  {
    path: '/event',

    children: [
      { index: true, element: <Layout component={<EventPage />} /> },
      {
        path: ':slug',
        element: <Layout component={<DetailEventPage />} />,
      },
    ],
  },
  {
    path: '/administrator/login',
    element: <Layout component={<LoginPage />} />,
  },
  {
    path: '/administrator/dashboard',
    element: <LayoutAdmin component={<AdminDashboard />} />,
  },
] as RouteObject[];
