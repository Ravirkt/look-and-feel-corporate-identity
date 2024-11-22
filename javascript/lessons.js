





document.getElementById('addSectionButton').addEventListener('click', function() {
    var newSection = document.createElement('section');

    newSection.classList.add('new-section');

    newSection.innerHTML = '<p>rtrtr rrt rty445 45 b rhr </p>';

    document.getElementById('sectionsContainer').appendChild(newSection);
  });