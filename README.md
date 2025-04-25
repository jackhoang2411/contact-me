# Tchat Support Website

This is the support website for the Tchat messaging application. The website is designed to be hosted on GitHub Pages and serve as the support URL for App Store Connect.

## Deployment Instructions

1. Create a new repository on GitHub
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Scroll down to the "GitHub Pages" section
5. Under "Source", select "main" branch
6. Click "Save"
7. Wait a few minutes for your site to be published
8. Use the provided GitHub Pages URL (usually `https://username.github.io/repository-name`) as your Support URL in App Store Connect

## Local Development

To test the website locally, you can use any local server. One simple way is to use Python's built-in server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Files

- `index.html`: The main webpage
- `styles.css`: Styling for the webpage
- `app-icon.png`: Tchat app icon
- `README.md`: This file

## Contact

For any questions or support, please contact:
- Name: Cong Hoang
- Email: jackhoang2411@gmail.com 