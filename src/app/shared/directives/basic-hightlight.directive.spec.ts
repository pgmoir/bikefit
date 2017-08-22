import { ElementRef } from '@angular/core';
import { BasicHighlightDirective } from './basic-hightlight.directive';

describe('BasicHighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new BasicHighlightDirective(null);
    expect(directive).toBeTruthy();
  });
});
