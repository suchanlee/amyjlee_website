/**
 * For amyjlee.com
 */

'use strict';

(function($, _, Router) {

  // List of projects
  var projects = [
    {
      title: 'CaltrainMe',
      thumbnail: '/static/img/projects/caltrainme/caltrainme_main.jpg',
      main_image: '/static/img/projects/caltrainme/caltrainme_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'One of the first apps I downloaded after moving to the bay area was Caltrain Me. Many commuters are heavily dependent on the Caltrain rail system and newcomers like me would probably find a great use of an app like this. Yet, commuting is not as fun as we commuters all hope to be.  Opening this app every morning, I wished this could be more fun. I started with the logo and moved on to updating the layout and flow. This is a conceptual redesign project and has no affiliation with the creators of Caltrain Me.',
      images: [
        '/static/img/projects/caltrainme/caltrainme_2.jpg',
      ]
    },
    {
      title: 'Gas Buddy Redesign',
      thumbnail: '/static/img/projects/gasbuddy/gasbuddy_main.jpg',
      main_image: '/static/img/projects/gasbuddy/gasbuddy_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        '/static/img/projects/gasbuddy/gasbuddy_2.jpg',
        '/static/img/projects/gasbuddy/gasbuddy_3.png',
      ]
    },
    {
      title: 'Bezzist',
      thumbnail: '/static/img/projects/bezzist/bezzist_main.jpg',
      main_image: '/static/img/projects/gasbuddy/gasbuddy_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Chrome Download Redesign',
      thumbnail: '/static/img/projects/chromedl/chromedl_main.jpg',
      main_image: '/static/img/projects/gasbuddy/gasbuddy_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Icons',
      thumbnail: '/static/img/projects/icons/icons_main.jpg',
      main_image: '/static/img/projects/gasbuddy/gasbuddy_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        '/static/img/projects/icons/beauty_iconset-01.png'
      ]
    },
    {
      title: 'Vincent',
      thumbnail: '/static/img/projects/vincent/vincent_main.jpg',
      main_image: '/static/img/projects/gasbuddy/gasbuddy_1.jpg',
      project_type: 'Conceptual Redesign',
      medium: 'Mobile App',
      year: '2014',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
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
  var $projectDetail = $('.project-detail')
  var $logo          = $('.logo a');

  // Define project item template
  var projectItemTemplate = _.template(
    '<li data-id="<%= id %>" class="project-item">' +
    '  <div class="project-item-frame">' +
    '    <img class="project-thumbnail" src="<%= thumbnail %>" alt="<%= title %> Thumbnail">' +
    '    <h3 class="project-item-title"><%= title %></h3>' +
    '  </div>' +
    '</li>'
  );

  // Set and store project items
  var projectItems = [];
  for (var i = 0; i < projects.length; i++) {
    var context;
    if (i % 2 !== 0) {
      context = _.extend({ id: i, projectItemOdd: 'project-item-odd' }, projects[i]);
    } else {
      context = _.extend({ id: i, projectItemOdd: '' }, projects[i]);
    }
    projectItems.push(projectItemTemplate(context));
  }

  // add items to list, serially fade them in
  for (var i = 0; i < projectItems.length; i++) {
    $projectList.append(projectItems[i]);
  }

  // Define project item detail view template
  var projectDetailTemplate = _.template(
    '<div class="project-detail">' +
    '    <img class="project-main-image" src="<%= main_image %>" alt="<%= title %> main image">' +
    '    <div class="project-detail-header">' +
    '      <div class="project-header-padder"> ' +
    '      <h2 class="project-heading"><%= title %></h2>' +
    '      <p class="project-metadata">' +
    '        <span class="project-metadata-type"><%= project_type %></span> | ' +
    '        <span class="project-metadata-medium"><%= medium %></span> | ' +
    '        <span class="project-metadata-year"><%= year %></span>' +
    '      </p>' +
    '      <div class="project-detail-summary"><%= summary %></div>' +
    '    </div>' +
    '    </div> ' +
    '    <div class="clear-float"></div' +
    '    <div class="project-detail-images">' +
    '    <% _.each(images, function(image) { %>' +
    '      <img src="<%= image %>" alt="project image" class="project-image">' +
    '    <% }); %>' +
    '    </div>' +
    '</div>'
  );

  // bind clicks to load detail view
  var handleDetailViewClick = function(evt) {
    var id = parseInt($(evt.target).closest('li').attr('data-id'), 10);
    router.setRoute('/projects/' + id + '/' + slugify(projects[id].title));
  };

  // view binders

  // home
  $logo.click(function(evt) {
    router.setRoute('/');
    $projectDetail.addClass('hidden');
    evt.preventDefault();
    evt.stopPropagation();
  });

  $projectList.on('click', '.project-thumbnail', handleDetailViewClick);
  $projectList.on('click', '.project-item-heading', handleDetailViewClick);
  $projectList.on('click', '.project-item-title', handleDetailViewClick);

  // views
  var landingView = function() {
    $projectDetail.html('');
    $('.project-item').css('opacity', 0).each(function(idx) {
      $(this).delay((i++) * 80).fadeTo(250, 1);
    });
    $body.animate({ scrollTop: 0 });
  };

  var detailView = function(projectId) {
    var project = projects[projectId];
    $projectDetail.html(projectDetailTemplate(project));
    $projectDetail.removeClass('hidden');
    $('.project-item').css('opacity', 1);
    $body.animate({ scrollTop: 0 });
  };

  var router = Router({
    '/': landingView,
    '/projects/:projectId/:projectSlug': detailView
  });
  router.configure({ html5history: true });
  router.init();

}(jQuery, _, Router));

