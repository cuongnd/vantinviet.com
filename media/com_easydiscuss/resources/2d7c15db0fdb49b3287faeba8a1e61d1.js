FD31.installer("EasyDiscuss", "resources", function($){
$.require.template.loader({"easydiscuss\/field.form.attachments.item":"<li data-attachment-item class=\"attachment-item new\">\n\t<i class=\"icon\"><\/i>\n\t<span data-attachment-title><\/span>\n\t<a data-attachment-remove-button href=\"javascript:void(0);\"> &bull; B\u1ecf<\/a>\n\t<input type=\"file\" name=\"filedata[]\" size=\"50\" data-attachment-file \/>\n<\/li><script type=\"text\/javascript\"><li data-attachment-item class=\"attachment-item new\">\n\t<i class=\"icon\"><\/i>\n\t<span data-attachment-title><\/span>\n\t<a data-attachment-remove-button href=\"javascript:void(0);\"> &bull; B\u1ecf<\/a>\n\t<input type=\"file\" name=\"filedata[]\" size=\"50\" data-attachment-file \/>\n<\/li><\/script>","easydiscuss\/field.form.attachments.fileinput":"<input type=\"file\" name=\"filedata[]\" size=\"50\" class=\"fileInput\" \/><script type=\"text\/javascript\"><input type=\"file\" name=\"filedata[]\" size=\"50\" class=\"fileInput\" \/><\/script>","easydiscuss\/conversation.read.item":"<li class=\"[%= post.className %]\">\n\t<div class=\"discuss-item discuss-item-message\">\n\t\t<div class=\"discuss-item-right\">\n\t\t\t<div class=\"discuss-item discuss-item-media\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"media-object\">\n\t\t\t\t\t\t\t<a class=\"discuss-user-name\" href=\"[%= post.authorLink %]\">\n\t\t\t\t\t\t\t\t<div class=\"discuss-avatar avatar-medium\">\n\t\t\t\t\t\t\t\t\t<img src=\"[%= post.authorAvatar %]\" alt=\"[%= post.authorName %]\" \/>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<div class=\"discuss-message-box\">\n\t\t\t\t\t\t\t\t<div class=\"discuss-user-name\">\n\t\t\t\t\t\t\t\t\t<a href=\"[%= post.authorLink %]\">[%= post.authorName %]<\/a>\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t\t<div class=\"discuss-message-content\">\n\t\t\t\t\t\t\t\t\t[%= post.message %]\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t\t<div class=\"discuss-date\">\n\t\t\t\t\t\t\t\t\t[%= post.lapsed %]\n\t\t\t\t\t\t\t\t\t<time datetime=\"[%= post.created %]\"><\/time>\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/li>\n<script type=\"text\/javascript\"><li class=\"[%= post.className %]\">\n\t<div class=\"discuss-item discuss-item-message\">\n\t\t<div class=\"discuss-item-right\">\n\t\t\t<div class=\"discuss-item discuss-item-media\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"media-object\">\n\t\t\t\t\t\t\t<a class=\"discuss-user-name\" href=\"[%= post.authorLink %]\">\n\t\t\t\t\t\t\t\t<div class=\"discuss-avatar avatar-medium\">\n\t\t\t\t\t\t\t\t\t<img src=\"[%= post.authorAvatar %]\" alt=\"[%= post.authorName %]\" \/>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<div class=\"discuss-message-box\">\n\t\t\t\t\t\t\t\t<div class=\"discuss-user-name\">\n\t\t\t\t\t\t\t\t\t<a href=\"[%= post.authorLink %]\">[%= post.authorName %]<\/a>\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t\t<div class=\"discuss-message-content\">\n\t\t\t\t\t\t\t\t\t[%= post.message %]\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t\t<div class=\"discuss-date\">\n\t\t\t\t\t\t\t\t\t[%= post.lapsed %]\n\t\t\t\t\t\t\t\t\t<time datetime=\"[%= post.created %]\"><\/time>\n\t\t\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/li>\n<\/script>","easydiscuss\/field.form.polls.answer":"<li class=\"pollAnswers mb-5\">\n\t<div class=\"input-append\">\n\t\t<input type=\"text\" name=\"pollitems[]\" class=\"input-xlarge answerText\" \/>\n\t[% if( showRemove ){ %]\n\t<a href=\"javascript:void(0);\" class=\"btn btn-danger removeItem\"><i class=\"icon-remove\"><\/i> <\/a>\n\t[% } %]\n\t<\/div>\n<\/li>\n<script type=\"text\/javascript\"><li class=\"pollAnswers mb-5\">\n\t<div class=\"input-append\">\n\t\t<input type=\"text\" name=\"pollitems[]\" class=\"input-xlarge answerText\" \/>\n\t[% if( showRemove ){ %]\n\t<a href=\"javascript:void(0);\" class=\"btn btn-danger removeItem\"><i class=\"icon-remove\"><\/i> <\/a>\n\t[% } %]\n\t<\/div>\n<\/li>\n<\/script>","easydiscuss\/comment.form":"<form name=\"discussCommentForm\">\n<div class=\"discuss-comment-form\">\n\t\t<div class=\"clearfull\">\n\t\t\t<div class=\"textarea_wrap\">\n\t\t\t\t<textarea id=\"comment\" name=\"comment\" class=\"textarea full-width commentMessage\"><\/textarea>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t\t<div class=\"row-fluid\">\n\t\t\t\t\t\t<div class=\"pull-left mt-5\">\n\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"tnc\" value=\"1\" class=\"commentTnc\" \/>\n\t\t\t\t\tT\u00f4i \u0111\u00e3\u0111\u1ecdc v\u00e0 \u0111\u00e3\u0111\u1ed3ng \u00fd <a href=\"javascript:void(0);\" class=\"comment-terms termsLink\">\u0110i\u1ec1u Ki\u1ec7n<\/a>\n\t\t\t\t<\/label>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"pull-right mt-5\">\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-small cancelButton\">H\u1ee7y<\/a>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-small btn-primary saveButton\">G\u1eedi<\/a>\n\t\t\t\t<span class=\"pull-right commentLoader discuss-loader\" style=\"display: none;\"><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t<\/div>\n<\/div>\n<input type=\"hidden\" name=\"post_id\" class=\"postId\" value=\"[%= id %]\">\n<\/form>\n<script type=\"text\/javascript\"><form name=\"discussCommentForm\">\n<div class=\"discuss-comment-form\">\n\t\t<div class=\"clearfull\">\n\t\t\t<div class=\"textarea_wrap\">\n\t\t\t\t<textarea id=\"comment\" name=\"comment\" class=\"textarea full-width commentMessage\"><\/textarea>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t\t<div class=\"row-fluid\">\n\t\t\t\t\t\t<div class=\"pull-left mt-5\">\n\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"tnc\" value=\"1\" class=\"commentTnc\" \/>\n\t\t\t\t\tT\u00f4i \u0111\u00e3\u0111\u1ecdc v\u00e0 \u0111\u00e3\u0111\u1ed3ng \u00fd <a href=\"javascript:void(0);\" class=\"comment-terms termsLink\">\u0110i\u1ec1u Ki\u1ec7n<\/a>\n\t\t\t\t<\/label>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"pull-right mt-5\">\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-small cancelButton\">H\u1ee7y<\/a>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-small btn-primary saveButton\">G\u1eedi<\/a>\n\t\t\t\t<span class=\"pull-right commentLoader discuss-loader\" style=\"display: none;\"><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t<\/div>\n<\/div>\n<input type=\"hidden\" name=\"post_id\" class=\"postId\" value=\"[%= id %]\">\n<\/form>\n<\/script>","easydiscuss\/post.notification":"<div class=\"discussNotification\">\n\t<div class=\"replyContainer\"[% if(newReply < 1) { %] style=\"display: none;\"[% } %]><span class=\"replyCount\">[%= newReply %]<\/span> <span class=\"replyText\">m\u1edbi tr\u1ea3l\u1eddi<\/span><\/div>\n\n\t<div class=\"commentContainer\"[% if(newComment < 1) { %] style=\"display: none;\"[% } %]><span class=\"commentCount\">[%= newComment %]<\/span> <span class=\"commentText\">m\u1edbi b\u00ecnh lu\u1eadn<\/span><\/div>\n\n\t<a href=\"javascript:document.location.reload(true)\" class=\"btn btn btn-mini btn-success\">L\u00e0m m\u1edbi trang<\/a>\n\n<\/div>\n<script type=\"text\/javascript\"><div class=\"discussNotification\">\n\t<div class=\"replyContainer\"[% if(newReply < 1) { %] style=\"display: none;\"[% } %]><span class=\"replyCount\">[%= newReply %]<\/span> <span class=\"replyText\">m\u1edbi tr\u1ea3l\u1eddi<\/span><\/div>\n\n\t<div class=\"commentContainer\"[% if(newComment < 1) { %] style=\"display: none;\"[% } %]><span class=\"commentCount\">[%= newComment %]<\/span> <span class=\"commentText\">m\u1edbi b\u00ecnh lu\u1eadn<\/span><\/div>\n\n\t<a href=\"javascript:document.location.reload(true)\" class=\"btn btn btn-mini btn-success\">L\u00e0m m\u1edbi trang<\/a>\n\n<\/div>\n<\/script>"});
$.require.language.loader({"COM_EASYDISCUSS_EXCEED_ATTACHMENT_LIMIT":"B\u1ea1n c\u00f3 t\u1ea5t c\u1ea3c\u00e1c t\u1eadp tin \u0111\u00ednh k\u00e8m gi\u1edbi h\u1ea1n m\u1ed7i b\u00e0i.","COM_EASYDISCUSS_TERMS_PLEASE_ACCEPT":"Xin vui l\u00f2ng ch\u1ea5p nh\u1eadn c\u00e1c \u0111i\u1ec1u ki\u1ec7n \u0111\u1ea7u ti\u00ean","COM_EASYDISCUSS_COMMENT_SUCESSFULLY_ADDED":"B\u00ecnh lu\u1eadn th\u00eam th\u00e0nh c\u00f4ng.","COM_EASYDISCUSS_COMMENT_LOAD_MORE":"N\u1ea1p th\u00eam \u00fd ki\u1ebfn","COM_EASYDISCUSS_COMMENT_LOADING_MORE_COMMENTS":"N\u1ea1p th\u00eam \u00fd ki\u1ebfn","COM_EASYDISCUSS_COMMENT_LOAD_ERROR":"N\u1ea1p l\u1ed7i","COM_EASYDISCUSS_CONVERSATION_EMPTY_CONTENT":"Xin vui l\u00f2ng nh\u1eadp m\u1ed9t s\u1ed1 tin nh\u1eafn.","COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR":"Hi\u1ec3n th\u1ecb l\u1ed7i.","COM_EASYDISCUSS_BBCODE_BOLD":"\u0110\u1eadm","COM_EASYDISCUSS_BBCODE_ITALIC":"Nghi\u00eang","COM_EASYDISCUSS_BBCODE_UNDERLINE":"G\u1ea1ch d\u01b0\u1edbi","COM_EASYDISCUSS_BBCODE_URL":"Link","COM_EASYDISCUSS_BBCODE_TITLE":"Ti\u00eau \u0111\u1ec1","COM_EASYDISCUSS_BBCODE_PICTURE":"\u1ea2nh","COM_EASYDISCUSS_BBCODE_VIDEO":"Video","COM_EASYDISCUSS_BBCODE_BULLETED_LIST":"Danh s\u00e1ch li\u1ec7t k\u00ea","COM_EASYDISCUSS_BBCODE_NUMERIC_LIST":"S\u1ed1 s\u00e1ch","COM_EASYDISCUSS_BBCODE_LIST_ITEM":"M\u1ee5c danh s\u00e1ch","COM_EASYDISCUSS_BBCODE_QUOTES":"Tr\u00edch","COM_EASYDISCUSS_BBCODE_CODE":"M\u00e3","COM_EASYDISCUSS_BBCODE_HAPPY":"H\u1ea1nh ph\u00fac","COM_EASYDISCUSS_BBCODE_SMILE":"N\u1ee5 c\u01b0\u1eddi","COM_EASYDISCUSS_BBCODE_SURPRISED":"Ng\u1ea1c nhi\u00ean","COM_EASYDISCUSS_BBCODE_TONGUE":"L\u01b0\u1ee1i","COM_EASYDISCUSS_BBCODE_UNHAPPY":"Kh\u00f4ng h\u1ea1nh ph\u00fac","COM_EASYDISCUSS_BBCODE_WINK":"C\u00e1i nh\u00e1y m\u1eaft","COM_EASYDISCUSS_FAVOURITE_BUTTON_UNFAVOURITE":"Unfavourite","COM_EASYDISCUSS_FAVOURITE_BUTTON_FAVOURITE":"Mark nh\u01b0 y\u00eau Th\u00edch","COM_EASYDISCUSS_UNLIKE_THIS_POST":"Kh\u00f4ng gi\u1ed1ng nh\u01b0 b\u00e0i n\u00e0y.","COM_EASYDISCUSS_LIKE_THIS_POST":"Th\u00edch b\u00e0i n\u00e0y.","COM_EASYDISCUSS_UNLIKE":"Kh\u00f4ng gi\u1ed1ng nh\u01b0","COM_EASYDISCUSS_LIKES":"Th\u00edch","COM_EASYDISCUSS_NOTIFICATION_NEW_REPLIES":"tr\u1ea3l\u1eddi m\u1edbi","COM_EASYDISCUSS_NOTIFICATION_NEW_COMMENTS":"\u00fd ki\u1ebfn m\u1edbi","COM_EASYDISCUSS_PLEASE_SELECT_CATEGORY_DESC":"Xin vui l\u00f2ng ch\u1ecdn m\u1ed9t danh m\u1ee5c \u0111\u1ea7u ti\u00ean tr\u01b0\u1edbc khi g\u1eedi m\u1eabu.","COM_EASYDISCUSS_POST_TITLE_CANNOT_EMPTY":"Xin vui l\u00f2ng nh\u1eadp ti\u00eau \u0111\u1ec1 c\u1ee7a cu\u1ed9c th\u1ea3o lu\u1eadn","COM_EASYDISCUSS_POST_CONTENT_IS_EMPTY":"N\u1ed9i dung l\u00e0 tr\u1ed1ng r\u1ed7ng, xin vui l\u00f2ng nh\u1eadp n\u1ed9i dung.","COM_EASYDISCUSS_SUCCESS":"Th\u00e0nh c\u00f4ng","COM_EASYDISCUSS_FAIL":"Th\u1ea5t b\u1ea1i","COM_EASYDISCUSS_REPLY_LOADING_MORE_COMMENTS":"N\u1ea1p th\u00eam c\u00e2u tr\u1ea3l\u1eddi","COM_EASYDISCUSS_REPLY_LOAD_ERROR":"N\u1ea1p l\u1ed7i"});
});
