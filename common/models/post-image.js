'use strict';
const sharp = require('sharp');
const fs = require('fs');

module.exports = function(PostImage) {
  PostImage.upload = function(ctx, options, access_token, post_id, cb) {
    if (!options) options = {};
    ctx.request.params.container = 'postImages';
    if (!fs.existsSync('./server/storage/' + ctx.req.params.container)) {
      fs.mkdirSync('./server/storage' + ctx.req.params.container);
    }
  };
    // Configure the route
  PostImage.remoteMethod(
        'upload',
    {
      description: 'uploads a file',
      accepts: [
                {args: 'ctx', type: 'object', http: {source: 'context'}},
                {arg: 'options', type: 'object', http: {source: 'query'}},
                {arg: 'access_token', type: 'string'},
                {arg: 'post_id', type: 'string'},
      ],
      returns: {
        arg: 'fileObject', type: 'object', root: true,
      },
      http: {verb: 'post'},
    }

    );
};
