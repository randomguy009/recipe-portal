import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
}) 
export class BasicHighlightDirective {


    @Input() defaultColor: string;
    @Input() colorOnMouseOver: string;
    @HostBinding('style.backgroundColor') background: string;

    constructor(private elementRef: ElementRef, private elRef: Renderer2) {}

    ngOnInit() {
        //this.elementRef.nativeElement.style.background = 'yellow';
        // this.elRef.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') onmouseover(event: Event) {
        // this.elRef.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
        this.background = this.colorOnMouseOver;
    }

    @HostListener('mouseleave') onmouseleave(event: Event) {
        // this.elRef.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.background = this.defaultColor;
    }
} 