$files = Get-ChildItem *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "assets/images/favicon.png") {
        $content = $content -replace "</head>", "    <link rel=`"icon`" type=`"image/png`" href=`"assets/images/favicon.png`">`r`n  </head>"
        Set-Content $file.FullName $content
        Write-Host "Updated $($file.Name)"
    }
}
