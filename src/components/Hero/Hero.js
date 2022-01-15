import React from 'react';
//these are not specific style component........these components we want tot use our entire project
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        𝙉𝘼𝙁𝙄𝙎 𝘼𝙉𝙒𝘼𝙍
      </SectionTitle>
      <SectionText>
        A Front End Developer who loves UI
        effects, animation and dynamic user experience.
      </SectionText>
      {/* <Button onClick={() => (window.location = "https://")}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;