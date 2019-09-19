import {Directive, ElementRef, Injector, OnInit} from '@angular/core';
import {MinFontSizePipe} from './min-font-size.pipe';
import {MinLetterSpacingPipe} from './min-letter-spacing';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective implements OnInit {
  pipeSize: any;
  pipeLetter: any;

  constructor(private element: ElementRef,
              private injector: Injector) {
  }

  ngOnInit(): void {
    this.pipeSize = this.injector.get(MinFontSizePipe);
    this.pipeLetter = this.injector.get(MinLetterSpacingPipe);
    this.element.nativeElement.style.fontSize = this.pipeSize.transform(this.element.nativeElement.text);
    this.element.nativeElement.style.letterSpacing = this.pipeLetter.transform(this.element.nativeElement.text);
  }
}
