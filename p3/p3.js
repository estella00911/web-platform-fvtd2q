let url = 'https://jsonplaceholder.typicode.com/users';
var request = new XMLHttpRequest();

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    let addressBook = document.querySelector('.address__book');
    for (let i = 0; i < data.length; i++) {
      var element = document.createElement('li');
      element.innerHTML = `${data[i].name} / ${data[i].company.name} / ${data[i].email} <button class="btn-delete">刪除</button>`
      addressBook.appendChild(element);
    }

    document.querySelector('.address__book').addEventListener('click', function (e) {
      let target = e.target;
      if (e.target.classList.contains('btn-delete')) {
        let element = e.target.parentNode;
        addressBook.removeChild(element)
      }
    })

  } else {
    // We reached our target server, but it returned an error
    code.textContent = 'Error ' + this.status + ' while fetching file: ' + this.statusText;
  }
};

request.onerror = function () {
  // There was a connection error of some sort
  alert('error');
};

request.open('GET', url, true);
request.send();


// let d = document.getElementById("top");  //addressBook
// let d_nested = document.getElementById("nested");
// let throwawayNode = d.removeChild(d_nested);

// name /  company name / email
// 0:
// address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
// company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
// __proto__: Object