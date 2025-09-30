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
    { name: "React", level: 95, color: "#3B82F6" }, // blue-500
    { name: "Angular", level: 90, color: "#D32F2F" }, // red-700
    { name: "Vue.js", level: 88, color: "#42B883" }, // vue green

    { name: "TypeScript", level: 90, color: "#1976D2" },
    { name: "JavaScript (ES6+)", level: 95, color: "#F59E0B" },

    { name: "Linux Server Management", level: 85, color: "#4B5563" },
    { name: "Git / GitHub", level: 90, color: "#A855F7" },
    { name: "REST APIs", level: 85, color: "#EC4899" },
    { name: "Agile / Scrum / ClickUp / Trello", level: 88, color: "#10B981" },
  ];
}
