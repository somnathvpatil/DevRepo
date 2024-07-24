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
        <div className="mx-3 my-1">   

        <div className="row">
          <Blog sec1='rT' sec2='rB'/> 
          <div className='col-xl-8 col-lg-8'  >
            <div className='box-wrapper'>
              {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
              <Outlet />
            </div>
            </div>
            <Blog sec1='lT' sec2='lB'/> 
        </div>
        </div>
        </main>
      <Footer/>
   </>
  );
}

export default RootLayout;
