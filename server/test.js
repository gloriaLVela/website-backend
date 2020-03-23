var models = require('./server.js').models;

// models.Profile.create({name: 'Nick'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.upsert({name: 'Nick'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

models.Profile.findOrCreate({id: '5e78d8cd7a08253bb867242a'}, {name: 'Nick'}, (err, profile) => {
  console.log('data?', err, profile);
});
