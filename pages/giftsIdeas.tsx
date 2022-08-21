import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import BirthdayGifts from 'components/birthdayGifts';

const GiftsIdeas:NextPage = () => (
  <>
    <Head>
      <title>
        Birthday gifts Ideas
      </title>
    </Head>
    <BirthdayGifts />
  </>
);

export default GiftsIdeas;
