Module['onRuntimeInitialized'] = onRuntimeInitialized;


function onRuntimeInitialized() {
    var result = Module.ccall('add', 'number', ['number', 'number'],[5.4]);
    console.log(result);
}