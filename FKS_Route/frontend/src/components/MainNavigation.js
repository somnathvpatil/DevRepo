import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
     { console.log("token"+token)}
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          {token && (
          <li>
            <NavLink
              to="/userReg"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              User Reg
            </NavLink>
          </li>)}
          {token && (
          <li>
            <NavLink
              to="/userRegDetails"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              User Reg Details
            </NavLink>
          </li>
          )}
          {token && (
          <li>
            <NavLink
              to="/blogPost"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              New Blog Post
            </NavLink>
          </li>
          )}
          {token && (
          <li>
            <NavLink
              to="/blogRegPostDetails"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Blog Post Details
            </NavLink>
          </li>
          )}
          {token && (<li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              About
            </NavLink>
          </li>
          )}
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Sign-In
              </NavLink>
            </li>
          )}
         
        </ul>
      </nav>
    {token && (
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          
        )}
    </header>
  );
}

export default MainNavigation;
