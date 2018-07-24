

export class App {
    constructor() {
        Module['onRuntimeInitialized'] = () => this.onInit();
        this.wasmFunc = {};
    }

    onInit() {
        this.initFuncs([{name:'add',returnType:'number',paramTypes:['number','number']}]);
        console.log(this.wasmFunc['add'](2,3));
    }

    _getWasmFunction(functionName, returnType, paramTypes = []) {
        return Module.cwrap(functionName, returnType, paramTypes);
    }

    initFuncs(funcs = []) {
        funcs.forEach(func => {
            this.wasmFunc[func.name] = this._getWasmFunction(func.name, func.returnType, func.paramTypes);
        })
    }
}

new App();