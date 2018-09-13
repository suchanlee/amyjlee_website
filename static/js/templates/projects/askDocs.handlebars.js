(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['askDocs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Goal</h2>\n<p>\n  <a href=\"https://www.healthtap.com/\" target=\"_blank\">HealthTap</a> aims to make health care affordable and accessible via telemedicine and remote consultations through its <a href=\"https://itunes.apple.com/us/app/healthtap/id466079030?mt=8\" target=\"_blank\">mobile app</a>. It provides 4 ways for users to talk to doctors:\n</p>\n<ol>\n  <li>Send a message</li>\n  <li>Schedule a virtual appointment</li>\n  <li>Hop on a call with a doctor online at the moment</li>\n  <li>Post an anonymous question</li>\n</ol>\n<p>\n  It's important for the users to know these four options and their prices and triage the best method of consult for their case. The workflow of triaging the best consult method is called <b>Ask Docs</b>. It is the most heavily advertised feature of the HealthTap app.\n</p>\n\n<p>My first project at HealthTap was to redesign this flow of the app.</p>\n\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/01-old.png\" alt=\"What Ask Docs looked like when I joined\">\n  <figcaption>What Ask Docs looked like when I joined</figcaption>\n</div>\n\n<div class=\"project-detail-divider\"></div>\n\n<h2>Problem</h2>\n\n<h3>1. Low Conversion Rate (< 40%)</h3>\n\n<h4>Users found the flow and the results to be complicated and hard to understand.</h4>\n<p>The flow required users to make a series of decisions but the decision points did not reflect the way people usually seek help. And after hurdling through these decision points, the results were often unsatisfying.</p>\n\n<h4>Confusing and unexpectedly changing UI</h4>\n<p>The visibility of some features were based on doctors' online availability. Instead of displaying features as inactive, they were hidden away when doctors were offline which made feature discoverability difficult. For example, interviews show that it was difficult for users to learn that the on-demand service offered only when the doctors are online.</p>\n\n<h3>2. Angry Customers</h3>\n<h4>Advertised != Actual</h4>\n<p>Many of the unhappy reviews on the App Store read: <br/>\n<b>\"WHERE IS THE FREE OPTION?!\"</b></p>\n<P>While the app was heavily advertised for its \"free\" medical consultation, the free option was difficult to find in the app.</P>\n<p>Aligning with the user's expectations and clarifying the provided services seemed like a logical improvement.</p>\n\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/disection-01.png\">\n  <img src=\"/static/img/projects/askdocs/disection-02.png\">\n  <img src=\"/static/img/projects/askdocs/disection-03.png\">\n</div>\n\n<div class=\"project-detail-divider\"></div>\n\n<h2>Steps to solving the problem</h2>\n\n<h3>1. Gather feedback</h3>\n<h4>Talk and step through the design with the Customer Success team</h4>\n<p>The Customer Success team gathers customer feedback and complaints. Even before actually reaching out to the users, by talking to the team, I was able to map out major problems and confusion on the Ask Docs flow.</p>\n\n<h4>Observational interviews</h4>\n<p>I conducted a series of interviews in coffee shops in Palo Alto. Interviewees were first shown the current product. I then gave them a scenario (i.e. tell me how you’d use this app when you found out that you’ve got a rash on your back) and asked them to walk through what they’d do in the current Ask Docs flow.</p>\n\n<div class=\"slideshow-container\">\n  <img src=\"/static/img/projects/askdocs/sketch-01.png\">\n  <img src=\"/static/img/projects/askdocs/sketch-02.png\">\n</div>\n\n<p>I first started with making minimal tweaks to the existing design:</p>\n\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/iteration-01.png\">\n</div>\n\n<h3>2. Mimic our most natural behavior</h3>\n\n<p>Then I thought about how we usually seek medical help or inquiries. What do I do when I'm sick? When I have backpain? I jotted down the process and doodled the interactions. I compared this to the existing design:</p>\n\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/old-vs-new.png\">\n</div>\n\n<h3>3. Ideate, iterate, and repeat</h3>\n<p>As shown in the flow chart above, I wanted the flow to mimic our real life interactions with a doctor. I made the following major changes to the flow:</p>\n<ul>\n  <li>Start with asking about their concern</li>\n  <li>Provide a list of options to choose from</li>\n  <li>Display doctors sorted by relevance, availability, and location</li>\n  <li>Remove all marketing/internal jargon</li>\n  <li>Minimize information overload</li>\n</ul>\n\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/iteration-02.png\">\n</div>\n\n<p>After outlining the main flow, I iterated on smaller details.</p>\n\n<div class=\"slideshow-container\">\n  <img src=\"/static/img/projects/askdocs/iteration-04.png\">\n  <img src=\"/static/img/projects/askdocs/iteration-03.png\">\n</div>\n\n<div class=\"project-detail-divider\"></div>\n\n<h2 class=\"final-design\">Final Design</h2>\n<div class=\"image-container\">\n  <img src=\"/static/img/projects/askdocs/final-flow.png\">\n  <img src=\"/static/img/projects/askdocs/disection.png\">\n  <img src=\"/static/img/projects/askdocs/07-b.png\">\n</div>\n\n<div class=\"project-detail-divider\"></div>\n\n<h2>Outcomes</h2>\n\n<h3>Metrics Improvements</h3>\n<ul>\n  <li>Conversion rate increased by 50%</li>\n  <li>Net promoter score nearly doubled</li>\n  <li>Number of angry comments on the App Store reduced</li>\n</ul>\n\n<h3>Qualitative Improvements</h3>\n<ul>\n  <li>Users able to easily find what they were looking for within the UI</li>\n  <li>Better alignment between product offering and user expectations</li>\n</ul>\n\n<div class=\"project-detail-divider\"></div>\n\n<h2>Next steps</h2>\n<p>Due to development prorities and timelines, some of the features, like the quick filter, did not ship. My goal is to continue the iterative process since there is still plenty of room for improvement. The good news is that our users are a lot less unahppy or confused about the Ask Docs flow.</p>\n";
},"useData":true});
})();