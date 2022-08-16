import React from 'react';
import Image from 'next/image';

import {
  InviteDetailsContainer, InviteDetailsContainerContent, InviteDetailsHeader,
  InviteDetailsWrapper, InviteDetailsPhotoContainer,
  InviteDetailsGap, InviteDetailsContent,
  InviteDetailsContentHeader,
  InviteDetailsContentAnswer,
} from 'styled/inviteDetails';

import Champagne from 'assets/champagne.jpg';
import InfoBackground from 'assets/infoBackground.jpg';

const InviteDetails:React.FC = () => (
  <InviteDetailsContainer className="block-center">
    <Image layout="fill" alt="background" src={InfoBackground} objectFit="cover" />
    <InviteDetailsContainerContent className="block-center">
      <InviteDetailsHeader className="block-center">
        Birthday party details
      </InviteDetailsHeader>
      <InviteDetailsWrapper className="block-center">
        <InviteDetailsPhotoContainer>
          <Image src={Champagne} alt="bottle of champagne" width="2000" height="2820" />
        </InviteDetailsPhotoContainer>
        <InviteDetailsGap />
        <InviteDetailsContent>
          <InviteDetailsContentHeader className="block-center">
            When?
          </InviteDetailsContentHeader>
          <InviteDetailsContentAnswer className="block-center">
            The 1st of October, 2022
          </InviteDetailsContentAnswer>
          <InviteDetailsContentHeader className="block-center">
            Where?
          </InviteDetailsContentHeader>
          <InviteDetailsContentAnswer className="block-center">
            {process.env.NEXT_PUBLIC_PARTY_LOCATION}
          </InviteDetailsContentAnswer>
          <InviteDetailsContentHeader className="block-center">
            What time?
          </InviteDetailsContentHeader>
          <InviteDetailsContentAnswer className="block-center">
            7PM
          </InviteDetailsContentAnswer>
        </InviteDetailsContent>
      </InviteDetailsWrapper>

    </InviteDetailsContainerContent>

  </InviteDetailsContainer>
);

export default InviteDetails;
