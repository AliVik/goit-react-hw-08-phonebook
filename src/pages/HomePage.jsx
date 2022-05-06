import {Wrapper} from './StyledLayout';
import {GreetingHeading,GreetingWords,HomePageSection,Image} from './StyledHomePage';
import HomePageImage from '../images/homepage.jpg'

export default function HomePage(){
    return(
        <HomePageSection>
        <Wrapper>
          <GreetingHeading>
            <GreetingWords>Welcome to </GreetingWords>
            <GreetingWords>The Web Phonebook App!</GreetingWords> 
          </GreetingHeading>
        </Wrapper>
        <Wrapper>
        <Image src={HomePageImage}/>
        </Wrapper>
         
        
      </HomePageSection>
    )
}