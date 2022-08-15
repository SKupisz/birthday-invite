import React, { useState, useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import {motion} from "framer-motion";

import { InitializingPanelContainer, InitializingPanelButton } from 'styled/landingComponent/initializingPanel';

interface InitializingPanelInterface {
    initializeCallback: (newState: boolean) => void
}

const InitializingPanel:React.FC<InitializingPanelInterface> = ({initializeCallback} : InitializingPanelInterface) => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if(isOpened) setTimeout(() => initializeCallback(true), 1400);
  }, [isOpened]);

  return (
    <InitializingPanelContainer className="block-center">
        <motion.div
        animate={{
            opacity: isOpened ? 0 : 1
        }}
        initial={false}
        transition={{
            duration: 0.8,
            delay: 0.6
        }}
        >
            <InitializingPanelButton type="button" onClick={() => toggleIsOpened(true)}>
                {!isOpened ? <EmailIcon style={{ color: 'inherit', fontSize: 'inherit' }} /> : <DraftsIcon style={{ color: 'inherit', fontSize: 'inherit' }} /> }
            </InitializingPanelButton>
        </motion.div>
    </InitializingPanelContainer>
  );
};

export default InitializingPanel;
