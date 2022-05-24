import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');

// Create a connection to database and version we want to use.
const contactDb = await openDB('jate', 1);

// Create new transaction and specify the database and data privileges.
const tx = contactDb.transaction('jate', 'readwrite');

//Open up desired object store.
const store = tx.objectStore('jate');

// Use the .update() method on store and pass in content. 
const request = store.update({content: content});

// Get confirmation of request.
const result = await request;
console.log('Data saved to DB', result);
};
;


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.error('getDb not implemented');

// Create a connection to the database and version we want to use.
const contactDb = await openDB('jate', 1);

// Create a new transaction and specify the database and data privileges 
const tx = contactDb.transaction('jate', 'readonly');

// Open up desired object store. 
const store = tx.objectStore('jate');

// Use getAll() method to get all data in database.
const request = store.getAll();

// Get confirmation of request. 

const result = await request;
console.log('result.value', result);
return result; 
};

// Start the database.
initdb();
