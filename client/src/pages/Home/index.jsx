import {
  HeroContainer,
  FeaturedInContainer,
  PizzaOfMonthContainer,
  OurStoryContainer,
  NutritionContainer,
  CTAContainer,
} from '../../containers';
import { TextScroll } from '../../components';
import { MainLayout } from '../../Layouts';
export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <FeaturedInContainer />
      <OurStoryContainer />
      <NutritionContainer />
      <PizzaOfMonthContainer />
      <CTAContainer />
    </>
  );
}
