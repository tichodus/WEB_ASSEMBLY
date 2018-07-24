import { Injectable } from "@angular/core";
var Module = require('../c++/calculator.js');
@Injectable()

export class CalculatorWasm{
    private _add;
    constructor(){
        this._add = Module.cwrap('add','number',['number','number']);
    }

    public add(a:number, b:number):number{
        return this._add(a,b);
    }
}