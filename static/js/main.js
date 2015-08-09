/**
 * For amyjlee.com
 */

'use strict';

(function($, _, Router, Handlebars) {

  // List of projects
  var projects = [
    {
      title: 'Rethinking CaltrainMe',
      thumbnail: '/static/img/projects/caltrainme/thumbnail_caltrain.png',
      projectMainImage: '/static/img/projects/caltrainme/iphone-6-mockup.png',
      projectType: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'One of the first apps I downloaded after moving to the bay area was . Many commuters are heavily dependent on the Caltrain rail system and newcomers like me would probably find a great use of an app like this. Yet, commuting is not as fun as we commuters all hope to be.  Opening this app every morning, I wished this could be more fun. I started with the logo and moved on to updating the layout and flow. This is a conceptual redesign project and has no affiliation with the creators of Caltrain Me.',
      projectDetail: Handlebars.templates.caltrainMe(),
      images: [
        {
          size: 'medium',
          urls: ['/static/img/projects/caltrainme/caltrain02.jpg'],
          caption: 'Image caption goes here.'
        },
        {
          size: 'medium',
          urls: ['/static/img/projects/caltrainme/local_disection.png'],
          caption: 'Image caption goes here.'
        }
      ],
      iframes: [
        {src: '//invis.io/MF3BR3RJC'}
      ]
    },
    {
      title: 'Chrome Download Redesign',
      thumbnail: '/static/img/projects/chromedl/thumbnail-07.png',
      projectType: 'Conceptual Redesign',
      medium: 'Browser',
      year: '2015',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        {
          urls: ['http://placehold.it/500x400'],
          caption: ''
        },
        {
          urls: ['http://placehold.it/500x400'],
          caption: ''
        }
      ],
      iframes: []
    },
    {
      title: 'Yogo',
      thumbnail: '/static/img/projects/yogo/thumbnail_yogo.png',
      projectType: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        {
          urls: ['http://placehold.it/500x400'],
          caption: ''
        }
      ],
      iframes: []
    },
    {
      title: 'Gas Buddy Redesign',
      thumbnail: '/static/img/projects/gasbuddy/thumbnail_gasbuddy.png',
      projectType: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: '<a href="https://gasbuddy.com" target=_blank>Gas Buddy</a> is an app that locates the cheapest gas stations around you through crowdsourcing. Sadly, although this app is great, I did not want to use it because of its unpolished and busy UI. As a quick ideation project, I redesigned the app to emphasize its simplicity and ease of use.',
      images: [
        {
          size: 'small',
          urls: ['/static/img/projects/gasbuddy/gasbuddy_sp.png'],
          caption: "Logo + Splash Page<br>I wanted to re-establish Gas Buddy's identity. After researching more about the app, I realized how consumer-friendly it was. First, it's very easy to use (my dad regularly use it). Second, its content is user-curated by ordinary people, other fellow drivers."
        },
        {
          size: 'small',
          urls: ['/static/img/projects/gasbuddy/gasbuddy_SEARCH.png'],
          caption: "Landing Page<br>Simply type in your zip code or city. If you have your location services on, tap on Near Me to get started. When examining the app, it took me a while to realize that the app had a Near Me button because it was badly located inside a gas pump icon ,so I clarified that section. Gas Buddy is a simple app and it should look simple."
        },
        {
          size: 'small',
          urls: ['/static/img/projects/gasbuddy/01.png'],
          caption: "Listing Page<br>See right away which gas station has the lowest price. Easily locate your go-to gas station by its icon."
        },
        {
          size: 'large',
          urls: ['/static/img/projects/gasbuddy/sketch.png', '/static/img/projects/gasbuddy/iteration1.png'],
          caption: 'Some sketches and ilterations on the listing page'
        },
        {
          size: 'medium',
          urls: ['/static/img/projects/gasbuddy/logos.png'],
          caption: 'Initial logo ideation. Yes, some of these ideas are super ugly :('
        }
      ],
      iframes: []
    },
    {
      title: 'Icons',
      thumbnail: '/static/img/projects/icons/thumbnail_beauty02.png',
      projectType: 'Icons',
      medium: 'Illustration',
      year: '2015',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        {
          size: 'large',
          urls: ['/static/img/projects/icons/beauty_iconset-01.png'],
          caption: 'Beauty icons'
        },
        {
          size: 'large',
          urls: ['/static/img/projects/icons/lately_icons-01.png'],
          caption: "Icons from things I've seen lately"
        },
        {
          size: 'large',
          urls: ['/static/img/projects/icons/lately_icons-02.png'],
          caption: 'Miscellaneous icons'
        }
      ],
      iframes: []
    },
    {
      title: 'Japan Trip Icon Alphabet Book',
      thumbnail: '/static/img/projects/japanalphabets/thumbnail_abc.png',
      projectType: 'Icons',
      medium: 'Illustration',
      year: '2015',
      summary: 'Super cool set of icons from my latest Japan trip, coming soon!',
      images: [
        {
          urls: ['/static/img/projects/japanalphabets/japanabc.png'],
          caption: ''
        }
      ],
      iframes: []
    }
  ];

  // utility function
  // https://gist.github.com/mathewbyrne/1280286
  var slugify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };

  // Cache commonly used jquery objects
  var $body          = $('body');
  var $projectList   = $('.project-list');
  var $projectDetail = $('.project-detail');
  var $logo          = $('.logo a');
  var $contact       = $('.contact');
  var $about         = $('.about');

  // Set and store project items
  var projectItems = [];
  for (var i = 0; i < projects.length; i++) {
    var context = _.extend({ id: i, slug: slugify(projects[i].title)}, projects[i]);
    projectItems.push(Handlebars.templates.projectItem(context));
  }

  // add items to list, serially fade them in
  for (var i = 0; i < projectItems.length; i++) {
    $projectList.append(projectItems[i]);
  }

  // bind clicks to load detail view
  var handleDetailViewClick = function(evt) {
    var id = parseInt($(evt.target).closest('li').attr('data-id'), 10);
    router.setRoute('/projects/' + id + '/' + slugify(projects[id].title));
    evt.stopPropagation();
    evt.preventDefault();
  };

  // view binders

  // home
  $logo.click(function(evt) {
    router.setRoute('/');
    evt.preventDefault();
    evt.stopPropagation();
  });

  $projectList.on('click', '.project-thumbnail', handleDetailViewClick);
  $projectList.on('click', '.project-item-heading', handleDetailViewClick);
  $projectList.on('click', '.project-item-title', handleDetailViewClick);

  var hideNonProjectListViews = function() {
    $projectDetail.hide();
    $contact.hide();
    $about.hide();
  };

  // views
  var landingView = function() {
    hideNonProjectListViews();
    $projectDetail.html('').hide();
    $('.project-item').css('opacity', 0).each(function(idx) {
      $(this).delay((i++) * 80).fadeTo(250, 1);
    });
    $body.animate({ scrollTop: 0 });
  };

  var detailView = function(projectId) {
    var project = projects[projectId];
    $projectDetail.html(Handlebars.templates.projectDetail(project));
    $projectDetail.show();
    $body.animate({ scrollTop: 0 });
  };

  var contactView = function() {
    hideNonProjectListViews();
    $contact.fadeIn();
    $body.animate({ scrollTop: 0 });
  };

  var aboutView = function() {
    hideNonProjectListViews();
    $about.show();
    $body.animate({ scrollTop: 0 });
  };

  var router = Router({
    '/': landingView,
    '/about': aboutView,
    '/contact': contactView,
    '/projects/:projectId/:projectSlug': detailView
  });
  router.configure({ html5history: true });
  router.init();

}(jQuery, _, Router, Handlebars));

