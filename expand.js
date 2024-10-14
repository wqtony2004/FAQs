document.querySelectorAll('.Question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // Get the .Answers div
    const icon = question.querySelector('.ShowAnswer'); // Get the icon

    if (answer.style.display === 'block') {
      // Collapse the answer
      answer.style.display = 'none';
      icon.src = 'assets/images/icon-plus.svg'; // Change icon to plus
    } else {
      // Expand the answer
      answer.style.display = 'block';
      icon.src = 'assets/images/icon-minus.svg'; // Change icon to minus
    }
  });
});