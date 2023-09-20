const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

// Перевірка роботи функцій
(async () => {
  try {
    console.log(await listContacts());
    console.log(await getContactById('contactId')); // Передайте існуючий ID контакту
    console.log(await removeContact('contactId')); // Передайте існуючий ID контакту
    console.log(await addContact('Mango', 'mango@gmail.com', '322-22-22'));
  } catch (error) {
    console.error(error.message);
  }
})();

module.exports = { listContacts, getContactById, removeContact, addContact };
