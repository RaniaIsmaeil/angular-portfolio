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
      date: "2022 – 2025",
      title: "Software Engineer",
      subtitle: "Inmind.ai, Beirut",
      type: "work",
      details: [
        "Built Angular/Vue apps with improved performance (+25%)",
        "Implemented unit tests, increasing coverage by 40%",
        "Collaborated across teams using Agile/Scrum",
        "Earned AWS Cloud Practitioner certification",
      ],
    },
    {
      date: "2022 – 2023",
      title: "Frontend Developer Intern",
      subtitle: "Spexal Robotics, Beirut",
      type: "work",
      details: [
        "Built React apps from Figma designs",
        "Improved UI for robotics by 20% in task efficiency",
        "Managed sprints using ClickUp",
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
        "Built 10+ full stack projects (React, Laravel)",
        "Used Node, SQL, Git, Linux, WordPress",
        "Applied Agile sprints using Trello",
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
