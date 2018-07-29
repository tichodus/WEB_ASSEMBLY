#include <stdio.h>
#include <iostream>
#include <emscripten/emscripten.h>
using namespace std;

extern "C"
{
    int EMSCRIPTEN_KEEPALIVE add(int a, int b)
    {
        return a + b;
    }

    int EMSCRIPTEN_KEEPALIVE sub(int a, int b)
    {
        return a - b;
    }

    int EMSCRIPTEN_KEEPALIVE mul(int a, int b)
    {
        return a * b;
    }

    int EMSCRIPTEN_KEEPALIVE divide(int a, int b)
    {
        return a / b;
    }

    int main(int argc, char *argv[])
    {
        printf("WebAssembly module loaded...\n");
        return 0;
    }
}