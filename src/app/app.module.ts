import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component'; // Importiere deine Komponente
import { GameCellComponent } from './game-cell/game-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
