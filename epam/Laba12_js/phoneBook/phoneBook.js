var phoneBook = {
  contacts: []
}; // Тут ви зберігаєте записи як хочете

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function (name, phone, email) {
  this.contacts.push({ name, phone, email });
  // Ваша неймовірна магія тут
};

/*
   Функція пошуку записів в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function (query) {
  let queryRegExp = RegExp(query, "gi");
  let result = "";
  for (i in this.contacts) {
    if (queryRegExp.test(this.contacts[i].name) || queryRegExp.test(this.contacts[i].phone) || queryRegExp.test(this.contacts[i].email)) {
      result += this.contacts[i].name + ", " + this.contacts[i].phone + ", " + this.contacts[i].email + "<br>";
    }
  }
  if (!result) {
    document.write("<p class='notfound'>Контактів по запиту не знайдено</p>");
    return;
  }
  document.write("<p class='success'>" + result + "</p>");
  // Ваша магія тут
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  let counter = 0;
  for (i in this.contacts) {
    if (this.contacts[i].name == query || this.contacts[i].phone == query || this.contacts[i].email == query) {
      this.contacts.splice(i, 1);
      counter++;
    }
  }
  if (!counter) {
    document.write("<p class='notfound'>Контактів по запиту не знайдено<br></p>");
    return;
  }
  document.write("<p class='success'>Вилучено " + counter + " контактів</p>");
  // Ваша магія тут
};

/*
   Функція виведення всіх телефонів.
*/
phoneBook.showTable = function () {
  document.write("<table><tr><th>Ім'я</th><th>Телефон</th><th>email</th></tr>");
  for (i in this.contacts) {
    document.write(`<tr><td>${this.contacts[i].name}</td><td>${this.contacts[i].phone}</td><td>${this.contacts[i].email}</td></tr>`);
  }
  document.write("</table>");
  // Ваша чорна магія тут
};
