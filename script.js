const ratings = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

let selectedRating = '';

ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    btn.disabled = false;
    btn.innerText = 'Send Review'
    removeActive ();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add('active');
  })
})

btn.addEventListener ('click', () => {
  ratings.forEach((rating) => {
    if (selectedRating !== '') {
      container.innerHTML = `
      <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    } else {
      btn.disabled = true;
      btn.innerText = 'Choose feedback.';
    }
  })
})

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove('active');
  })
}