import {
  HeroContainer,
  FeaturedInContainer,
  PizzaOfMonthContainer,
  OurStoryContainer,
  NutritionContainer,
  NaturalContainer,
  CTAContainer,
  StoryContainer,
} from '../../containers';
import { TextScroll } from '../../components';
import { MainLayout } from '../../Layouts';
export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <StoryContainer />
      <NutritionContainer />

      <FeaturedInContainer />
      <CTAContainer />
    </>
  );
}
