document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.new_task_description.value);
    form.reset()
  })
});
function buildTask (toDo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handelDelete);
  li.textContent = `${toDo}     `
  btn.textContent = "x"
  li.appendChild(btn)
  const list = document.querySelector('#list');
  list.appendChild(li)
}
function handelDelete (toDelete) {
  toDelete.target.parentNode.remove()
}