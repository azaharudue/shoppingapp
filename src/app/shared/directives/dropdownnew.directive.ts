import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown1]'
})
export class DropdownnewDirective{
@HostBinding('class.open') isOpen = false;
@HostListener('document:click', ['$event']) toggleOpen(event: Event): void{
    this.isOpen = this.elmRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
constructor(private elmRef: ElementRef){}
}
