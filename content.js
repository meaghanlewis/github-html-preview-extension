function addPreviewLinks() {
  // Select all file containers in PR file list
  document.querySelectorAll('.file').forEach(fileDiv => {
    const filename = fileDiv.querySelector('.file-info a')?.textContent;
    if (filename && filename.endsWith('.html')) {
      // Find the raw URL for the file
      const rawButton = Array.from(fileDiv.querySelectorAll('a'))
        .find(a => a.textContent.trim().toLowerCase() === 'raw');

      if (rawButton) {
        const rawUrl = rawButton.href;
        // Use htmlpreview.github.io for rendering HTML
        const previewUrl = `https://htmlpreview.github.io/?${rawUrl}`;
        // Create Preview Link
        const previewLink = document.createElement('a');
        previewLink.href = previewUrl;
        previewLink.textContent = 'Preview';
        previewLink.target = '_blank';
        previewLink.style.marginLeft = '10px';
        // Insert next to Raw button
        rawButton.parentNode.insertBefore(previewLink, rawButton.nextSibling);
      }
    }
  });
}

// Run when page loads
addPreviewLinks();
// Optionally, re-run after AJAX navigation (GitHub uses PJAX)
document.addEventListener('pjax:end', addPreviewLinks);
