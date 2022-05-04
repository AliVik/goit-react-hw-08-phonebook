import {Wrapper} from './StyledLayout';
import {GreetingHeading} from './StyledHomePage';

export default function HomePage(){
    return(
        <section>
        <Wrapper>
          <GreetingHeading>Welcome to The Web Phonebook App!</GreetingHeading>
        </Wrapper>
      </section>
    )
}