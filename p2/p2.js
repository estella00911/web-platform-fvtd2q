document.querySelector('.form').addEventListener('click', function(e) {
  let target = e.target;
  let inputText = document.querySelector('.form__input').value;
  if (target.classList.contains('btn-add')) {
    let newList = document.createElement('li');
    newList.innerHTML = `${inputText}<button class="btn-delete">刪除</button>`;
    document.querySelector('.lists').appendChild(newList);
  } else if (target.classList.contains('btn-delete')) {
    let deleteLi = target.parentNode;
    target.parentNode.parentNode.removeChild(deleteLi);
  } else if (target.classList.contains('btn-delete-all')) {
  }
});
