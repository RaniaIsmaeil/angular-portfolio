import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Input() dark = false;
  @Input() toggleTheme!: () => void;
}
