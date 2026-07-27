import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.css'
})
export class SectionHeadingComponent {
  @Input() eyebrow = 'Section';
  @Input() title = 'Title';
  @Input() description = '';
}
