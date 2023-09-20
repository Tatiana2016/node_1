const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = yargs(hideBin(process.argv))
  .option('action', {
    alias: 'a',
    describe: 'Choose action (list, get, add, remove)',
    demandOption: true,
  })
  .option('id', {
    alias: 'i',
    describe: 'Contact ID (required for get and remove actions)',
    type: 'string',
  })
  .option('name', {
    alias: 'n',
    describe: 'Contact name (required for add action)',
    type: 'string',
  })
  .option('email', {
    alias: 'e',
    describe: 'Contact email (required for add action)',
    type: 'string',
  })
  .option('phone', {
    alias: 'p',
    describe: 'Contact phone (required for add action)',
    type: 'string',
  })
  .argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
        .then((contacts) => console.table(contacts))
        .catch((error) => console.error(error.message));
      break;

    case 'get':
      getContactById(id)
        .then((contact) => console.log(contact))
        .catch((error) => console.error(error.message));
      break;

    case 'add':
      addContact(name, email, phone)
        .then((contact) => console.log(contact))
        .catch((error) => console.error(error.message));
      break;

    case 'remove':
      removeContact(id)
        .then((contact) => console.log(contact))
        .catch((error) => console.error(error.message));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
