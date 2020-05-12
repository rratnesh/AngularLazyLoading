import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event'])
  onInputChange($event) {
    let inputElement = <HTMLInputElement>$event.target;
    let trimmedValue = inputElement.value.replace(/\s+/g, '');

    if (trimmedValue.length > 16) {
      trimmedValue = trimmedValue.substr(0, 16);
    }

    let groupOfFourDigits = [];
    for (let i = 0; i < trimmedValue.length; i += 4) {
      groupOfFourDigits.push(trimmedValue.substr(i, 4));
    }

    inputElement.value = groupOfFourDigits.join(' ');

    this.border = '';
    if (/[^\d]/.test(trimmedValue)) {
      this.border = '3px solid red';
    }
  }
}