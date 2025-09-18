# install_and_push.ps1
# Attempts to install Git via winget (if available), verifies installation, then runs push_and_report.bat

param(
    [switch]$Force
)

Write-Host "Starting install_and_push helper..."

# Check if git already exists
$git = Get-Command git -ErrorAction SilentlyContinue
if ($git) {
    Write-Host "Git found at: $($git.Path)"
} else {
    Write-Host "Git not found on PATH. Attempting to install via winget..."
    if (Get-Command winget -ErrorAction SilentlyContinue) {
        try {
            Write-Host "Running: winget install --id Git.Git -e --source winget"
            winget install --id Git.Git -e --source winget --silent
        } catch {
            Write-Host "winget install failed or requires elevation. Try running this script as Administrator or install Git manually from https://git-scm.com/download/win"
            exit 1
        }
    } else {
        Write-Host "winget not available. Please install Git manually from https://git-scm.com/download/win or use GitHub Desktop: https://desktop.github.com/"
        exit 1
    }
}

# Verify git after installation
$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    Write-Host "Git still not available on PATH after install. Please restart your shell or log out/in and re-run this script."
    exit 1
}

Write-Host "Git is available at: $($git.Path)"
Write-Host "Running push_and_report.bat..."
& "%USERPROFILE%\Downloads\elevair-nextjs\push_and_report.bat"

Write-Host "Done. Check Desktop\push-output.txt for results."
