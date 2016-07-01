var fs          = require( 'fs' ),
    less        = require( 'less' ),
    path        = require( 'path' ),
    watch       = require( 'node-watch' ),
    wiredep     = require( 'wiredep' );

setStyles();
wiredep({
    src     : [ './index.html' ]
});

function setStyles () {
    // Compile frontend less styles
    var stylesPath      = path.join( path.join( __dirname, 'less', 'style.less' ) ),
        compile         = function () {
            var styles  = fs.readFileSync( stylesPath, 'utf8' );
            less.render( styles, {
                compress    : true,
                filename    : 'style.less',
                paths       : __dirname
            }, function ( e, output ) {
                if ( !e ) {
                    fs.writeFileSync( path.join( __dirname, 'css', 'style.css' ), output.css );
                }

                process.exit();
            });
        };

    watch( stylesPath, compile );
    compile();
};
