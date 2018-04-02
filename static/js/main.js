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
      title         : 'Cellar 55',
      slug          : 'cellar55',
      mainImage     : '/static/img/projects/cellar/thumb.png',
      thumbnail     : '/static/img/projects/cellar/thumbnail-13.png',
      projectType   : 'Product Design',
      medium        : 'Web App',
      year          : '2016',
      projectDetail : Handlebars.templates.cellar()
	  },
    {
      title         : 'Budget App',
      slug          : 'budget-app',
      mainImage     : '/static/img/projects/budget/main.png',
      thumbnail     : '/static/img/projects/budget/thumbnail-12.png',
      projectType   : 'Product Design',
      medium        : 'Mobile App',
      year          : '2016',
      projectDetail : Handlebars.templates.budget()
    },
    {
      title         : 'Coffee Timer',
      slug          : 'coffee-timer',
      mainImage     : '/static/img/projects/coffee/rendering01.png',
      thumbnail     : '/static/img/projects/coffee/thumbnail-11.png',
      projectType   : 'Product Design',
      medium        : 'Mobile App',
      year          : '2016',
      projectDetail : Handlebars.templates.coffee()
    },
    {
      title         : 'Dentist Branding Kit',
      slug          : 'dentist',
      mainImage     : '/static/img/projects/dentist/main.png',
      thumbnail     : '/static/img/projects/dentist/thumbnail-10.png',
      projectType   : 'Branding',
      medium        : 'Graphics',
      year          : '2016',
      projectDetail : Handlebars.templates.dentist()
    },
    {
      title         : 'Yogo: Your Poll on the Go',
      slug          : 'yogo',
      mainImage     : '/static/img/projects/yogo/logo01.png',
      thumbnail     : '/static/img/projects/yogo/thumbnail_yogo.png',
      projectType   : 'Product Design',
      medium        : 'Web App',
      year          : '2015',
      projectDetail : Handlebars.templates.yogo()
    },
    {
      title         : 'Rethinking CaltrainMe',
      thumbnail     : '/static/img/projects/caltrainme/thumbnail_caltrain.png',
      mainImage     : '/static/img/projects/caltrainme/iphone-6-mockup.png',
      projectType   : 'Conceptual Redesign',
      medium        : 'Mobile App',
      year          : '2015',
      projectDetail : Handlebars.templates.caltrainMe()
    },
    {
      title         : 'Chrome Download Redesign',
      slug          : 'chrome-download',
      thumbnail     : '/static/img/projects/chromedl/thumbnail-07.png',
      mainImage     : '/static/img/projects/chromedl/chrome.gif',
      projectType   : 'Conceptual Redesign',
      medium        : 'Browser',
      year          : '2015',
      projectDetail : Handlebars.templates.chromedownload()
    },
    {
      title         : 'Japan Trip Icon Alphabet Book',
      slug          : 'japan-trip-icons',
      thumbnail     : '/static/img/projects/japanalphabets/thumbnail_abc.png',
      projectType   : 'Icons',
      medium        : 'Illustration',
      year          : '2015',
      projectDetail : Handlebars.templates.japanIcons()
    },
    {
      title         : 'Just Show Up',
      slug          : 'just-show-up',
      thumbnail     : '/static/img/projects/justshowup/thumbnail-08.png',
      projectType   : 'Event Promotion',
      medium        : 'Poster',
      year          : '2015',
      projectDetail : Handlebars.templates.justshowup()
    },
    {
      title         : 'Icons',
      thumbnail     : '/static/img/projects/icons/thumbnail_beauty02.png',
      projectType   : 'Icons',
      medium        : 'Illustration',
      year          : '2015',
      projectDetail : Handlebars.templates.icons()
    }
  ];

  var getPath = function(id) {
    return '/projects/' + id + '/' + slugify(projects[id].title);
  };

  // Cache commonly used jquery objects
  var $body          = $('body');
  var $projectList   = $('.project-list');
  var $projectDetail = $('.project-detail');
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

  $('.projects-link').click(function(evt) {
    if (window.location.pathname !== '/projects') {
      router.setRoute('/projects');
    }
    evt.preventDefault();
    evt.stopPropagation();
  });

  $projectList.on('click', '.project-thumbnail',    handleDetailViewClick);
  $projectList.on('click', '.project-item-heading', handleDetailViewClick);
  $projectList.on('click', '.project-item-title',   handleDetailViewClick);

  var hideNonProjectListViews = function() {
    $projectDetail.hide();
    $about.hide();
  };

  // views
  var landingView = function() {
    hideNonProjectListViews();
    $projectList.show();
    $projectDetail.html('').hide();
    $('.project-item').css('opacity', 0).each(function(idx) {
      $(this).delay((i++) * 50).fadeTo(250, 1);
    });
    document.title = 'Amy J Lee';
  };

  var detailView = function(projectId) {
    var project = projects[projectId];
    $projectDetail.html(Handlebars.templates.projectDetail(project));
    $projectDetail.show();
    $projectList.show();
    $about.hide();
    document.title = project.title;
  };

  var aboutView = function() {
    hideNonProjectListViews();
    $about.show();
    $projectList.hide();
    $body.animate({ scrollTop: 0 });
    document.title = 'About Amy';
  };

  var router = Router({
    '/projects': landingView,
    '/projects/:projectId/:projectSlug': detailView
  });
  router.configure({ html5history: true });
  router.init();

}(jQuery, _, Router, Handlebars));

