#include <stdio.h>
#include <emscripten.h>

double EMSCRIPTEN_KEEPALIVE add(double a, double b)
{
    return a+b;
}

int main() {
printf("Hello Wordl!\n");
return 0;
}