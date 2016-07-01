var express     = require( 'express' ),
    debug       = require( 'debug' )( 'app' ),
    start       = require( './lib/start' ),
    app         = express();

// Set the PORT and ENV variables and start the server
app.set( 'port', process.env.PORT || 3000 );
app.set( 'env', process.env.ENV || 'development' );
app.settings.env    = app.get( 'env' );

start.launch( app );

var server      = app.listen( app.get('port'), function() {
    debug( 'Express server listening on port ' + server.address().port );
});

module.exports  = app;
