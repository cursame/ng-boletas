var fs              = require( 'fs' ),
    less            = require( 'less' ),
    path            = require( 'path' ),
    watch           = require( 'node-watch' ),
    wiredep         = require( 'wiredep' );

exports.launch      = function () {
    var jsDeps  = [],
        cssDeps = [];

    setStyles();
    wiredep({
        src             : [ './public/index.html' ],
        onPathInjected  : function ( fileObject ) {
            if ( fileObject.block == 'js' ) {
                jsDeps.push( path.join( 'public', fileObject.path ) );
            } else if ( fileObject.block == 'css' ) {
                cssDeps.push( path.join( 'public', fileObject.path ) );
            }
        }
    });
};

function setStyles () {
    // Compile frontend less styles
    var stylesPath      = path.join( path.join( __dirname, '../public', 'less', 'style.less' ) ),
        compile         = function () {
            var styles  = fs.readFileSync( stylesPath, 'utf8' );
            less.render( styles, {
                compress    : true,
                filename    : 'style.less',
                paths       : [ path.join( __dirname, '../public' ) ]
            }, function ( e, output ) {
                if ( !e ) {
                    fs.writeFileSync( path.join( __dirname, '../public', 'css', 'style.css' ), output.css );
                }
            });
        };

    watch( stylesPath, compile );
    compile();
};
