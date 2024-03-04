import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  currentPlayer: 'X' | 'O' = 'X';
  board: Array<Array<'X' | 'O' | ''>> = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  winner: string | null = null;

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin()) {
        this.winner = this.currentPlayer;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWin(): boolean {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        return true;
      }
      if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
        return true;
      }
    }
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return true;
    }
    if (this.board[2][0] && this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2]) {
      return true;
    }
    return false;
  }

  reset(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
