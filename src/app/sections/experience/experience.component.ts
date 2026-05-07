import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObserveInViewDirective } from "../../observe-in-view.directive";
import { MatIconModule } from "@angular/material/icon";
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, MatIconModule, ObserveInViewDirective],
  templateUrl: "./experience.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(40px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("700ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-20px)" }),
        animate("400ms cubic-bezier(.2,.8,.2,1)", style({ opacity: 1, transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  expIn = false;
  activeTab: "work" | "education" = "work";

  experience = [
    {
      date: "Nov 2025 – Present",
      title: "Frontend Developer (Power Pages / Dataverse)",
      company: "Entelligence, Beirut",
      details: [
        "Building enterprise web portals using Microsoft Power Pages and Dataverse",
        "Developing dynamic UI components with JavaScript, Liquid, and Azure Blob Storage",
        "Working on React.js UI modules within the company's internal CRM-like platform",
        "Translating Figma designs into responsive, pixel-perfect UI",
      ],
    },
    {
      date: "Oct 2025 – Present",
      title: "Software Developer (Freelance)",
      company: "Devancy, Beirut",
      details: [
        "Building a full-stack AI-powered education platform (SEEDS Hub) using Next.js, React, TypeScript, and MongoDB, featuring 70+ AI tools for educators",
        "Integrating LLM providers (OpenAI, Anthropic Claude) and implementing authentication, i18n, and role-based access control",
        "Developing interactive features including visual programming, rich text editing, data visualization, and Jupyter notebook integration",
        "Writing unit, integration, and smoke tests using Vitest and contributing to Docker-based CI/CD pipelines",
      ],
    },
    {
      date: "Sep 2022 – Aug 2025",
      title: "Software Engineer",
      company: "Inmind.ai, Beirut",
      details: [
        "Developed scalable web apps using Angular, Vue, TypeScript, Tailwind, PrimeNg",
        "Implemented automated unit and component testing in Vue.js",
        "Collaborated with backend & UI/UX teams in Agile/Scrum (Azure DevOps)",
      ],
    },
    {
      date: "Jan 2022 – Sep 2022",
      title: "Frontend Web Developer & UI/UX Designer Intern",
      company: "Spexal Robotics, Beirut",
      details: [
        "Built responsive web apps with React.js + Figma/Adobe XD designs",
        "Designed and optimized user interfaces for logistics robotics",
        "Managed sprints using ClickUp under Scrum methodology",
      ],
    },
  ];

  education = [
    {
      date: "2018 – 2022",
      title: "Bachelor's Degree – MIS: Science in Business Computer",
      institution: "Lebanese University, Beirut",
      details: [],
    },
    {
      date: "Apr – Dec 2021",
      title: "Full Stack Web Development Bootcamp",
      institution: "Codi Tech, Beirut",
      details: [
        "Built 10+ full stack projects (React, Laravel, Node.js)",
        "Gained hands-on experience with SQL, Linux, and Git",
        "Applied Scrum methodology, managing sprints in Trello",
      ],
    },
    {
      date: "2023",
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services",
      details: ["Cloud fundamentals & deployment knowledge"],
    },
  ];
}
