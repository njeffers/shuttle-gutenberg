import icon from "./icon";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Fragment } = wp.element;

const {
    InspectorControls,
    ColorPalette,
    URLInput,
    MediaUpload,
} = wp.editor;
const {
    Button,
    ButtonGroup,
    CheckboxControl,
    IconButton,
    PanelBody,
    PanelRow,
    PanelColor,
    RadioControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    Toolbar,
    Tooltip,
    SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { buttonText, ctaBackgroundColor, ctaFontColor, checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl, buttonURL, imgID, imgURL, imgAlt }, setAttributes } = this.props;


        const onSelectImage = img => {
            setAttributes( {
                imgID: img.id,
                imgURL: img.url,
                imgAlt: img.alt,
            } );
        };
        const onRemoveImage = () => {
            setAttributes({
                imgID: null,
                imgURL: null,
                imgAlt: null,
            });
        }


        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'shuttle' ) }
                    initialOpen={ false }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'shuttle' ) }</p>
                    </PanelRow>
                </PanelBody>


                <PanelBody>

                    <TextControl
                        label={ __( 'Button Text', 'shuttle' ) }
                        help={ __( 'Text control help text', 'shuttle' ) }
                        value={ buttonText }
                        onChange={ buttonText => setAttributes( { buttonText } ) }
                    />

                    <p>{ __( 'Button URL', 'shuttle' ) }</p>
                    <form
                        className="blocks-format-toolbar__link-modal-line blocks-format-toolbar__link-modal-line shuttle-cta-url-wrapper"
                        onSubmit={ event => event.preventDefault() }
                    >
                        <URLInput
                            className="url"
                            value={ buttonURL }
                            onChange={ buttonURL => setAttributes( { buttonURL } ) }
                        />
                        {/*<IconButton
                                icon="editor-break"
                                label={ __( 'Apply', 'shuttle' ) }
                                type="submit"
                            />*/}
                    </form>

                </PanelBody>

                <PanelColor
                    title={ __( 'Background Color', 'shuttle' ) }
                    colorValue={ ctaBackgroundColor }
                >
                    <ColorPalette
                        value={ ctaBackgroundColor }
                        onChange={ ctaBackgroundColor => setAttributes( { ctaBackgroundColor } ) }
                    />
                </PanelColor>

                <PanelColor
                    title={ __( 'Font Color', 'shuttle' ) }
                    colorValue={ ctaFontColor }
                >
                    <ColorPalette
                        value={ ctaFontColor }
                        onChange={ ctaFontColor => setAttributes( { ctaFontColor } ) }
                    />
                </PanelColor>

            </InspectorControls>
        );
    }
}
