<?php
if (!defined('ABSPATH')) {
	exit;
}

function dpBlocksEditorAssets() {
	wp_enqueue_script(
		'dynpages-blocks-editor-js',
		plugins_url('/dynpages-blocks/dist/js/dynpagesBlocks.js', dirname(__FILE__)),
		[
			'wp-blocks',
			'wp-editor',
			'wp-i18n',
			'wp-element',
			'wp-components'
		],
		false,
		true
	);
}
add_action('enqueue_block_editor_assets', 'dpBlocksEditorAssets');

