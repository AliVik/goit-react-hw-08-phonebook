import {GreetingHeading,GreetingWords,HomePageSection,Image} from './StyledHomePage';
import { HomePageImageWrapper,HomePageWordsWrapper } from './StyledHomePage';
import HomePageImage from '../../images/homepage.jpg'

export default function HomePage(){
    return(
        <HomePageSection>
        <HomePageWordsWrapper>
          <GreetingHeading>
            <GreetingWords>Welcome to </GreetingWords>
            <GreetingWords>The Web Phonebook App!</GreetingWords> 
          </GreetingHeading>
        </HomePageWordsWrapper>
        <HomePageImageWrapper>
        <Image src={HomePageImage}/>
        </HomePageImageWrapper>
         
        
      </HomePageSection>
    )
}