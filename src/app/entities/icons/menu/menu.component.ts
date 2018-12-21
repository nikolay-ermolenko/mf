import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './menu.component.html'
})
export class IconMenuComponent {
  @Input()
  public type: string = '';
  @Input()
  public fill: string = '#FFF';
  @Input()
  public opacity: number = 1;
  @Input()
  public stroke: string = '#FFF';
  @Input()
  public width: string = '52px'
  @Input()
  public height: string = '52px'
}
