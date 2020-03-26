var models = require('./server.js').models;

// models.Profile.create({name: 'Nick'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.upsert({name: 'Nick'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.upsert({id: '5e7cc7a17b267109c0995801', name: 'Nick2'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.findOrCreate({name: 'Nick2'}, (err, profile) => {
//   console.log('data?', err, profile);
//   if (err) {
//     console.log('There was an error', err);
//   } else if (profile) {
//     // add an attribute to the profile - a
//     // profile.updateAttributes({
//     //   email: 'nick@nickgermain.com',
//     // }, (updateError, updated) => {
//     //   console.log('Saved?', updateError, updated);
//     // });
//     profile.email= 'nick@nickgermaine2.com';
//     profile.save((ue, updated) => {
//       console.log('Updated?', updated);
//     });
//   }
// });

// var toSave = [
//     {name: 'Rosy', email: 'Rosy@email.com'},  
//     {name: 'Petra', email: 'Petra@email.com'}, 
//     {name: 'Juan', email: 'Juan@email.com'}, 
//     {name: 'Jose', email: 'Jose@email.com'}, 
//     {name: 'Miguel', email: 'Miguel@email.com'}, 
//     {name: 'Paty', email: 'Paty@email.com'}, 
//     {name: 'Erika', email: 'Erika@email.com'}, 
//     {name: 'Luis', email: 'Luis@email.com'}, 
//     {name: 'Rafael', email: 'Rafael@email.com'}, 
//     {name: 'PinPon', email: 'PinPon@email.com'}, 
//     {name: 'Cenicienta', email: 'Cenicienta@email.com'},   
// ];

// toSave.map(obj => {
//   models.Profile.create(obj, (err, created) => {
//     console.log('Created?', created);
//   });
// });

var filter = {
  where: {
    email: {like: '@email'},
    // postCount: {gt: 10}
  }, // Kind of like MySQL where 
  order: 'date ASC',
  limit: 10,
  skip: 4, // skip the first 
  fields: {
    email: true
  }
//   include: {
//     relation: 'Posts',
//     scope: {
//       limit: 5,
//       order: 'date ASC',
//       include: {
//         relation: 'Image',
//         limit: 1,
//         where: {type: 'thumbnail'}
//       }
//     }
 // }
};

// models.Profile.find({where: {name: 'Rosy'}}, (err, found) => {
//   console.log('Found?', err, found);
// });

// models.Profile.find(filter, (err, found) => {
//   console.log('Found?', err, found);
// });

// models.Profile.findById('5e7ce6c2bdc501390cf3d964', (err, found) => {
//   console.log('Found?', err, found); 
// });