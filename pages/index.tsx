import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import InviteDetails from 'components/landingPage/inviteDetails';
import LandingComponent from 'components/landingPage/landingComponent';
import InitializingPanel from 'components/landingPage/initializingPanel';
import BirthdayGifts from 'components/birthdayGifts';

const Home: NextPage = () => {
  const [isInitialized, toggleIsInitialized] = useState<boolean>(false);
  const [detailsVisible, toggleDetailsVisible] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Birthday party invitation</title>
      </Head>
      {isInitialized ? (
        <>
          <LandingComponent detailsVisible={detailsVisible} toggleDetailsVisible={toggleDetailsVisible} />
          {
            detailsVisible ? <><InviteDetails />
            <BirthdayGifts /></> : null
          }
        </>
      ) : <InitializingPanel initializeCallback={toggleIsInitialized} />}
    </div>
  );
};

export default Home;
