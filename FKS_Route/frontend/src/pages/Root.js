import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';
import Footer from './Footer';
import Blog from './Blog';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <div className="container sectionone my-2">   

        <div className="row">
          <div className='col-xl-8 col-lg-8 '>
            <div className='box-wrapper'>
              {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
              <Outlet />
            </div>
            </div>
            <Blog/>           
        </div>
        </div>
        </main>
      <Footer/>
   </>
  );
}

export default RootLayout;
