import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";

@Directive({
  selector: "[observeInView]",
  standalone: true,
})
export class ObserveInViewDirective implements OnInit, OnDestroy {
  @Output() inView = new EventEmitter<boolean>();
  @Input() once = true;

  @Input() threshold: number | number[] = 0.01;

  @Input() rootMargin = "-72px 0px -12% 0px";

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const topSafe = 72; // header
    if (rect.top < vh - topSafe && rect.bottom > topSafe) {
      this.inView.emit(true);
      if (this.once) return; // already “in”; no need to observe
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.emit(true);
          if (this.once) this.observer?.unobserve(this.el.nativeElement);
        } else if (!this.once) {
          this.inView.emit(false);
        }
      },
      { threshold: this.threshold, rootMargin: this.rootMargin }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
