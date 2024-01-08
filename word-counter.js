function updateWordCount() {
    var textInput = document.getElementById('text-input').value.trim();
    var wordCount = 0;
    
    if (textInput.length > 0) {
        wordCount = textInput.split(/\s+/).length;
    }
    
    document.getElementById('word-count').textContent = wordCount;
}
