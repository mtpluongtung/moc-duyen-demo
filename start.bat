@echo off
rem Chay web demo tai http://localhost:8080 (can cai Node.js)
cd /d "%~dp0"
npx.cmd -y http-server@14.1.1 -p 8080 -c-1 -o
