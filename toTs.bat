echo off
set /p folderName=Enter the name of folder:
set /p fileName=Enter the name of file: 
npx tsc ./%folderName%/%fileName% --outDir ./%folderName%/js