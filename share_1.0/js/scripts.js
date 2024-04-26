window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


$(function() {
    
            var flexiblePagination = $('#content').flexiblePagination({
                itemsPerPage : 24,
                itemSelector : 'div.result:visible',
                pagingControlsContainer : '#pagingControls',
                showingInfoSelector : '#showingInfo',
                css: {
                    btnNumberingClass: 'btn btn-sm btn-success',
                    btnFirstClass: 'btn btn-sm btn-success',
                    btnLastClass: 'btn btn-sm btn-success',
                    btnNextClass: 'btn btn-sm btn-success',
                    btnPreviousClass: 'btn btn-sm btn-success'
                }
            });
            flexiblePagination.getController().onPageClick = function(pageNum, e){
                console.log('You Clicked Page: '+pageNum)
            };
    
    // Direct JS Object method of using the FlexiblePagination
    //        var pager = new Flexible.Pagination();
    //        pager.itemsPerPage = 1;
    //        pager.pagingContainer = '#content';
    //        pager.itemSelector = 'div.result:visible';  //That is, Select and paginate only the filtered visible '.result' div.
    //        pager.pagingControlsContainer = '#pagingControls';
    //        pager.showCurrentPage();
        });





 var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-36251023-1']);
          _gaq.push(['_setDomainName', 'jqueryscript.net']);
          _gaq.push(['_trackPageview']);
        
          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();






// function searchAndHighlight(searchTerm, selector) {
//     if(searchTerm) {
//         //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
//         //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
//         var selector = selector || "body";                             //use body as selector if none provided
//         var searchTermRegEx = new RegExp(searchTerm,"ig");
//         var matches = $(selector).text().match(searchTermRegEx);
//         if(matches) {
//             $('.highlighted').removeClass('highlighted');     //Remove old search highlights
//                 $(selector).html($(selector).html()
//                     .replace(searchTermRegEx, "<span class='highlighted'>"+searchTerm+"</span>"));
//             if($('.highlighted:first').length) {             //if match found, scroll to where the first one appears
//                 $(window).scrollTop($('.highlighted:first').position().top);
//             }
//             return true;
//         }
//     }
//     return false;
// }

// $(document).ready(function() {
//     $('#search-button').on("click",function() {
//         if(!searchAndHighlight($('#search-term').val())) {
//             alert("No results found");
//         }
//     });
// });



// function set_language(){
//     var language=jQuery('#language').val();
//     window.location.href='http://localhost/info-centre/?language='+language;
// }




//back to top button
var btn = $('#bttbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


