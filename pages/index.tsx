import type { NextPage } from 'next';
import InviteDetails from 'components/inviteDetails';
import LandingComponent from 'components/landingComponent';

const Home: NextPage = () => (
  <div>
    <LandingComponent />
    <InviteDetails />
  </div>
);

export default Home;
