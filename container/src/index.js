import('./bootstrap')

// Refactor the entry point to load asyncronously because if we directly go to bootstrap.js file which expect some codes by module federation plugin it will give error which state "sorry we dont have any code for products module" so by this async import now webpack have time to load product module asyncronously before executing bootstrap.js 