(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['yogo'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>Yogo is an extremely simple and easy tool for creating and sending out one-time use polls. It provides a user-friendly UI for poll creation and an informative visualization of the results.</p>\n\n<h2>The Story</h2>\n<p>Yogo started out as a project called <a href=\"http://bezzist.com\" target=\"_blank\">Bezzist</a> by a group of Cornell students in <a href=\"http://lifechanginglabs.com/\" target=\"_blank\">Life Changing Labs</a>. When Bezzist was first launched, it focused on creating and enhancing the Cornell campus community and was a very client-specific tool. Due to lower user-adoption, the team eventually stopped working on Bezzist. However, wanting to create a more general tool for poll creation, one of the engineers in the project decided to advance with the plans and asked me to help.</p>\n<a href=\"/static/img/projects/yogo/oldbezzist.png\">\n  <img src=\"/static/img/projects/yogo/oldbezzist.png\" alt=\"Screenshot of Bezzist\" class=\"project-image project-image-in-text image-width-50\">\n</a>\n<p class=\"project-image-caption\">Screenshot of Bezzist</p>\n<p>The result of that is Yogo, a professional yet simple tool with clean UI and friendly UX to create and use polls super fast.</p>\n\n<h2>Design</h2>\n<p>While designing Yogo, I focused on:</p>\n<ol>\n  <li>Making the app immediately usable: requiring user information adds a layer between the application and the user and because we don’t need the user’s information to create a poll, it was removed.</li>\n  <li>Establishing coherent data visualization and analytics: in order to optimize the experience ultimately, it was important for the users to easily comprehend collected information.</li>\n</ol>\n<a href=\"/static/img/projects/yogo/landing.png\">\n  <img src=\"/static/img/projects/yogo/landing.png\" alt=\"Yogo landing\" class=\"project-image image-width-100\">\n</a>\n<p class=\"project-image-caption\">Landing page of Yogo. There is no need to sign up or enter email. Need to make a poll? Fire away.</p>\n\n<h2>Sketches</h2>\n<a href=\"/static/img/projects/yogo/sketches.png\">\n  <img src=\"/static/img/projects/yogo/sketches.png\" alt=\"Yogo sketches\" class=\"project-image image-width-100\">\n</a>\n\n<h2>Iterations</h2>\n<a href=\"/static/img/projects/yogo/iterations.png\">\n  <img src=\"/static/img/projects/yogo/iterations.png\" alt=\"Yogo iterations\" class=\"project-image image-width-100\">\n</a>\n<p>Before I got to the final mocks, I went through multiple iterations only on the landing page. It was crucial to understand the priority and hierarchy of the pages. Initially, I made something very similar to Doodle. It had a series of welcoming, tutorial, and set up pages until the actual poll page. At the time, I believed it was important to have a solid onboarding process to use the product and therefore the product became unnecessarily complicated. Then I realized Yogo should be simple enough that it does not need any onboarding process. Ultimately, I gutted away all the other pages but the poll page itself.</p>\n<p>In order to understand the priority and hierarchy of the pages, I spent multiple iterations only on the landing page. Initially I made something similar to Doodle, consisting of a welcoming, tutorial, and setup pages leading to the actual poll page. At the time, I believed a solid onboarding process for the product was necessary. However, this made Yogo unnecessarily complicated, causing me to realize a critical point: Yogo should be simple enough to not need any onboarding process. Following true to my realization, I removed all the other pages and only kept the poll page itself.</p>\n\n<h2>Interactive Mock</h2>\n<div class=\"yogo-invision-container\">\n  <a href=\"https://projects.invisionapp.com/share/MK41WRNA6#/screens\" target=\"_blank\" class=\"yogo-invision-link\"></a>\n  <a href=\"https://projects.invisionapp.com/share/MK41WRNA6#/screens\" target=\"_blank\"  class=\"yogo-invision-text\">Click to view interactive mock on InVision</a>\n  <a href=\"/static/img/projects/yogo/mockup.png\">\n    <img src=\"/static/img/projects/yogo/mockup.png\" alt=\"Yogo iMac shot\" class=\"project-image image-width-100\">\n  </a>\n</div>\n\n<h2>Static Mocks</h2>\n<a href=\"/static/img/projects/yogo/view1.png\">\n  <img src=\"/static/img/projects/yogo/view1.png\" alt=\"Yogo poll creation and home page\" class=\"project-image project-image-in-text image-width-100\">\n</a>\n<p class=\"project-image-caption\">Creating poll: Share button will finalize the poll creation and generate a unique URL.</p>\n<a href=\"/static/img/projects/yogo/view2.png\">\n  <img src=\"/static/img/projects/yogo/view2.png\" alt=\"Yogo poll view\" class=\"project-image project-image-in-text image-width-100\">\n</a>\n<p class=\"project-image-caption\">Poll view: what participants would see once they receive the link to poll.</p>\n<a href=\"/static/img/projects/yogo/view3.png\">\n  <img src=\"/static/img/projects/yogo/view3.png\" alt=\"Yogo analytics\" class=\"project-image project-image-in-text image-width-100\">\n</a>\n<p class=\"project-image-caption\">Poll analytics</p>\n\n<h2>Detailed Interactions</h2>\n<div class=\"yogo-detail\">\n  <a href=\"/static/img/projects/yogo/detail1_vote.png\">\n    <img src=\"/static/img/projects/yogo/detail1_vote.png\" alt=\"Yogo detailed interaction: vote\" class=\"yogo-detail-image\">\n  </a>\n  <div class=\"yogo-detail-text\">\n    <h3>Vote</h3>\n    <p>Clicking on the arrow on the left will count as a vote. Depending on the voting options, participants may be able to vote for multiple ones.</p>\n  </div>\n</div>\n\n<div class=\"yogo-detail\">\n  <a href=\"/static/img/projects/yogo/detail2_pw.png\">\n    <img src=\"/static/img/projects/yogo/detail2_pw.png\" alt=\"Yogo detailed interaction: password\" class=\"yogo-detail-image\">\n  </a>\n  <div class=\"yogo-detail-text\">\n    <h3>Password lock for results</h3>\n    <p>Based on preferences, the results page may be password protected. The password can be set during creation process.</p>\n  </div>\n</div>\n\n<div class=\"yogo-detail\">\n  <a href=\"/static/img/projects/yogo/detail3_share.png\">\n    <img src=\"/static/img/projects/yogo/detail3_share.png\" alt=\"Yogo detailed interaction: share\" class=\"yogo-detail-image\">\n  </a>\n  <div class=\"yogo-detail-text\">\n    <h3>Share</h3>\n    <p>Yogo will generate a unique URL for your poll. Simply copy and paste the link to share with anyone, anywhere.</p>\n  </div>\n</div>\n\n<div class=\"yogo-detail\">\n  <a href=\"/static/img/projects/yogo/detail4_export.png\">\n    <img src=\"/static/img/projects/yogo/detail4_export.png\" alt=\"Yogo detailed interaction: export\" class=\"yogo-detail-image\">\n  </a>\n  <div class=\"yogo-detail-text\">\n    <h3>Export</h3>\n    <p>Want to save these data for further analysis? Export to CSV format.</p>\n  </div>\n</div>\n\n<h2>Logo Ideation</h2>\n<a href=\"/static/img/projects/yogo/logo+iterations.png\">\n  <img src=\"/static/img/projects/yogo/logo+iterations.png\" alt=\"Logo and iterations of Yogo\" class=\"project-image project-image-in-text image-width-100\">\n</a>\n\n";
},"useData":true});
})();