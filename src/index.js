import wasm from './lib/calculator.c'

wasm.initialize().then(module => {
  const result = module._add(1, 3)
  console.log('result: ', result);
})
