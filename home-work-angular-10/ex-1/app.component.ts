import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _bord: number[][];

  constructor() {
    this._createMultiplicationBord();
  }

  get bord(): number[][] {
    return this._bord;
  }

  set bord(bord: number[][]) {
    try {
      if (this._checkBord(bord)) {
        this._bord = bord;
      }
      else throw new Error('Not valid bord.')
    } catch (e) {
      console.error(e);
    }

  }

  private _checkBord(bord): boolean {
    var isValid = false;
    if (bord && bord.length === 11) {
      for (let row of bord) {
        if (row && row.length === 11) {
          isValid = true;
        }
      }
    }
    return isValid;
  }


  private _createMultiplicationBord(): void {

    let bord: number[][] = new Array<number[]>();

    for (let row: number = 0; row <= 10; row++) {
      bord[row] = new Array<number>();
      for (let col: number = 0; col <= 10; col++) {
        bord[row].push(row * col);
      }
    }
    this.bord = bord;
  }

}