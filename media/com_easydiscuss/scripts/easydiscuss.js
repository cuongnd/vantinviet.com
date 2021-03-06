EasyDiscuss.require()
	.library(
		'markitup',
		'expanding',
		'placeholder',
		'scrollTo'
	)
	.script(
		'layout/responsive',
		'layout/lightbox',
		'legacy'
	)
	.language(
		'COM_EASYDISCUSS_BBCODE_BOLD',
		'COM_EASYDISCUSS_BBCODE_ITALIC',
		'COM_EASYDISCUSS_BBCODE_UNDERLINE',
		'COM_EASYDISCUSS_BBCODE_URL',
		'COM_EASYDISCUSS_BBCODE_TITLE',
		'COM_EASYDISCUSS_BBCODE_PICTURE',
		'COM_EASYDISCUSS_BBCODE_VIDEO',
		'COM_EASYDISCUSS_BBCODE_BULLETED_LIST',
		'COM_EASYDISCUSS_BBCODE_NUMERIC_LIST',
		'COM_EASYDISCUSS_BBCODE_LIST_ITEM',
		'COM_EASYDISCUSS_BBCODE_QUOTES',
		'COM_EASYDISCUSS_BBCODE_CODE',
		'COM_EASYDISCUSS_BBCODE_HAPPY',
		'COM_EASYDISCUSS_BBCODE_SMILE',
		'COM_EASYDISCUSS_BBCODE_SURPRISED',
		'COM_EASYDISCUSS_BBCODE_TONGUE',
		'COM_EASYDISCUSS_BBCODE_UNHAPPY',
		'COM_EASYDISCUSS_BBCODE_WINK'
	)
	.done(function()
	{
		EasyDiscuss.require().script( 'bbcode' ).done();
	});