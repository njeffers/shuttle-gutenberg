<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Wordpress_Shuttle\Gutenberg_Blocks
 * @author      Nick Jeffers (@njeffers)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Wordpress Shuttle - Gutenberg Blocks
 * Plugin URI:  https://wordpressshuttle.com
 * Description: A plugin containing Shuttle's Gutenberg Blocks.
 * Version:     2.1.0
 * Author:      Nick Jeffers
 * Author URI:  https://github.com/njeffers
 * Text Domain: shuttle
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Wordpress_Shuttle\Gutenberg_Blocks;

//  Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}




function ws_block_categories( $categories = array(), $post ) {
	if ( $post->post_type !== 'post' ) {
		return $categories;
	}



	$categories[] = array(
		'slug' => 'shuttle-gutenberg-blocks',
		'title' => __( 'Shuttle Blocks', 'wordpress-shuttle' ),
		);


	return $categories;
}

add_filter( 'block_categories', 'Wordpress_Shuttle\Gutenberg_Blocks\ws_block_categories', 10, 2 );



// Enqueue JS and CSS
include __DIR__.'/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__.'/lib/meta-boxes.php';

// Block Templates
include __DIR__.'/lib/block-templates.php';

/*
add_filter( 'block_categories', 'ws_add_block_category' );
function ws_add_block_category( $categories ) {

	$categories[] = array(
		'slug' => 'shuttle-gutenberg-blocks',
		'title' => sprintf(
			__( 'Shuttle Blocks', 'wordpress-shuttle' ),
			'Shuttle'
		),
	);

	return $categories;
}*/

/*
add_filter( 'block_categories', function ( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			'slug' => 'mario-blocks',
			'title' => __( 'Mario Blocks', 'mario-blocks' ),

		)
	);
}, 10, 2 );*/