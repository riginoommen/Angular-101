import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  constructor() { }
 @HostListener('click',['$event'])

 confirm(event: Event){
   return window.confirm('Do you want to perform Operation');
 }
}
