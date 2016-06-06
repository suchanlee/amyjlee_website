(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['coffee'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>Coffee Timer was designed to help make gourmet coffee easily at home. It has preset timer and instructions for various brewing methods, such as French Press, Hario V60, and Chemex. Users can also add customized timers that fit better with their own brewing method. Timer sets include suggested amounts of coffee and water, total brew duration, and other useful brewing information.</p>\n\n<h2>Design Process</h2>\n<a href=\"/static/img/projects/chromedl/screenshot01.png\">\n  <img src=\"/static/img/projects/chromedl/screenshot01.png\" alt=\"chrome current download ui\" class=\"project-image image-width-80\">\n</a>\n<p class=\"project-image-caption\">Preliminary sketches and mocks</p>\n<p>Some challenges I faced while designing were</p>\n<ul>\n  <li>Displaying the different stages of brewing in a seamless, progressive manner</li>\n  <li>Showcasing both progression of time and visual location of the queues on the radial path (i.e. at 30' mark, bloom stage stops)</li>\n  <li>Displaying descriptions for the different brewing stages</li>\n  <li>Supporting pausing and how to strategically place the pause button</li>\n</ul>\n\n<h2>Final Mock Video</h2>\n<video src=\"/static/img/projects/coffee/final_mock.mp4\" type=\"video/mp4\" preload=\"metadata\" controls></video>\n\n<h2>Details</h2>\n<h3>Timer disection</h3>\n<a href=\"/static/img/projects/coffee/disection.png\">\n  <img src=\"/static/img/projects/coffee/disection.png\" alt=\"details of the image\" class=\"project-image\">\n</a>\n\n<div class=\"coffee-details-container\">\n  <h3>Brewing options</h3>\n  <div class=\"coffee-details-third\">\n    <p>Coffee Timer comes with four preset brewing timers: Chemex, French Press, V60 and Aeropress. These timers feature brewing guides on different yield counts. For instance, the French Press timer caters to three general sizes of the French Press kettle.</p>\n    <p>Users can also add customized timers by pressuing the Custom button on the main page.</p>\n  </div>\n  <div class=\"coffee-details-third\">\n    <a href=\"/static/img/projects/coffee/home.png\">\n      <img src=\"/static/img/projects/coffee/home.png\" alt=\"coffee main page\">\n    </a>\n  </div>\n  <div class=\"coffee-details-third\">\n    <video src=\"/static/img/projects/coffee/frenchpress_full.mp4\" type=\"video/mp4\" preload=\"metadata\" controls></video>\n  </div>\n</div>\n\n<div class=\"coffee-details-container\">\n  <h3>Adding a custom brew</h3>\n  <p>Users can add custom brew by selecting the Custom button from the menu.</p>\n  <p>The name of the timer, total brew time, and other brewing notes (water, temperature, coffee amount, etc) can be edited. Then, using the circular motion on the radial timer pad, users can add the different brewing stages.</p>\n  <div class=\"coffee-details-inner-container\">\n    <div class=\"coffee-details-third\">\n      <a href=\"/static/img/projects/coffee/custom1.png\">\n        <img src=\"/static/img/projects/coffee/custom1.png\" alt=\"coffee timer custom brew create page\">\n      </a>\n    </div>\n    <div class=\"coffee-details-third\">\n      <a href=\"/static/img/projects/coffee/custom2.png\">\n        <img src=\"/static/img/projects/coffee/custom2.png\" alt=\"coffee timer custom brew create page 2\">\n      </a>\n    </div>\n    <div class=\"coffee-details-third\">\n      <video src=\"/static/img/projects/coffee/custom.mp4\" type=\"video/mp4\" preload=\"metadata\" controls></video>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();