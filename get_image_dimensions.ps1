Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("assets/images/zz.JPG")
Write-Output $img.Width
Write-Output $img.Height
$img.Dispose()
