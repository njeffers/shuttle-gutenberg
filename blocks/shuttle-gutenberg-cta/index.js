/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Controls from './controls';
import icon from './icon';
import attributes from './attributes';
// import './style.scss';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
    registerBlockType,
} = wp.blocks;

const {
    RichText,
    URLInput,
    MediaUpload,
} = wp.editor;

const {
    IconButton,
    Tooltip,
    TextControl,
} = wp.components;


function getSettings( attributes ) {
    let settings = [];
    for( let attribute in attributes ) {
        let value = attributes[ attribute ];
        if( 'boolean' === typeof attributes[ attribute ] ) {
            value = value.toString();
        }
        // settings.push( <li>{ attribute }: { value }</li> );
    }
    return settings;
}

/**
 * Register static block example block
 */
export default registerBlockType(
    'jsforwpblocks/shuttle-blocks',
    {
        title: __( 'Call To Action', 'shuttle' ),
        description: __( 'An example of how to use form fields in the Inspector element.', 'shuttle'),
        category: 'shuttle-gutenberg-blocks',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },         
        keywords: [
            __( 'Shuttle', 'shuttle' ),
            __( 'Settings', 'shuttle' ),
            __( 'Scheme', 'shuttle' ),
        ],
        attributes,
        getEditWrapperProps( attributes ) {
            const { blockAlignment } = attributes;
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { attributes: { textAlignment, blockAlignment, message, ctaTitle, ctaMessage, text, url  },
                attributes, className, setAttributes } = props;

            let settings = getSettings( attributes );

            let ctaBackground = attributes['colorPaletteControl'];
            let ctaFontColor = attributes['ctaFontColor'];

            return [
                <Inspector { ...{ setAttributes, ...props} } />,
                <Controls { ...{ setAttributes, ...props } }/>,
                <div
                    className={ className + ' shuttle-cta' }
                    style={ { textAlign: textAlignment, overflow: 'hidden', background: ctaBackground } }
                >


                    <div className={'shutte-cta-text-wrapper'}
                         style={ { color:ctaFontColor } }>
                        <RichText
                            tagName="h2"
                            multiline="p"
                            className="shuttle-cta-title"
                            placeholder={ __( 'Title Here', 'shuttle' ) }
                            value={ ctaTitle }
                            onChange={ ( ctaTitle ) => setAttributes( { ctaTitle } ) }
                        />


                        <RichText
                            tagName="div"
                            multiline="p"
                            placeholder={ __( 'Add your custom message', 'shuttle' ) }
                            onChange={ ctaMessage => { setAttributes( { ctaMessage } ) } }
                            value={ ctaMessage }
                        />

                    </div>

                    <div className={'shuttle-cta-button-wrapper'}>
                      <button className="btn btn-primary"> {attributes[ 'buttonText' ] }</button>
                    </div>

                </div>

            ];
        },
        save: props => {
            const { attributes: { textAlignment, blockAlignment, ctaTitle, ctaMessage, buttonURL  }, className, attributes } = props;

            let settings = getSettings( attributes );

            let ctaBackground = attributes['colorPaletteControl'];
            let ctaFontColor = attributes['ctaFontColor'];


            return(
                <div
                  className={ className + ' shuttle-cta' }
                  style={ { textAlign: textAlignment, overflow: 'hidden', background: ctaBackground } }
                >



                    <div className={'shutte-cta-text-wrapper'}
                         style={ { color:ctaFontColor } }>
                    <h2 className={ 'shuttle-cta-title' }>{ctaTitle}</h2>
                    <p className={ 'shuttle-cta-subtitle' }>{ctaMessage}</p>

                    </div>

                    <div className={'shuttle-cta-button-wrapper'}>
                        <a href={buttonURL}
                           className={ 'btn btn-primary' }>{ attributes[ 'buttonText' ] }</a>
                    </div>

                </div>
            );
        },
    },
);
