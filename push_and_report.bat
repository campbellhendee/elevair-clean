@echo off
setlocal
rem Auto-detect git.exe from a list of common locations or use `where git` as a fallback.
set "PROJECT_DIR=%USERPROFILE%\Downloads\elevair-nextjs"
set "OUT=%USERPROFILE%\Desktop\push-output.txt"

rem We discovered git at C:\Program Files\Git\cmd\git.exe — hard-code it for reliability
set "GIT_EXE=C:\Program Files\Git\cmd\git.exe"
echo Using GIT_EXE=%GIT_EXE% > "%OUT%"
echo Project dir: %PROJECT_DIR% >> "%OUT%"

cd /d "%PROJECT_DIR%" 2>>"%OUT%" || (
	echo Failed to cd to %PROJECT_DIR%>>"%OUT%"
	type "%OUT%"
	pause
	exit /b 1
)

echo. >> "%OUT%"
echo ==== Remote (origin) ==== >> "%OUT%"
"%GIT_EXE%" remote -v >> "%OUT%" 2>&1

echo. >> "%OUT%"
echo ==== Current branch and upstream ==== >> "%OUT%"
"%GIT_EXE%" branch -vv >> "%OUT%" 2>&1

echo. >> "%OUT%"
echo ==== Pushing to origin main (you may be prompted for credentials) ==== >> "%OUT%"
echo Command: "%GIT_EXE%" -C "%PROJECT_DIR%" push -u origin main >> "%OUT%"
"%GIT_EXE%" -C "%PROJECT_DIR%" push -u origin main >> "%OUT%" 2>&1

echo. >> "%OUT%"
type "%OUT%"

echo. >> "%OUT%"
echo Push finished (or stopped). Full output saved to: >> "%OUT%"
echo     %OUT% >> "%OUT%"
explorer "%USERPROFILE%\Desktop"
pause
endlocal
