import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './util/auth';
import UserRegPage,{action as manipulateUserAction} from './pages/UserRegPage';
import JanmaK,{action as janmaKAction} from './pages/JanmaK';
import GooglePayPage from './pages/GooglePayPage';
import UserRegDetailsPage,{action as manipulateUserRegDetailsAction} from './pages/UserRegDetailsPage';
import {loader as userRegDetilsLoader} from './pages/UserRegDetailsPage';
import JanmaKDetailsPage,{loader as janmaKDetailsloader}   from './pages/JanmaKDetailsPage';
import NewBlogPostForm,{action as blogSubmitAction } from './pages/BlogPostForm';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'userReg',
        element: <UserRegPage />,
        action: manipulateUserAction,
      },
      {
        path: 'userRegDetails',
        element: <UserRegDetailsPage />,
        action: manipulateUserRegDetailsAction,
        loader: userRegDetilsLoader,
      },
      {
        path: 'janmak/:custId',
        element: <JanmaK />,
        action :janmaKAction
      },
      {
        path: 'janamKD/:custId',
        element: <JanmaKDetailsPage />,
        loader: janmaKDetailsloader,
      },
      {
        path: 'blogPost',
        element: <NewBlogPostForm />,
        action: blogSubmitAction,
      },

      {
        path: 'googlePay',
        element: <GooglePayPage />,
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
