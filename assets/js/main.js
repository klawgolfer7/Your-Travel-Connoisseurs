$(document).ready(function($) {

    $(".element").typed({
        showCursor: false,
        strings: ["Let The Travel Connoisseur find your Paradise!  Whether it's an anniversary trip with that special someone, a girlfriend's group to Napa Valley, a family trip to Ireland, or an Alaskan cruise, nothing is too big or too small!  Be confident that you will work directly with The Travel Connoisseur to ensure a seamless vacation. Being in the travel industry for over 10 years, has granted me the fortune to visit many exciting destinations! As a result, you will receive up-to-date and honest advice within your budget, as well as exemplary service from start to finish. Call today at 630-655-9462 and let The Travel Connoisseur make your next vacation one you will never forget!", "Let The Travel Connoisseur find your Paradise!  Whether it's an anniversary trip with that special someone, a girlfriend's group to Napa Valley, a family trip to Ireland, or an Alaskan cruise, nothing is too big or too small!  Be confident that you will work directly with The Travel Connoisseur to ensure a seamless vacation. Being in the travel industry for over 10 years, has granted me the fortune to visit many exciting destinations! As a result, you will receive up-to-date and honest advice within your budget, as well as exemplary service from start to finish. Call today at 630-655-9462 and let The Travel Connoisseur make your next vacation one you will never forget!",],
        typeSpeed: 0
        
      });
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    //  Bootstrap Tooltip for Skillset 
    // $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    // $("#rss-feeds").rss(
    
    //     //Change this to your own rss feeds
    //     "http://feeds.feedburner.com/TechCrunch/startups",
        
    //     {
    //     // how many entries do you want?
    //     // default: 4
    //     // valid values: any integer
    //     limit: 3,
        
    //     // the effect, which is used to let the entries appear
    //     // default: 'show'
    //     // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    //     effect: 'slideFastSynced',
        
    //     // outer template for the html transformation
    //     // default: "<ul>{entries}</ul>"
    //     // valid values: any string
    //     layoutTemplate: "<div class='item'>{entries}</div>",
        
    //     // inner template for each entry
    //     // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    //     // valid values: any string
    //     entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
    //     }
    // );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "klawgolfer7");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "klawgolfer7", selector: "#ghfeed" });


});