$files = Get-ChildItem *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content
    
    if ($content -match "auth-bg") {
        $newContent = $content -replace 'class="bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="auth-bg text-slate-950 antialiased dark:text-white"'
    } else {
        $newContent = $content -replace 'class="site-shell bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="site-shell text-slate-950 antialiased dark:text-white"'
        $newContent = $newContent -replace 'class="bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="site-shell text-slate-950 antialiased dark:text-white"'
    }

    if ($newContent -ne $content) {
        Set-Content $file.FullName $newContent
        Write-Host "Updated $($file.Name)"
    }
}
