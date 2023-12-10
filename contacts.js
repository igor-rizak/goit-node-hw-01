const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require('nanoid');
const id = nanoid();

const contactsPath = path.join(__dirname, "db", "contacts.json");

// readFile() і writeFile()

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const stringId = String(contactId);
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === stringId);
    return result || null;
}

async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const stringId = String(contactId);
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === stringId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(books, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const newContacts = {
    id: id,
    name,
    email,
    phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
