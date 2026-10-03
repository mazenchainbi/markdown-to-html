# Markdown to HTML Converter

A lightweight, browser-based tool that converts Markdown into HTML in real time. Type Markdown on the left, see the raw HTML and a rendered preview update instantly. Built with plain HTML, CSS, and JavaScript, so there are no dependencies and no build step.

## Features

- **Live conversion**: output updates on every keystroke
- **Raw HTML view**: see the exact HTML generated from your Markdown
- **Rendered preview**: see how the HTML looks in the browser
- **Responsive layout**: panels sit side by side on wide screens and stack on small ones
- **Zero dependencies**: just open `index.html`

## Supported Markdown Syntax

| Markdown | Output |
| --- | --- |
| `# Heading` | `<h1>` |
| `## Heading` | `<h2>` |
| `### Heading` | `<h3>` |
| `> Quote` | `<blockquote>` |
| `**bold**` or `__bold__` | `<strong>` |
| `*italic*` or `_italic_` | `<em>` |
| `[text](url)` | `<a href="url">` |
| `![alt](url)` | `<img src="url" alt="alt">` |

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Open `index.html` in your browser. You can double-click the file or use a local server, for example:

   ```bash
   npx serve .
   ```

3. Start typing Markdown in the input box.

## Project Structure

```
.
├── index.html   # Page layout and markup
├── styles.css   # Styling and responsive layout
└── script.js    # Markdown parsing and live-update logic
```

## How It Works

1. `script.js` listens for `input` events on the textarea.
2. `convertMarkdown()` splits the text into lines and applies regular expressions to each line to convert block elements (headings, blockquotes) and inline elements (images, links, bold, italic).
3. The result is shown as plain text in the **Raw HTML Output** panel (via `textContent`) and rendered in the **HTML Preview** panel (via `innerHTML`).

## Known Limitations

This is a simple learning project, not a full Markdown parser. Currently it does not support:

- Lists (ordered or unordered)
- Code blocks and inline code
- Tables, horizontal rules, or nested formatting
- Multi-line paragraphs or blockquotes
- HTML sanitization: the preview uses `innerHTML`, so avoid pasting untrusted input

## Ideas for Future Improvements

- Add list, code block, and horizontal rule support
- Wrap text in `<p>` tags and preserve line breaks
- Sanitize output (e.g. with DOMPurify)
- Add a "Copy HTML" button
- Add word and character counters

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repo and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
