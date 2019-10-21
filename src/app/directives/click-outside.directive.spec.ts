import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    let elem: ElementRef;
    const directive = new ClickOutsideDirective(elem);
    expect(directive).toBeTruthy();
  });
});
