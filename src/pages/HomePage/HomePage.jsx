import { GreetingHeading, HomePageSection, Image } from './StyledHomePage';
import { HomePageImageWrapper, HomePageWordsWrapper } from './StyledHomePage';
import HomePageImage from '../../images/homepage.jpg';

export default function HomePage() {
  return (
    <HomePageSection>
      <HomePageWordsWrapper>
        <GreetingHeading>Welcome to The Web Phonebook App!</GreetingHeading>
      </HomePageWordsWrapper>
      <HomePageImageWrapper>
        <Image src={HomePageImage} />
      </HomePageImageWrapper>
    </HomePageSection>
  );
}
