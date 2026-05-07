import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ObserveInViewDirective } from "../../observe-in-view.directive";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, MatIconModule, ObserveInViewDirective],
  templateUrl: "./skills.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(40px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("700ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("staggerIn", [
      transition(":enter", [
        query(".skill-item", [
          style({ opacity: 0, transform: "translateY(16px) scale(0.95)" }),
          stagger("60ms", [
            animate("500ms cubic-bezier(.2,.8,.2,1)", style({ opacity: 1, transform: "translateY(0) scale(1)" }))
          ])
        ], { optional: true })
      ])
    ]),
  ],
})
export class SkillsComponent {
  skillsIn = false;

  categories = [
    {
      title: "Frontend Frameworks",
      icon: "code",
      skills: [
        { name: "Angular", color: "#DD0031" },
        { name: "React", color: "#61DAFB" },
        { name: "Vue.js", color: "#42B883" },
      ],
    },
    {
      title: "Languages",
      icon: "terminal",
      skills: [
        { name: "TypeScript", color: "#3178C6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
      ],
    },
    {
      title: "Styling & Design",
      icon: "palette",
      skills: [
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "PrimeNG", color: "#DD0031" },
        { name: "Material UI", color: "#A259FF" },
        { name: "Figma", color: "#A259FF" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "settings",
      skills: [
        { name: "Git / GitHub", color: "#F05032" },
        { name: "REST APIs", color: "#3B82F6" },
        { name: "Microsoft Power Pages", color: "#742774" },
        { name: "Agile / Scrum", color: "#10B981" },
        { name: "Dataverse", color: "#10B981" },
      ],
    },
  ];
}
