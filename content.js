function addPreviewLinks() {
  document.querySelectorAll('.file').forEach(fileDiv => {
    const fileInfo = fileDiv.querySelector('.file-info a');
    if (!fileInfo) return;
    const filename = fileInfo.textContent.trim();
    if (filename.endsWith('.html')) {
      // Find the "Raw" button (could be a link or a button)
      const rawButton = Array.from(fileDiv.querySelectorAll('a,button'))
        .find(el => el.textContent.trim().toLowerCase() === 'raw');
      if (rawButton && rawButton.href) {
        const previewUrl = `https://htmlpreview.github.io/?${rawButton.href}`;
        const previewLink = document.createElement('a');
        previewLink.href = previewUrl;
        previewLink.textContent = 'Preview';
        previewLink.target = '_blank';
        previewLink.style.marginLeft = '10px';
        rawButton.parentNode.insertBefore(previewLink, rawButton.nextSibling);
      }
    }
  });
}

addPreviewLinks();
document.addEventListener('pjax:end', addPreviewLinks);