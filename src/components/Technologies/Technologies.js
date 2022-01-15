import React from 'react';
import { DiApple, DiFirebase, DiMysql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiMaterialui } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FiFigma } from "react-icons/fi";


const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with range of technologies in the web development world from
      Front-End to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with React.js and Bootstrap</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with tools like Figma</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with Firebase and Node</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPowerbi size="3rem" />
        <ListContainer>
          <ListTitle>Data Analysis</ListTitle>
          <ListParagraph>Experience with MS Excel and Power BI</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMaterialui size="3rem" />
        <ListContainer>
          <ListTitle>CSS Framework</ListTitle>
          <ListParagraph>Experience with Material UI and Bulma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
