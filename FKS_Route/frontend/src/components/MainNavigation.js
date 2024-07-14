import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
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
          </li>
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
          <li>
            <NavLink
              to="/testPDF"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              TestPDF
            </NavLink>
          </li>
          

          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}

        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
