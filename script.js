console.log("Begin");

function handleOnReady() {

    $('.email-category-tab').on('click', function () {
        const tabElm = $(this);
        const activeClassName = 'email-category-tab-active';
        const hasActiveClass = tabElm.hasClass(activeClassName);

        function showOnlyEmailsWithClassName() {
            $('.' + activeClassName).removeClass(activeClassName);
            tabElm.addClass(activeClassName);
            $('.email-row').hide();
            var classNameOfElementsThatWillBeVisible = '.' + tabElm.attr('data-active-emails');
            $(classNameOfElementsThatWillBeVisible).show();
        }

        function showAllEmails() {
            tabElm.removeClass(activeClassName);
            $('.email-row').show();
        }

        if (!hasActiveClass) {
            showOnlyEmailsWithClassName();
        } else {
            showAllEmails();
        }
    });
    $('.option-inbox').on('click', function(){
        const inboxEmails = $(this);
        const optionActiveClassName = 'option-active';
        const optionActive = inboxEmails.hasClass(optionActiveClassName);
        var inboxEmailsShown = '.' + inboxEmails.attr('data-active-emails');

        function showInboxEmails() {
            $('.' + optionActiveClassName).removeClass(optionActiveClassName);
            inboxEmails.addClass(optionActiveClassName);
            $('.email-row').hide();
            $(inboxEmailsShown).show();
        }

        if(!optionActive){
            showInboxEmails();
        } else {
            $(inboxEmails).removeClass(optionActiveClassName);
            $('.email-row').show();
        }
    });
    $('.option-star').on('click', function(){
        const starredEmails = $(this);
        const optionActiveClassName = 'option-active';
        const optionActive = starredEmails.hasClass(optionActiveClassName);
        var starredEmailsShown = '.' + starredEmails.attr('data-active-emails');

        function showStarredEmails() {
            $('.' + optionActiveClassName).removeClass(optionActiveClassName);
            starredEmails.addClass(optionActiveClassName);
            $('.email-row').hide();
            $(starredEmailsShown).show();
        }

        if(!optionActive){
            showStarredEmails();
        } else {
            $(starredEmails).removeClass(optionActiveClassName);
            $('.email-row').show();
        }
    });
    $('.email-star').on('click', function() {
        if( $(this).hasClass('email-star-selected') ) {
            $(this).removeClass('email-star-selected');
        } else {
            $(this).addClass('email-star-selected');
        }
    });
    $('.email-checkbox').on('click', function() {
        if( $(this).hasClass('email-checkbox-selected') ) {
            $(this).removeClass('email-checkbox-selected');
        } else {
            $(this).addClass('email-checkbox-selected');
        }
    });
}

$(function () {
    handleOnReady();
})

console.log("End");
