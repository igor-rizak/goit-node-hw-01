const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

// readFile() і writeFile()

function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = fs.readFile(contactsPath);
  return JSON.parse(data);
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const getById = listContacts();
  const result = getById.find((item) => item.id === id);
  return result || null;
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
