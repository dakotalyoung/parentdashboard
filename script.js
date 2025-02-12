document.getElementById('edit-btn').addEventListener('click', () => {
  document.getElementById('edit-form').classList.toggle('hidden');
});

document.getElementById('save-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const club = document.getElementById('club').value;
  const membership = document.getElementById('membership').value;

  document.getElementById('parent-info').innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Club:</strong> ${club}</p>
    <p><strong>Membership Status:</strong> ${membership}</p>
  `;

  document.getElementById('edit-form').classList.add('hidden');
});

document.getElementById('child-btn').addEventListener('click', () => {
  alert("Switching child profile...");
});
