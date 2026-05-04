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
      state("out", style({ opacity: 0, transform: "translateY(12px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("600ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
})
export class ExperienceComponent {
  expIn = false;

  timeline = [
    {
      date: "Nov 2025 – Present",
      title: "Frontend Developer (Power Pages / Dataverse)",
      subtitle: "Entelligence, Beirut",
      type: "work",
      details: [
        "Building enterprise web portals using Microsoft Power Pages and Dataverse",
        "Developing dynamic UI components with JavaScript, Liquid, and Azure Blob Storage",
        "Working on React.js UI modules within the company's internal CRM-like platform",
        "Translating Figma designs into responsive, pixel-perfect UI",
      ],
    },
    {
      date: "Sep 2022 – Aug 2025",
      title: "Software Engineer",
      subtitle: "Inmind.ai, Beirut",
      type: "work",
      details: [
        "Developed scalable web apps using Angular, Vue, TypeScript, Tailwind, PrimeNg",
        "Implemented automated unit and component testing in Vue.js",
        "Collaborated with backend & UI/UX teams in Agile/Scrum (Azure DevOps)",
      ],
    },
    {
      date: "Jan 2022 – Sep 2022",
      title: "Frontend Web Developer & UI/UX Designer Intern",
      subtitle: "Spexal Robotics, Beirut",
      type: "work",
      details: [
        "Built responsive web apps with React.js + Figma/Adobe XD designs",
        "Designed and optimized user interfaces for logistics robotics",
        "Managed sprints using ClickUp under Scrum methodology",
      ],
    },
    {
      date: "2018 – 2022",
      title: "Bachelor of Science – Business Computer",
      subtitle: "Lebanese University, Beirut",
      type: "edu",
      details: [],
    },
    {
      date: "Apr – Dec 2021",
      title: "Full Stack Web Bootcamp",
      subtitle: "Codi_Tech, Beirut",
      type: "edu",
      details: [
        "Built 10+ full stack projects (React, Laravel, Node.js)",
        "Gained hands-on experience with SQL, Linux, and Git",
        "Applied Scrum methodology, managing sprints in Trello",
      ],
    },
    {
      date: "2023",
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      type: "cert",
      details: ["Cloud fundamentals & deployment knowledge"],
    },
  ];
}
