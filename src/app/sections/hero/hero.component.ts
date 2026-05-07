import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObserveInViewDirective } from "../../observe-in-view.directive";
import {
  trigger,
  style,
  state,
  transition,
  animate,
  query,
  stagger,
  animateChild,
} from "@angular/animations";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, ObserveInViewDirective],
  templateUrl: "./hero.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0 })),
      state("in", style({ opacity: 1 })),
      transition("out => in", animate("800ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("slideInLeft", [
      state("out", style({ opacity: 0, transform: "translateX(-40px)" })),
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("out => in", animate("700ms 200ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("slideInRight", [
      state("out", style({ opacity: 0, transform: "translateX(40px) scale(0.95)" })),
      state("in", style({ opacity: 1, transform: "translateX(0) scale(1)" })),
      transition("out => in", animate("800ms 400ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("fadeInUp", [
      state("out", style({ opacity: 0, transform: "translateY(20px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("600ms 600ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
})
export class HeroComponent {
  heroIn = false;
}
