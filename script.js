console.log("Begin");

function handleOnReady() {
    // $("#compose-button").on('mouseenter', function () {
    //     $('.email-row').addClass('highlight');
    // })
    // $("#compose-button").on('mouseleave', function () {
    //     $('.email-row').removeClass('highlight')
    // })
    // $('.email-row').on('click', function () {
    //     $(this).remove();
    // })
    // $("#compose-button").on('click', function () {
    //     var emailsRows = $('#emails-rows');
    //     for (var i = 0; i < 25; i++) {
    //         var newElement = $(`
    //                 <div class="email-row">
    //                     <div class="sender">
    //                         <div class="email-selector">
    //                             <img src="./image/checkbox.svg" alt="" />
    //                         </div>
    //                         <img src="./image/star.svg" alt="" />
    //                         <span>
    //                             Google
    //                         </span>
    //                     </div>
    //                     <div class="emails">
    //                         <div class="email">
    //                             <span>
    //                                 <b>Alerta de securitate | [index: ${i}]</b>
    //                             </span>
    //                             <span>-</span>
    //                             <span>
    //                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, officiis. <br />
    //                             </span>
    //                         </div>
    //                     </div>
    //                     <div class="date-received">
    //                         <span>6 mai <br /></span>
    //                     </div>
    //                 </div>
    //             `)
    //         emailsRows.append(newElement);
    //     }
    // })
    // $('#hide-panel').on('click', function () {
    //     $('#sidebar-right').toggle();
    // })

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
