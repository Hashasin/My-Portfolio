import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";


// const projectsDemo = [
//         {
//           //each projects in array is going to be a object
//           title: "Project 1",
//           description:
//             " This project is about the covid 19 tracker dcff fvbbv bnhddd hhddd nddd",
//         },
//         {
//           title: "Project 2",
//           description: " lccccccccccccccc",
//         },
//         {
//           title: "Project 3",
//           description: " lccccccccccccccccc",
//         },
//         {
//           title: "Project 4",
//           description: " lcccccccccccccccccc",
//         },
//         {
//           title: "Project 5",
//           description: " lcccccccccccccccccc",
//         },
//         {
//           title: "Project 6",
//           description: " lcccccccccccccccccc",
//         },
//         {
//           title: "Project 7",
//           description: " lcccccccccccccccccc",
//         },
//         {
//           title: "Project 8",
//           description: " lcccccccccccccccccc",
//         },
//       ];

const Projects = () => (
  <Section nopadding id="projects">
    {/* <SectionDivider /> */}
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
