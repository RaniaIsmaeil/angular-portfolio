import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObserveInViewDirective } from "../../observe-in-view.directive";
import { MatIconModule } from "@angular/material/icon";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  repo?: string;
};

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, MatIconModule, ObserveInViewDirective],
  templateUrl: "./projects.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(12px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("600ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
})
export class ProjectsComponent {
  projectsIn = false;

  projects: Project[] = [
    {
      title: "Movies Hub (React)",
      description:
        "Search and browse movies with TMDB API, mobile‑first UI, live search, and caching.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://movies-hub-plum.vercel.app/",
      repo: "https://github.com/RaniaIsmaeil/movies-hub",
      image: "assets/images/movies-hub.png",
    },
    {
      title: "Roast & Bloom (Vue)",
      description:
        "Storefront prototype with Vue 3 + Pinia, product filters, and cart basics.",
      tech: ["Vue 3", "Pinia", "Vite"],
      link: "https://artisan-coffee-vue.vercel.app/",
      repo: "https://github.com/RaniaIsmaeil/artisan-coffee-vue",
      image: "assets/images/vue-coffee.png",
    },
    {
      title: "Portfolio (Angular)",
      description:
        "This portfolio was built using Angular standalone components and Tailwind, with animations and dark/light toggle.",
      tech: ["Angular", "Tailwind", "Standalone Components"],
      repo: "https://github.com/RaniaIsmaeil/angular-portfolio",
      image: "assets/images/angular-portfolio.png",
    },
  ];
}
