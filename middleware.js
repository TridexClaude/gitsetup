var middleware = {
  requireAuthentication: function(req, res, next){
    console.log('Private route has been hit.');
    next();
  },
  logger: function(req, res, next){
    console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};
