import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // Add CSS class when the element is clicked and remove it when clicked again
    // Class is the class property of the element (host) that uses this directive
    @HostBinding('class.open') isOpen = false;
    // listen for a click event
    @HostListener('click') toggleOpen() {
        // Toggle the property
        this.isOpen = !this.isOpen;
    }
}
