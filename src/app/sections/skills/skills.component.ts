import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObserveInViewDirective } from "../../observe-in-view.directive";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, ObserveInViewDirective],
  templateUrl: "./skills.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(12px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("600ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
})
export class SkillsComponent {
  skillsIn = false;

  skills = [
    { name: "Angular", level: 80, color: "#D32F2F" },
    { name: "React", level: 90, color: "#3B82F6" },
    { name: "Vue.js", level: 60, color: "#42B883" },

    { name: "TypeScript", level: 90, color: "#1976D2" },
    { name: "JavaScript (ES6+)", level: 95, color: "#F59E0B" },
    { name: "HTML / CSS", level: 95, color: "#E34F26" },

    { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
    { name: "PrimeNg", level: 80, color: "#DD0031" },
    { name: "Figma", level: 80, color: "#A259FF" },

    { name: "Git / GitHub", level: 90, color: "#A855F7" },
    { name: "REST APIs", level: 85, color: "#EC4899" },
    { name: "Power Pages / Dataverse", level: 50, color: "#742774" },
    { name: "Agile / Scrum", level: 88, color: "#10B981" },
  ];
}
