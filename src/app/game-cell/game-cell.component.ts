import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent {
  @Input() value: 'X' | 'O' | '' | undefined;
  @Input() disabled: boolean | undefined;
  @Output() cellClicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.cellClicked.emit();
    }
  }
}
