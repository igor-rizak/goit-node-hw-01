const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const getContacts = await contacts.getContactById(id);
      return console.log(getContacts);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(contactId);
      return console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW"});
invokeAction({action: "add", name: "Mango Fruit", email: "est@marvel.net", phone: "(777) 777-7777"})
