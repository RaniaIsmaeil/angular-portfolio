import { Component, HostBinding } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";
import { MatIconModule } from "@angular/material/icon";
import { ObserveInViewDirective } from "./observe-in-view.directive";
import { HeaderComponent } from "./sections/header/header.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { SkillsComponent } from "./sections/skills/skills.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ObserveInViewDirective,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(12px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("600ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  @HostBinding("class") host = "block";
  heroIn = false;
  projectsIn = false;
  skillsIn = false;
  expIn = false;
  contactIn = false;
  dark = false;
  year = new Date().getFullYear();

  constructor() {
    const saved = localStorage.getItem("theme");
    this.dark = saved
      ? saved === "dark"
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.applyTheme();
  }

  toggleTheme() {
    this.dark = !this.dark;
    localStorage.setItem("theme", this.dark ? "dark" : "light");
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement.classList;
    if (this.dark) root.add("dark");
    else root.remove("dark");
  }
}
