document.querySelectorAll('.bucket-list li').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('completed');
      const icon = item.querySelector('i');
      if (item.classList.contains('completed')) {
        icon.classList.replace('fa-star', 'fa-check');
        icon.style.color = '#00b894';
      } else {
        icon.classList.replace('fa-check', 'fa-star');
        icon.style.color = '#6c5ce7';
      }
    });
  });
