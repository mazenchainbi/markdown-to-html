const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown(){
  const markDown = document.getElementById("markdown-input").value;
  const lines = markDown.split('\n');
  const convertedLines = lines.map(line => {
    let processed = line;
    if(/^\s*###\s+(.*)$/.test(processed)){
      processed = processed.replace(/^\s*###\s+(.*)$/,'<h3>$1</h3>')
    }
    else if(/^\s*##\s+(.*)$/.test(processed)){
      processed = processed.replace(/^\s*##\s+(.*)$/,'<h2>$1</h2>')
    }
    else if(/^\s*#\s+(.*)$/.test(processed)){
      processed = processed.replace(/^\s*#\s+(.*)$/,'<h1>$1</h1>')
    }
    else if(/^\s*>\s+(.*)$/.test(processed)){
      processed = processed.replace(/^\s*>\s+(.*)$/,'<blockquote>$1</blockquote>')
    }

    processed = processed.replace(/!\[(.*?)\]\((.*?)\)/g,'<img src="$2" alt="$1">')

    processed = processed.replace(/\[(.*?)\]\((.*?)\)/,'<a href="$2">$1</a>')

    processed = processed.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')

    processed = processed.replace(/__(.*?)__/g,'<strong>$1</strong>')

    processed = processed.replace(/\*(.*?)\*/g,'<em>$1</em>')

    processed = processed.replace(/_(.*?)_/g,'<em>$1</em>')

    return processed;

  })

  return convertedLines.join('')
}

function handleInput() {
  const htmlResult = convertMarkdown();

  if (htmlOutput) {
    htmlOutput.textContent = htmlResult;
  }

  if (preview) {
    preview.innerHTML = htmlResult;
  }

  const text = markdownInput.value;
  charCountElem.textContent = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  wordCountElem.textContent = words;
}

markdownInput.addEventListener('input', handleInput);