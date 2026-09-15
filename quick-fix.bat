@echo off
REM Quick Fix Script for Coffee Demo
REM Run this to fix the vite error

echo ============================================
echo  🔧 FIXING COFFEE DEMO ERRORS
echo ============================================
echo.

echo Step 1: Checking Node.js version...
node --version
echo.

echo Step 2: Removing old node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo [OK] Removed node_modules
) else (
    echo [!] No node_modules found
)

echo.
echo Step 3: Removing package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo [OK] Removed package-lock.json
) else (
    echo [!] No package-lock.json found
)

echo.
echo Step 4: Clearing npm cache...
call npm cache clean --force
echo [OK] Cache cleared

echo.
echo Step 5: Installing dependencies...
echo Please wait... This may take a few minutes.
echo.
call npm install

echo.
echo ============================================
echo  ✅ INSTALLATION COMPLETE!
echo ============================================
echo.
echo Starting development server...
call npm run dev
echo.
pause
