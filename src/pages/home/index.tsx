import SectionCollab from './SectionCollab';
import SectionEvent from './SectionEvent';
import SectionHeroV2 from './SectionHeroV2';
import SectionHeroV1 from './SectionHeroV1';
import SectionService from './SectionService';

const HomePage: React.FC = () => {
  return (
    <>
      {/* <SectionHeroV1 /> */}
      <SectionHeroV2 />
      <SectionEvent />
      <SectionService />
      <SectionCollab />
    </>
  );
};

export default HomePage;
