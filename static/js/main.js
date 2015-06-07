/**
 * For amyjlee.com
 */

'use strict';

(function($, _, Router) {

  // List of projects
  var projects = [
    {
      title: 'Caltrain Me Redesign',
      thumbnail: '/static/img/projects/caltrainme/caltrainme_main.jpg',
      tagline: 'Re-design of the popular Caltrain app',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Gas Buddy Redesign',
      thumbnail: '/static/img/projects/gasbuddy/gasbuddy_main.jpg',
      tagline: 'Revamping your travel buddy',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Bezzist',
      thumbnail: '/static/img/projects/bezzist/bezzist_main.jpg',
      tagline: 'Revamping your travel buddy',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Chrome Download Redesign',
      thumbnail: '/static/img/projects/chromedl/chromedl_main.jpg',
      tagline: 'Revamping your travel buddy',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Icons',
      thumbnail: '/static/img/projects/icons/icons_main.jpg',
      tagline: 'Revamping your travel buddy',
      summary: 'Lorem ipsum In in officia culpa et elit in dolore consequat deserunt elit dolor dolor culpa deserunt eu Ut mollit.',
      images: [
        'http://placehold.it/500x400',
        'http://placehold.it/500x400'
      ]
    },
    {
      title: 'Vincent',
      thumbnail: '/static/img/projects/vincent/vincent_main.jpg',
      tagline: 'Revamping your travel buddy',
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
    '    <h3 class="project-title"><%= title %></h3>' +
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

  // bind clicks to profile toggling
  var toggleProfile = function(evt) {
    if ($logo.hasClass('logo-clicked')) {
      if (!(evt.target.className === 'header')) {
        $logo.removeClass('logo-clicked');
      }
    } else {
      $logo.addClass('logo-clicked');
    }
  };

  $logo.click(toggleProfile);

  // Define project item detail view template
  var projectDetailTemplate = _.template(
    '<div class="project-detail">' +
    '    <div class="project-detail-header">' +
    '        <h2 class="project-item-heading"><%= title %></h2>' +
    '        <p class="porfolio-item-tagline"><%= tagline %></p>' +
    '    </div>' +
    '    <div class="project-detail-summary"><%= summary %></div>' +
    '    <div class="project-detail-images">' +
    '    <% _.each(images, function(image) { %>' +
    '      <img src="<%= image %>" alt="project image">' +
    '    <% }); %>' +
    '    </div>' +
    '</div>'
  );

  // bind clicks to load detail view
  var handleDetailViewClick = function(evt) {
    var id = parseInt($(evt.target).closest('li').attr('data-id'), 10);
    router.setRoute('/projects/' + id + '/' + slugify(projects[id].title));
  };

  $projectList.on('click', '.project-thumbnail', handleDetailViewClick);
  $projectList.on('click', '.project-item-heading', handleDetailViewClick);

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

