function showSection(id, clickedButton) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active-page');

  document.querySelectorAll('.nav').forEach(n => n.classList.remove('active'));
  if (clickedButton) clickedButton.classList.add('active');

  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

function submitTask(button) {
  const row = button.closest('tr');
  const badge = row.querySelector('.badge');

  if (badge.classList.contains('done')) return;

  badge.textContent = 'Done';
  badge.className = 'badge done';
  button.textContent = 'Submitted';
  button.disabled = true;

  const pending = document.querySelectorAll('#submissionTable .badge.pending').length;
  const done = document.querySelectorAll('#submissionTable .badge.done').length;

  document.getElementById('pendingCount').textContent = pending;
  document.getElementById('doneCount').textContent = done;
}

document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const isMobile = window.innerWidth <= 900;
  if (isMobile && sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) && !e.target.closest('.mobile-nav')) {
    sidebar.classList.remove('open');
  }
});
