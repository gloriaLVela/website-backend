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
