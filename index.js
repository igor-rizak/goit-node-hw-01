const contacts = require("./contacts");


async function invokeAction({ action, id, name, email, phone }) {
  switch ( action ) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
     
    case "get":
      const getContacts = await contacts.getContactById(id);
      return console.log(getContacts);
    
    case "add":
      const newContact = await contacts.addContact(name, email, phone );
      return console.log(newContact);
      
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    
    default:
      console.warn("\x1B[31m Unknown action type!");
      console.log(action)
  }
}



// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6"});
// invokeAction({ action: "add", name: "Mr. Smith", email: "Smith&Co@marvel.net", phone: "(000) 000-000" });
// invokeAction({ action: "add", name: "Mr. Smith", email: "Smith&Co@marvel.net", phone: "(111) 111-111" });

invokeAction({ action: "remove", id: "1NDpqFufm-fagkal62mHy" });



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




// invokeAction(argv);