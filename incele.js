<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title</title>
<script>
    // Sağ tıklama olayını engelleme
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    
    // F12'ye basmayı engelleme
    document.onkeydown = function (e) {
        if (e.keyCode == 123) { // 123 F12 tuşu için keyCode
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I için
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C için
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J için
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U için
            return false;
        }
    }
</script>
</head>
<body>
<!-- Sayfanızın içeriği buraya gelecek -->
<h1>Welcome to My Page</h1>
<p>This is my webpage.</p>
</body>
</html>