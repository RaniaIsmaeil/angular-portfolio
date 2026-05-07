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

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, MatIconModule, ObserveInViewDirective],
  templateUrl: "./contact.component.html",
  animations: [
    trigger("fadeUp", [
      state("out", style({ opacity: 0, transform: "translateY(40px)" })),
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("out => in", animate("700ms cubic-bezier(.2,.8,.2,1)")),
    ]),
    trigger("scaleIn", [
      state("out", style({ opacity: 0, transform: "scale(0.9)" })),
      state("in", style({ opacity: 1, transform: "scale(1)" })),
      transition("out => in", animate("600ms 200ms cubic-bezier(.2,.8,.2,1)")),
    ]),
  ],
})
export class ContactComponent {
  contactIn = false;
}
