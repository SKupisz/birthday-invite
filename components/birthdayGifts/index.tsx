import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  BirthdayGiftsContainer, BirthdayGiftsHeader,
  BirthdayGiftsModeContainer, BirthdayGiftsModeChooser,
  BirthdayGiftsGiftContainer,
} from 'styled/birthdayGifts';
import { InviteDetailsContainerContent } from 'styled/inviteDetails';

import GiftsBackground from 'assets/giftsBackground.webp';

import GiftsList from 'data/gitfs';

const BirthdayGifts:NextPage = () => {
  const [modeChosen, setModeChosen] = useState<number>(0); // 0 - nothing yet, 1 - one person, 2 - more people

  return (
    <BirthdayGiftsContainer className="block-center">
      <Image layout="fill" alt="background" src={GiftsBackground} objectFit="cover" />
      <InviteDetailsContainerContent className="block-center">
        <BirthdayGiftsHeader className="block-center">
          Ideas for gifts
        </BirthdayGiftsHeader>
        <motion.div
          animate={{
            x: modeChosen === 0 ? [0, 0] : ['0%', '-100%'],
            scale: modeChosen === 0 ? [1, 1] : [1, 0],
            maxHeight: modeChosen === 0 ? ['auto', 'auto'] : ['0vh', '0vh'],
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            repeat: 0,
          }}
        >
          <BirthdayGiftsModeContainer>
            <BirthdayGiftsModeChooser onClick={() => setModeChosen(1)}>
              One person buying
            </BirthdayGiftsModeChooser>
            <BirthdayGiftsModeChooser onClick={() => setModeChosen(2)}>
              More people buying
            </BirthdayGiftsModeChooser>
          </BirthdayGiftsModeContainer>
        </motion.div>
        <motion.div
          animate={{
            x: modeChosen === 0 ? ['100%', '100%'] : ['100%', '0%'],
          }}
          transition={{
            duration: 0.4,
            delay: 1,
            repeat: 0,
          }}
        >
          <BirthdayGiftsModeContainer>
            {
              modeChosen !== 0 ? GiftsList.map((elem) => ((modeChosen === 1 && elem.category !== 'multi')
              || (modeChosen === 2 && elem.category !== 'single')
                ? elem.link !== '' ? (
                  <Link href={elem.link} target="_blank">
                    <BirthdayGiftsGiftContainer className="block-center" isLink>
                      {elem.nameOfAGift}
                    </BirthdayGiftsGiftContainer>
                  </Link>
                ) : (
                  <BirthdayGiftsGiftContainer className="block-center" isLink={false}>
                    {elem.nameOfAGift}
                  </BirthdayGiftsGiftContainer>
                ) : null)) : null
            }

          </BirthdayGiftsModeContainer>
        </motion.div>
      </InviteDetailsContainerContent>
    </BirthdayGiftsContainer>
  );
};

export default BirthdayGifts;
