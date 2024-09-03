import { ReactNode } from "react";

export interface WorkingExperienceData {
  handle: string;
  employer: string;
  employerLink: string;
  position: string;
  details: ReactNode;
  duration: string;
}

export const WorkingExperienceData: WorkingExperienceData[] = [
  {
    handle: "1",
    employer: "ticket i/O GmbH",
    employerLink: "https://www.ticket.io/",
    position: "Product Owner (Purchase Team)",
    details:
      "At ticket.io, I took on the role of Product Owner in the Purchase Team. I designed the new accounting service and brought it into development. I also took on daily tasks such as approving tickets, communicating and updating the other teams and general stakeholder management.",
    duration: "May 2024 - September 2024",
  },
  {
    handle: "2",
    employer: "Energieausweis48 GmbH",
    employerLink: "https://www.energieausweis48.de/",
    position: "Product Owner",
    details: "I earned my first spurs as a Product Owner at Energieausweis48. Using Product Discovery (Opportunity Solution Trees, A/B Testing, Double Diamond etc.), I designed a video service in which an on-site inspection can be carried out with a smartphone to record the data required for an energy performance certificate. I brought in a complete redesign of the public part of the website from concept to deploy to improve the SEO ranking and make it more user-friendly. Also with regard to WCAG2. The Lighthouse Score has improved from 53 to 98 as a result.",
    duration: "October 2022 - May 2024",
  },
  {
    handle: "3",
    employer: "Elara Digital GmbH",
    employerLink: "https://www.getelara.de/",
    position: "Frontend Developer",
    details: "At Elara, I worked on the React-based automated maintenance solution.  I translated the entire application from German into English using the i18n React Library. This was also the first time I worked productively with GraphQL.",
    duration: "June 2022 - October 2022",
  },
  {
    handle: "4",
    employer: "Main Method GmbH",
    employerLink: "https://www.mainmethod.de/",
    position: "Frontend Developer",
    details: "I have worked at Main Method, an agency, for the first time since my apprenticeship.  I worked for Daimer on the MASSP project (Mobile App Imprint Generator). Here we followed the Test Driven Development (TDD) approach to achieve a particularly high test coverage (85%).",
    duration: "January 2022 - June 2022",
  },
  {
    handle: "5",
    employer: "onvista media GmbH",
    employerLink: "https://www.onvista.de/",
    position: "Frontend Developer",
    details: `I first came into contact with Scrum and modern front-end methods at onvista. I worked in a large team on a stock exchange website.  I was responsible for the “IRON”. A legacy system based on Twig Template/PHP Symfony and Jenkins Deployment. I worked on the replacement of the old systems with the new “ONE” system based on React / Next.js with REST API and took over and optimized existing features. I worked on the new, self-developed CMS based on React and, for example, developed new content blocks and built the drag-drop mechanics so that internal users can easily build and edit new pages. I also wrote automated tests with Cypress.`,
    duration: "August 2019 - December 2021",
  },
  {
    handle: "6",
    employer: "denkfabrik groupcom GmbH",
    employerLink:
      "https://www.northdata.de/denkfabrik+groupcom+GmbH,+K%C3%B6ln/HRB+45130",
    position: "Apprenticeship as a Software Developer",
    details: "After a one-year internship, I was offered an apprenticeship as a software developer, which I accepted straight away. During my training, I learned the principles of programming, built and maintained websites with CMS (jQuery, PHP, Typo3) and also familiarized myself with the common graphics programs (Adobe Suite) because we were a full-service agency with a small number of employees. I graduated with a grade of 2.0 (good or B+).",
    duration: "August 2016 - August 2019",
  },
];
