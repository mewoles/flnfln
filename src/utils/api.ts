<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, initial-scale=1, maximum-scale=1">
    <title>Mars App| Ethereum</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <link rel="stylesheet" href="/src/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet">
    <script>
      // Disable pull-down to refresh/minimize on mobile browsers
      document.addEventListener('touchmove', function(event) {
        const taskList = document.querySelector('.task-list');
        if (taskList && taskList.contains(event.target)) {
          // Allow scrolling inside task-list
          return;
        }
        if (event.touches.length === 1) {
          event.preventDefault();
        }
      }, { passive: false });

      document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
      });

      // Telegram specific adjustment
      if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.onEvent('viewportChanged', function() {
          if (!Telegram.WebApp.isExpanded) {
            Telegram.WebApp.expand();
          }
        });

        // Ensure the app is expanded to the maximum height on load
        Telegram.WebApp.ready();
        if (!Telegram.WebApp.isExpanded) {
          Telegram.WebApp.expand();
        }
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
