import os

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize body class for theme consistency
        if 'auth-bg' in content:
            new_content = content.replace('class="bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="auth-bg text-slate-950 antialiased dark:text-white"')
        else:
            new_content = content.replace('class="site-shell bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="site-shell text-slate-950 antialiased dark:text-white"')
            # Also handle cases where site-shell might be missing or different
            new_content = new_content.replace('class="bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white"', 'class="site-shell text-slate-950 antialiased dark:text-white"')

        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
