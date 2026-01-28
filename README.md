# superdyzio.blog

This is my personal blog platform built with Next.js (App Router), Tailwind CSS, and Markdown.

## How to add a new post

1.  **Create a Markdown file**: Place your `.md` file in `src/content/posts/`.
2.  **Register the post**: Add an entry to `src/content/posts.json`.

Example `posts.json` entry:
```json
{
  "slug": "my-new-post",
  "fileName": "my-new-post.md",
  "title": "My New Post Title",
  "description": "Short summary for the index page",
  "publishedAt": "2026-01-28",
  "status": "published"
}
```

## Deployment

The blog is automatically deployed to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

## Tech Stack

- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS
- **Content**: Markdown + JSON Registry
- **Deployment**: GitHub Actions
