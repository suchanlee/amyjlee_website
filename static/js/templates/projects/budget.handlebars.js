(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['budget'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Inspiration</h2>\n<p class=\"dsfjkl\">\n  One of the first things I struggled with after graduating from college was budgeting. \"Saving up\" sounded easy but by the end of the month, I was always at a net zero. I wasn't sure how to set finance goals, observe my spending pattern, and analyze them based on categories. I tried some finance/budget apps like <a href=\"https://www.mint.com/\" target=\"_blank\">Mint</a> and <a href=\"https://itunes.apple.com/us/app/daily-budget-original-fastest/id651896614?ign-mpt=uo%3D8\" target=\"_blank\">Daily Budget</a> but nothing totally satisfied my needs.\n</p>\n<p>Those apps were definitely good and feature-ful but I had my own criteria:</p>\n<ul>\n  <li>Simple and easy to use</li>\n  <li>Follows the daily budget method</li>\n  <li>Super easy and fast to add transactions, but only manually (manually keeping track of transactions helps me be more aware of my budget)</li>\n  <li>No need to link my finance information to the application (credit cards, bank accounts, etc.)</li>\n  <li>No signing up</li>\n  <li>Sync data with other phones</li>\n</ul>\n<p>Apps like Mint were definitely too complex and required all my financial data with which I didn't feel comfortable. Daily Budget fit my needs the best, but it didn't sync with other phones without using iCloud and I hate using iCloud and didn't want to use iCloud just for this app. :/. Being able to sync is a must-have feature for me because my husband and I have combined our finances and are on a single budget.</p>\n\n<h2>Design Process</h2>\n<p>There were multiple facets to the product: onboarding, recording transactions, analytics, and connecting with other devices. It was important to carefully adjust to these layers but keep the design simple and quickly learnable.</p>\n<a href=\"/static/img/projects/budget/sketch.png\" target=\"_blank\">\n  <img class=\"project-image\" src=\"/static/img/projects/budget/sketch.png\" alt=\"budget app sketches\">\n</a>\n\n<div class=\"project-details-container\">\n  <h3>Initial Take</h3>\n  <div class=\"project-details-third text\">\n    My initial take was to be more visual and analytics-focused, as shown on the preliminary mocks. Understanding the spending and saving patterns seemed as important as recording the daily expenses. But after using the Daily Budget app more and more, I found that I rarely ever looked at the analytics and cared most about \"how much budget do I have left?\".\n  </div>\n  <div class=\"project-details-third\">\n    <a href=\"/static/img/projects/budget/old1.png\" target=\"_blank\">\n      <img src=\"/static/img/projects/budget/old1.png\" alt=\"initial mock 1 for budget app\">\n    </a>\n  </div>\n  <div class=\"project-details-third\">\n    <a href=\"/static/img/projects/budget/old2.png\" target=\"_blank\">\n      <img src=\"/static/img/projects/budget/old2.png\" alt=\"initial mock 2 for budget app\">\n    </a>\n  </div>\n</div>\n<div class=\"project-details-container\">\n  <h3>Second Round</h3>\n  <div class=\"project-details-third text\">\n    <p>After removing the analytics from the main page, I questioned the structure of a daily budget: shouldn't it be more specific? Knowing how much I can spend in certain categories seemed more useful. For instance, there could be a weekly budget for eating out or groceries.</p>\n    <p>But this direction clashed with the daily budgeting method and increased the complexity of the application.</p>\n    <p>So instead of trying to come up with a new and innovative way of recording and viewing spendings, I focused on simplification and adding the main feature missing from Daily Budget, sync.</p>\n  </div>\n  <div class=\"project-details-third\">\n    <a href=\"/static/img/projects/budget/old3.png\" target=\"_blank\">\n      <img src=\"/static/img/projects/budget/old3.png\" alt=\"initial mock 3 for budget app\">\n    </a>\n  </div>\n</div>\n\n<h2>Final Mock</h2>\n<div class=\"centered-text\">\n  <video class=\"budget-video\" src=\"/static/img/projects/budget/full.mp4\" type=\"video/mp4\" preload=\"metadata\" controls></video>\n</div>\n\n<h2 class=\"budget-interactions\">Interactions</h2>\n  <h3>Adding Expenses</h3>\n  <div class=\"budget-interaction-container centered-text\">\n    <div class=\"budget-interaction video\">\n      <video src=\"/static/img/projects/budget/adding_expense.mov\" controls></video>\n    </div>\n    <div class=\"budget-interaction text\">\n      Adding expenses or extra income should be simple. This behavior should feel seamless and effortless. In here, I tried to simplify and condense some of the steps and provide visual queues with colors.\n    </div>\n  </div>\n  <div class=\"budget-interaction-container\">\n    <div class=\"project-details-quarter\">\n      Tap the minus button (or the plus button for extra income) and choose from the default categories, such as coffee, groceries, gas, etc. These categories can be edited and users can add new categories.\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-0.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-0.png\" alt=\"budget expense 0\">\n      </a>\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-1.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-1.png\" alt=\"budget expense 1\">\n      </a>\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-2.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-2.png\" alt=\"budget expense 2\">\n      </a>\n    </div>\n  </div>\n  <div class=\"project-details-half\">\n    <p>Then, enter the amount spent. Notes can be added for more detailed categorization.</p>\n    <p>Activity is logged and listed by time and color-coded based on the category. The activities view is accessible from the main menu.</p>\n  </div>\n  <div class=\"budget-interaction-container\">\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-3.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-3.png\" alt=\"budget expense 3\">\n      </a>\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-4.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-4.png\" alt=\"budget expense 4\">\n      </a>\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/expense-5.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/expense-5.png\" alt=\"budget expense 5\">\n      </a>\n    </div>\n    <div class=\"project-details-quarter\">\n      <a href=\"/static/img/projects/budget/activities.png\" target=\"_blank\">\n        <img src=\"/static/img/projects/budget/activities.png\" alt=\"budget activities\">\n      </a>\n    </div>\n  </div>\n\n  <div class=\"project-details-container\">\n    <h3>Connecting with Other Devices</h3>\n    <h4>Sending the passcode</h4>\n    <div class=\"budget-interaction-container centered-text\">\n      <div class=\"budget-interaction video\">\n        <video src=\"/static/img/projects/budget/connect_01.mov\" controls></video>\n      </div>\n      <div class=\"budget-interaction text\">\n        A passcode is used to allow other devices to sync with your budget. This code is sent via text message and must be entered on this application on the designated device.\n      </div>\n    </div>\n    <div class=\"budget-interaction-container\">\n      <div class=\"project-details-third\">\n        <a href=\"/static/img/projects/budget/connect.png\" target=\"_blank\">\n          <img src=\"/static/img/projects/budget/connect.png\" alt=\"budget connect\">\n        </a>\n      </div>\n      <div class=\"project-details-third\">\n        <a href=\"/static/img/projects/budget/send_code.png\" target=\"_blank\">\n          <img src=\"/static/img/projects/budget/send_code.png\" alt=\"budget send code\">\n        </a>\n      </div>\n      <div class=\"project-details-third\">\n        <a href=\"/static/img/projects/budget/send_success.png\" target=\"_blank\">\n          <img src=\"/static/img/projects/budget/send_success.png\" alt=\"budget send success\">\n        </a>\n      </div>\n    </div>\n    <h4>Syncing</h4>\n    <div class=\"budget-interaction-container centered-text\">\n      <div class=\"budget-interaction video\">\n        <video src=\"/static/img/projects/budget/connect_02.mov\" controls></video>\n      </div>\n      <div class=\"budget-interaction text\">\n        Enter the 4-digit code to sync with another device. Since a new budget is being added, the user will be prompted to either keep or replace the current budget\n      </div>\n    </div>\n    <div class=\"budget-interaction-container\">\n      <div>\n        <div class=\"project-details-quarter\">\n          <a href=\"/static/img/projects/budget/retrieve.png\" target=\"_blank\">\n            <img src=\"/static/img/projects/budget/retrieve.png\" alt=\"budget retreive 0\">\n          </a>\n        </div>\n        <div class=\"project-details-quarter\"> \n          <a href=\"/static/img/projects/budget/retrieve-3.png\" target=\"_blank\">\n            <img src=\"/static/img/projects/budget/retrieve-3.png\" alt=\"budget retreive 1\">\n          </a>\n        </div>\n        <div class=\"project-details-quarter\" >\n          <a href=\"/static/img/projects/budget/retrieve-4.png\" target=\"_blank\">\n            <img src=\"/static/img/projects/budget/retrieve-4.png\" alt=\"budget retreive 2\">\n          </a>\n        </div>\n        <div class=\"project-details-quarter\" >\n          <a href=\"/static/img/projects/budget/retrieve-6.png\"target=\"_blank\">\n            <img src=\"/static/img/projects/budget/retrieve-6.png\" alt=\"budget retreive 3\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<a href=\"/static/img/projects/budget/rendering2.png\" target=\"_blank\">\n  <img src=\"/static/img/projects/budget/rendering2.png\" alt=\"budget rendering2\" class=\"project-image\">\n</a>\n";
},"useData":true});
})();