@echo off
echo ============================================
echo  Clean Install Script for Coffee Demo
echo ============================================
echo.

echo Removing node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo [OK] node_modules removed
) else (
    echo [!] node_modules not found
)

echo.
echo Removing package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo [OK] package-lock.json removed
) else (
    echo [!] package-lock.json not found
)

echo.
echo Installing fresh dependencies...
call npm install

echo.
echo ============================================
echo  Clean Install Complete!
echo ============================================
echo.
echo Next steps:
echo   1. Run 'npm run dev' to start development server
echo   2. Visit http://localhost:5173
echo.
pause
