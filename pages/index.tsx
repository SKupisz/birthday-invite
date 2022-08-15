import type { NextPage } from 'next';
import React, { useState } from 'react';
import InviteDetails from 'components/landingPage/inviteDetails';
import LandingComponent from 'components/landingPage/landingComponent';
import InitializingPanel from 'components/landingPage/initializingPanel';

const Home: NextPage = () => {
  const [isInitialized, toggleIsInitialized] = useState<boolean>(false);
  const [detailsVisible, toggleDetailsVisible] = useState<boolean>(false);

  return (
    <div>
      {isInitialized ? (
        <>
          <LandingComponent toggleDetailsVisible={toggleDetailsVisible}/>
          {
            detailsVisible ? <InviteDetails /> : null
          }
        </>
      ) : <InitializingPanel initializeCallback={toggleIsInitialized}/>}
    </div>
  );
};

export default Home;
