# Deployment Instructions for Delta Gymnastics Landing Page

This guide will walk you through deploying your landing page to GitHub so it's accessible to anyone with the link.

## Prerequisites

- You have a GitHub account (username: adale-debug)
- You have created a repository called "Foundations" on GitHub
- Git is installed on your computer (already confirmed)
- VS Code is installed (or any text editor)

---

## Part 1: Pushing Your Code to GitHub

Open your terminal (in VS Code: Terminal → New Terminal) and follow these steps:

### Step 1: Navigate to Your Project Folder

```bash
cd "/Users/ashtree/Desktop/Visual Studio Code/Foundations App"
```

**What this does:** Changes your terminal's working directory to your project folder.

### Step 2: Initialize Git Repository

```bash
git init
```

**What this does:** Creates a new Git repository in your folder. This allows Git to track changes to your files.

### Step 3: Stage All Files

```bash
git add .
```

**What this does:** Prepares all your files (index.html, styles.css, etc.) to be committed. The `.` means "add everything in this folder."

### Step 4: Create Your First Commit

```bash
git commit -m "Initial commit: Add Delta Gymnastics landing page"
```

**What this does:** Saves a snapshot of your files with a message describing what you did. Think of it like saving a checkpoint in a game.

### Step 5: Connect to Your GitHub Repository

```bash
git remote add origin https://github.com/adale-debug/Foundations.git
```

**What this does:** Links your local folder to your GitHub repository. "origin" is just a nickname for the GitHub repository URL.

### Step 6: Rename Your Branch to Main

```bash
git branch -M main
```

**What this does:** Renames your current branch to "main" (GitHub's default branch name).

### Step 7: Push Your Files to GitHub

```bash
git push -u origin main
```

**What this does:** Uploads all your files to GitHub. The `-u` flag sets up tracking so future pushes are easier.

**Important:** You may be asked for your GitHub credentials:
- **Username:** adale-debug
- **Password:** You'll need a Personal Access Token (not your regular password)
  - If you don't have one, go to: GitHub.com → Settings → Developer settings → Personal access tokens → Generate new token
  - Give it `repo` permissions
  - Copy the token and paste it when asked for password

---

## Part 2: Enable GitHub Pages

Now that your code is on GitHub, let's make it into a live website!

### Step 1: Go to Your Repository

Visit: [https://github.com/adale-debug/Foundations](https://github.com/adale-debug/Foundations)

### Step 2: Open Settings

Click the "Settings" tab at the top of the page (it's next to "Insights").

### Step 3: Navigate to Pages

In the left sidebar, scroll down and click on "Pages" (under the "Code and automation" section).

### Step 4: Configure the Source

- Under "Build and deployment" → "Source"
- Select "Deploy from a branch" (if not already selected)
- Under "Branch":
  - Select `main` from the first dropdown
  - Select `/ (root)` from the second dropdown
  - Click "Save"

### Step 5: Wait for Deployment

GitHub will now build and deploy your site. This takes 1-2 minutes.

You'll see a message like: "Your site is ready to be published at https://adale-debug.github.io/Foundations/"

### Step 6: Visit Your Live Site

After a couple of minutes, visit:

**https://adale-debug.github.io/Foundations/**

You should see "Welcome to Delta Gymnastics" displayed on a clean, centered page!

---

## Part 3: Sharing Your Site

Your site is now live and accessible to anyone! Simply share this URL:

**https://adale-debug.github.io/Foundations/**

No login required - anyone with this link can view it.

---

## Part 4: Making Updates in the Future

When you want to update your website:

### Step 1: Edit Your Files

Make changes to `index.html`, `styles.css`, or any other file in VS Code.

### Step 2: Save Your Changes

Make sure to save all files (File → Save or Cmd+S).

### Step 3: Stage, Commit, and Push

Run these commands in your terminal:

```bash
cd "/Users/ashtree/Desktop/Visual Studio Code/Foundations App"
git add .
git commit -m "Update landing page"
git push
```

Replace "Update landing page" with a brief description of what you changed.

### Step 4: Wait for Deployment

Your changes will appear on the live site in 1-2 minutes.

---

## Troubleshooting

### Problem: Git asks for credentials every time

**Solution:** Set up credential caching:

```bash
git config --global credential.helper osxkeychain
```

### Problem: "Permission denied" when pushing

**Solution:** Make sure you're using a Personal Access Token (not your password). Generate one at:
GitHub.com → Settings → Developer settings → Personal access tokens

### Problem: Changes don't appear on the live site

**Solution:**
1. Wait 2-3 minutes (GitHub Pages can be slow to update)
2. Hard refresh your browser (Cmd+Shift+R on Mac)
3. Check the Actions tab on GitHub to see if the deployment succeeded

### Problem: "Fatal: not a git repository"

**Solution:** Make sure you're in the correct folder:

```bash
cd "/Users/ashtree/Desktop/Visual Studio Code/Foundations App"
```

Then try the git commands again.

### Problem: Site shows 404 error

**Solution:**
1. Make sure your main HTML file is named `index.html` (lowercase)
2. Verify GitHub Pages is enabled in Settings → Pages
3. Check that the branch is set to `main` and folder is `/ (root)`

---

## Quick Reference

### Verify Everything is Working

```bash
# Check git status
git status

# See your commit history
git log --oneline

# Check your remote connection
git remote -v
```

### One-Command Update

After editing files, you can chain commands together:

```bash
git add . && git commit -m "Update site" && git push
```

---

## Need Help?

- **GitHub Documentation:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- **Git Basics:** [https://git-scm.com/book/en/v2/Getting-Started-Git-Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## Summary

1. ✅ Create your files (index.html, css/styles.css)
2. ✅ Push to GitHub using git commands
3. ✅ Enable GitHub Pages in repository settings
4. ✅ Visit your live site at https://adale-debug.github.io/Foundations/
5. ✅ Share the link with anyone!

Congratulations! Your first GitHub-hosted website is now live!
