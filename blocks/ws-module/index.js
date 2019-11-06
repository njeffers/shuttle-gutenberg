/**
 * BLOCK: modules-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, RichText } = wp.editor;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
export default registerBlockType("shuttle-block/module", {
	title: __("Module", "shuttle-block"),
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'shuttle-blocks', // Block category
	keywords: [
		__( 'Module' ),
		__( 'Shuttle' ),
	],

    attributes: {
        heading:{
            type:"string"
        },
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-modules-block'></p>.
        const { className, setAttributes,attributes } = props;


        function changeHeading(heading) {
            // using some nice js features instead of typing
            // { heading: heading }
            setAttributes({ heading });
        }


		return (
            <div>
            <RichText
        className="copy-hd"
        tagName="h2"
        placeholder="Enter your heading"
        value={attributes.heading}
        onChange={changeHeading}
        />
        <InnerBlocks />
            </div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className="ws-section section outer-container module-padding section-12263"
				 style="display:block;clear:both;background-color:rgba(255,255,255,0);background-repeat:repeat;background-size:auto;">

            <RichText.Content
    class="copy-hd"
        tagName="h2"
        value={props.attributes.heading}
        />
            <InnerBlocks.Content />
            </div>
		);
	},
} );
