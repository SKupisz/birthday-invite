import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import InviteDetails from 'components/landingPage/inviteDetails';

const PartyDetails:NextPage = () => (
  <>
    <Head>
      <title>Birthday party details</title>
    </Head>
    <InviteDetails />
  </>
);

export default PartyDetails;
