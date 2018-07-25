#include <stdio.h>
#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE add(int a, int b){
    return a+b;
}

int main(int argc, char* argv[]){
    printf("WebAssembly module loaded...\n");
    return 0;
}