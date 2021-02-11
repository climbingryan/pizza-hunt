// create variable to hold db connection
let db;
// establish a connection to IndexedDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('pizza_hunt', 1);


// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save reference to the database
    const db = event.target.result;
    // create an object store (table) called 'new-pizza', set it to have na outo incrementing primary key of sorts
    db.createObjectStore('new-pizza', { autoIncrement: true });
}

// upon a successful
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
        // basically save new updated reference
    db = event.target.result

    // check uf app is online, if yes run uploadPizza() function to send all local db data to api
    if (navigator.onLine) {

    }
};
// error handeling
request.onerror = function(event) {
    //log error here
    console.log(event.target.errorCode)
}


// This function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
    // open a new transaction with the db with read and write permissions
    const transaction = db.transaction(['new_pizza'], 'readwrite');

    // access the object store for 'new_pizza
    const pizzaObjectStore = transaction.objectStore('new_pizza');

    // add record to your store with add method
    pizzaObjectStore.add(record);
}