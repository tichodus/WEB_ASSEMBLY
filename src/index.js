import wasm from './lib/calculator.cpp'

wasm.initialize().then(module => {
console.log(module._mul(module._add(3,5),module._add(3,5)));
})
