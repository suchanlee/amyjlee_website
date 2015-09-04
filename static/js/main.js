/**
 * For amyjlee.com
 */

'use strict';

(function($, _, Router, Handlebars) {

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

  // List of projects
  var projects = [
    {
      title: 'Rethinking CaltrainMe',
      thumbnail: '/static/img/projects/caltrainme/thumbnail_caltrain.png',
      mainImage: '/static/img/projects/caltrainme/iphone-6-mockup.png',
      projectType: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      projectDetail: Handlebars.templates.caltrainMe()
    },
    {
      title: 'Chrome Download Redesign',
      slug: 'chrome-download',
      thumbnail: '/static/img/projects/chromedl/thumbnail-07.png',
      mainImage: '/static/img/projects/chromedl/chrome.gif',
      projectType: 'Conceptual Redesign',
      medium: 'Browser',
      year: '2015',
      projectDetail: Handlebars.templates.chromedownload()
    },
    {
      title: 'Yogo: Your Poll on the Go',
      slug: 'yogo',
      mainImage: '/static/img/projects/yogo/logo01.png',
      thumbnail: '/static/img/projects/yogo/thumbnail_yogo.png',
      projectType: 'Product Design',
      medium: 'Web App',
      year: '2015',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      projectDetail: Handlebars.templates.yogo()
    },
    {
      title: 'Gas Buddy Redesign',
      mainImage: '/static/img/projects/gasbuddy/gasbuddy_sp.png',
      thumbnail: '/static/img/projects/gasbuddy/thumbnail_gasbuddy.png',
      projectType: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      projectDetail: Handlebars.templates.gasbuddy()
    },
    {
      title: 'Icons',
      thumbnail: '/static/img/projects/icons/thumbnail_beauty02.png',
      projectType: 'Icons',
      medium: 'Illustration',
      year: '2015',
      projectDetail: Handlebars.templates.icons()
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

  var getPath = function(id) {
    return '/projects/' + id + '/' + slugify(projects[id].title);
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
    if (window.location.pathname !== getPath(id)) {
      router.setRoute(getPath(id));
    }
    $body.animate({ scrollTop: 0 });
    evt.stopPropagation();
    evt.preventDefault();
  };

  // view binders

  // home
  $logo.click(function(evt) {
    if (window.location.pathname !== '/') {
      router.setRoute('/');
    }
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

