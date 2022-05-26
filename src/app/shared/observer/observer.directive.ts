import {Directive, ElementRef, EventEmitter, OnInit, Output} from "@angular/core";

@Directive({
    selector: '[appObserver]'
})
export class ObserverDirective implements OnInit {
    @Output() onLeaveEnd: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private element: ElementRef
    ) {}

    ngOnInit() {
        const observer = new window.IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) {return;}
          this.onLeaveEnd.emit();
        }, {
            rootMargin: '0px',
            threshold: 1,
        });
        observer.observe(this.element.nativeElement)
    }
}
