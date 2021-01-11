cmake_minimum_required(VERSION 3.12)
project(hello)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -sMODULARIZE=1 -sEXPORT_ES6=1 -s NO_FILESYSTEM=1")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --bind")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s FULL_ES3=1 -s USE_GLFW=3")

set(CMAKE_CXX_STANDARD 17)

add_executable(wasmwebgl wasm-webgl.cpp)
