import os

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'assets/images/favicon.png' not in content:
            new_content = content.replace('</head>', '    <link rel="icon" type="image/png" href="assets/images/favicon.png">\n  </head>')
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
