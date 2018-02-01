import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: number, symbol: string, side: string): any {
    switch (symbol) {
      case 'cm':
        return this._applySide(value.toString(), symbol, side);
      case '$':
        return this._applySide(value.toFixed(2), symbol, side);
    }
  }

  private _applySide(value: string, symbol: string, side: string): string {
    if ('left'.indexOf(side) > -1) {
      return `${symbol} ${value}`;
    } else {
      return `${value} ${symbol}`;
    }
  }

}
