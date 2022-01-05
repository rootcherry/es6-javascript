// destructuring in practice

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

function isEngineer1({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}
