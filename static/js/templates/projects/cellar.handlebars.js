(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cellar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Cellar 55 is a redesign of an existing wine archive by SommSelect, a website that sells one wine a day. My husband and I have been a huge fan of the site and the sommelier behind it; each wine is presented with beautiful descriptions, great stories of the winery, and mouthwatering tasting notes. Hence, we were thrilled when we were given a permission to archive their data for personal purposes. We used the wine entries as a study guide--to learn more about the different varietals, wineries, regions, and tasting methods. </p>\n\n<p>Then one day, when I saw the <a href=\"http://www.sommselect.com/wines\" target=\"_blank\">archive</a> SommSelect has launched, I couldn’t hide my disappointments. All the filters were very difficult to use and the list was hard to read. Most importantly, the archive wasn’t fully archiving! Filters were hard coded and anything that did not match with them would be rejected and not archived. </p>\n<p>So my husband and I decided to make a new archive. </p>\n\n<div class=\"launch-site\">\n  <a href=\"http://cellar55.suchanlee.com/\" target=\"_blank\"><img src=\"/static/img/projects/cellar/air_mockup-02.png\" class=\"launch-img\"></a>\n  <div class=\"overlay-wrap\">\n    <div class=\"overlay\"><a href=\"http://cellar55.suchanlee.com/\" target=\"_blank\" class=\"cellar-link\">LAUNCH SITE</a></div>\n  </div>\n</div>\n\n<h2>Approach</h2>\n<p>First step in approaching this project was to define the problem and targeted user group.</p>\n<h3>Defining the problem</h3>\n<p>While using the existing archive, these are some of the issues I ran into:</p>\n<ul>\n  <li>All the filters are formatted in dropdown style, which is very difficult to use.</li>\n  <li>Hard coded filters: if item does not match the categories within the hard coded filters, it won't get archived.</li>\n  <li>Because of the dropdown style, multi-selection is impossible. This limits the search behavior.</li>\n  <li>List view of all the wines is difficult to see and navigate.</li>\n  <li>There is no indication on the number of results.</li>\n</ul>\n<h3>Finding the targeted user group</h3>\n<p>For this project specifically, it was critical to establish a targeted user group. This decision was made carefully because when I tried to cater to a wider audience, education became a very large part of the product. And education was not something I wanted to focus for the initial launch. Hence, ideal group of users would be those who have familiarity to the SommSelect product and some degree of knowledge in wine.</p>\n\n<a href=\"/static/img/projects/cellar/pres_1.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_1.png\" class=\"old-pres-img\">\n</a>\n\n<a href=\"/static/img/projects/cellar/pres_2.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_2.png\" class=\"old-pres-img\">\n</a>\n\n<a href=\"/static/img/projects/cellar/pres_3.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_3.png\" class=\"old-pres-img\">\n</a>\n\n<a href=\"/static/img/projects/cellar/pres_4.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_4.png\" class=\"old-pres-img\">\n</a>\n\n<a href=\"/static/img/projects/cellar/pres_5.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_5.png\" class=\"old-pres-img\">\n</a>\n\n<a href=\"/static/img/projects/cellar/pres_6.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pres_6.png\" class=\"old-pres-img\">\n</a>\n<p class=\"project-image-caption\">Some framework from earlier stages. I created a brief guide book of the initial steps I took in approaching the project. </p>\n\n<h2>Preliminary Mocks</h2>\n<a href=\"/static/img/projects/cellar/pre-mock1.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pre-mock1.png\" class=\"old-pres-img\">\n</a>\n<a href=\"/static/img/projects/cellar/pre-mock2.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pre-mock2.png\" class=\"old-pres-img\">\n</a>\n<a href=\"/static/img/projects/cellar/pre-mock3.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pre-mock3.png\" class=\"old-pres-img\">\n</a>\n<a href=\"/static/img/projects/cellar/pre-mock4.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/cellar/pre-mock4.png\" class=\"old-pres-img\">\n</a>\n\n<p>When I got to the preliminary iterations, I often found myself going off tangent. I was too excited with the fact that I could do so many different things with this data set! I could create a location-based platform or a wine and food pairing site. There were too many. </p>\n<p>Yet, these didn’t fulfill the specs and goals I had established earlier. In the beginning, I simply wanted to create a great wine archive with thorough filters, great search, and accessibility. Also, I couldn’t really move forward with these mocks. Even though I was excited to try something new, because I didn’t have the foundation laid out (meaning, the problem, specs, goals, persona and other important stuff I had determined in the earlier stage). So whenever I saw myself going off track, I reminded myself with the initial goals. </p>\n\n<h2>Design Decisions</h2>\n<ul>\n  <li>Filters reflect the data!\n    <ul>\n      <li>All filters are created by the information of wines. For instance, if there is a new wine with a new varietal, that varietal will be added to the filters. </li>\n    </ul>\n  </li>\n  <li>\n    Filters are located on the side of the page, instead of being on top of the page.\n    <ul>\n      <li>Having it on the side and collapsible enhances the reading experience.</li>\n      <li>Structurally, because the filters can be lengthy, it was important to separate the filters and list sections. I did not want the lengthy filters to interfere with the list.</li>\n    </ul>\n  </li>\n  <li>\n    Multi-selection is available. \n    <ul>\n      <li>Because the filters are not in the dropdown format, users can now multi-select. You can search for Pinot Noir and Cabernet Sauvignon from 2009 to 2015 now.</li>\n    </ul>\n  </li>\n  <li>\n    Clear all option\n    <ul>\n      <li>No need to worry about un-clicking all the items selected.</li>\n    </ul>\n  </li>\n  <li>Search within results</li>\n  <li>\n    Number of results available on the top right corner \n    <ul>\n      <li>It’s useful to know how many items you’d be scrolling through or how long the page is. </li>\n    </ul>\n  </li>\n  <li>\n    Color-coded based on wine types.\n    <ul>\n      <li>\n        Having a visual queue helps confirming the search \n      </li>\n    </ul>\n  </li>\n</ul>\n\n<h2>Final Design</h2>\n<p>In case you missed the link atop of the page!</p>\n<div class=\"launch-site\">\n  <a href=\"http://cellar55.suchanlee.com/\" target=\"_blank\"><img src=\"/static/img/projects/cellar/air_mockup-02.png\" class=\"launch-img\"></a>\n  <div class=\"overlay-wrap\">\n    <div class=\"overlay\"><a href=\"http://cellar55.suchanlee.com/\" target=\"_blank\" class=\"cellar-link\">LAUNCH SITE</a></div>\n  </div>\n</div>\n\n<h2>Next Steps</h2>\n<ul>\n  <li>Incorporate helpful tips on the filters.\n    <ul>\n      <li>Having a “view on the map” option for regions</li>\n      <li>Indicating the number of entries for each varietal </li>\n    </ul>\n  </li>\n  <li>\n    Remove the Apply Filters button\n    <ul>\n      <li>I’ve received a few feedback that having to click the button enable the search seems unnecessary. </li>\n    </ul>\n  </li>\n  <li>\n    Product page\n    <ul>\n      <li>Incorporate more information of the winery (direct link to winery site, map, images, etc.) </li>\n      <li>Provide food pairing and recipes</li>\n    </ul>\n  </li>\n</ul>\n";
},"useData":true});
})();