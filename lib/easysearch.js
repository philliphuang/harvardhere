// EasySearch package from atmosphere.js
EasySearch.createSearchIndex('events', {
	// searches name, location, and description
    'field' : ['name','description', 'location'],
    // searches events database
    'collection' : Events,
    // uses mongo db system
    'use': 'mongo-db'
}); 