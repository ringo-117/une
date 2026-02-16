document.addEventListener('DOMContentLoaded', () => {
  fetch('parts/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
    });

  fetch('/parts/contact.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('contact').innerHTML = html;
    });

  fetch('parts/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-footer').innerHTML = html;
    });
});