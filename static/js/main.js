/**
 * For amyjlee.com
 */

'use strict';

(function($, Router, Handlebars, Siema) {

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
      title         : 'Care Plans - Authoring',
      thumbnail     : '/static/img/thumbnails/authoring.png',
      projectType   : 'End-to-end product design',
      year          : '2017',
      projectDetail : Handlebars.templates.authoring()
    },
    {
      title         : 'Care Plans - Management',
      thumbnail     : '/static/img/thumbnails/mgmt.png',
      projectType   : 'End-to-end product design',
      year          : '2017',
      projectDetail : Handlebars.templates.management()
    },
    {
      title         : 'Ask Docs',
      thumbnail     : '/static/img/thumbnails/askdocs.png',
      projectType   : 'End-to-end product design',
      year          : '2016',
      projectDetail : Handlebars.templates.askDocs()
    },
    {
      title         : 'Budget App',
      mainImage     : '/static/img/projects/budget/main.png',
      thumbnail     : '/static/img/thumbnails/budget.png',
      projectType   : 'Conceptual mobile app design',
      year          : '2016',
      projectDetail : Handlebars.templates.budget()
    },
    {
      title         : 'Rethinking CaltrainMe',
      thumbnail     : '/static/img/thumbnails/caltrain.png',
      mainImage     : '/static/img/projects/caltrainme/caltrainme_main.jpg',
      projectType   : 'Conceptual mobile app redesign',
      year          : '2015',
      projectDetail : Handlebars.templates.caltrainMe()
    },
    {
      title         : 'Chrome Download Redesign',
      thumbnail     : '/static/img/projects/chromedl/thumbnail-07.png',
      mainImage     : '/static/img/projects/chromedl/chrome.gif',
      projectType   : 'Conceptual web app study',
      year          : '2015',
      projectDetail : Handlebars.templates.chromedownload()
    },
    {
      title         : 'Japan Trip Icon Alphabet Book',
      thumbnail     : '/static/img/thumbnails/abc.png',
      projectType   : 'Icons',
      year          : '2015',
      projectDetail : Handlebars.templates.japanIcons()
    }
  ];

  var getPath = function(id) {
    return '/projects/' + id + '/' + slugify(projects[id].title);
  };

  // Cache commonly used jquery objects
  var $projectList   = $('.project-list');
  var $projectDetail = $('.project-detail');
  var $projectDetailSection = $('.project-detail-section');

  // siema
  var siema;

  // Set and store project items
  var projectItems = [];
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var context = {};
    var keys = Object.keys(project);
    var keyCount = keys.length;

    for (var j = 0; j < keyCount; j++) {
      context[keys[j]] = project[keys[j]];
    }
    context.id = i;
    context.slug = slugify(project.title);

    projectItems.push(Handlebars.templates.projectItem(context));
  }

  // add items to list, serially fade them in
  for (var i = 0; i < projectItems.length; i++) {
    $projectList.append(projectItems[i]);
  }

  // bind clicks to load detail view
  var handleDetailViewClick = function(event) {
    var id = parseInt($(event.target).closest('li').attr('data-id'), 10);
    if (window.location.pathname !== getPath(id)) {
      router.setRoute(getPath(id));
      window.scroll(0, 0);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  $('.projects-link').click(function(event) {
    if (window.location.pathname !== '/projects') {
      router.setRoute('/projects');
    }
    event.preventDefault();
    event.stopPropagation();
  });

  $projectList.on('click', '.project-thumbnail', handleDetailViewClick);
  $projectList.on('click', '.project-item-heading', handleDetailViewClick);
  $projectList.on('click', '.project-item-title', handleDetailViewClick);

  var slideshow = document.createElement('div');
  slideshow.className = 'slideshow';
  document.body.appendChild(slideshow);

  function closeSiema() {
    if (siema != null) {
      siema.destroy();
      siema = undefined;
    }

    document.body.style.overflow = 'auto';
    slideshow.style.display = 'none';

    while (slideshow.firstChild != null) {
      slideshow.removeChild(slideshow.firstChild);
    }
  }

  function openSiema(event) {
    closeSiema();

    var imgs = getImgsInProjectDetail();
    var imgsCount = imgs.length;
    for (var i = 0; i < imgsCount; i++) {
      var img = imgs[i];
      img.setAttribute('data-siema-index', i);

      var container = document.createElement('div');
      container.className = 'slideshow-entry-container';

      var newImg = document.createElement('img');
      newImg.src = img.getAttribute('src');

      var caption = document.createElement('div');
      caption.className = 'slideshow-entry-caption';
      caption.textContent = img.alt || '';

      container.appendChild(newImg);
      container.appendChild(caption);

      slideshow.appendChild(container);
    }

    document.body.style.overflow = 'hidden';
    slideshow.style.display = 'block';
    siema = new Siema({
      selector: '.slideshow',
      startIndex: parseInt(event.currentTarget.getAttribute("data-siema-index"), 10)
    });
  }

  function siemaKeyboardInteractions(event) {
    switch (event.key) {
      case "ArrowLeft":
        if (siema != null) {
          siema.prev();
        }
        break;
      case "ArrowRight":
        if (siema != null) {
          siema.next();
        }
        break;
      case "Escape":
        closeSiema();
        break;
      default:
        // noop
    }
  }

  function getImgsInProjectDetail() {
    var projectDetails = document.getElementsByClassName('project-details')[0];
    if (projectDetails == null) {
      return [];
    } else {
    return projectDetails.getElementsByTagName('img');
    }
  }

  function unbindProjectDetailImagesWithSiema() {
    var imgs = getImgsInProjectDetail();
    var imgsCount = imgs.length;
    for (var i = 0; i < imgsCount; i++) {
      imgs[i].removeEventListener('click', openSiema);
    }

    document.removeEventListener('keyup', siemaKeyboardInteractions)
  }

  function bindProjectDetailImagesWithSiema() {
    var imgs = getImgsInProjectDetail();
    var imgsCount = imgs.length;
    for (var i = 0; i < imgsCount; i++) {
      imgs[i].addEventListener('click', openSiema);
    }

    document.addEventListener('keyup', siemaKeyboardInteractions)
  }

  // views
  var landingView = function() {
    $projectDetailSection.hide();
    $projectList.show();
    $projectDetail.html('');
    closeSiema();
    $('.project-item').css('opacity', 0).each(function(index) {
      $(this).delay((index - 1) * 100).fadeTo(250, 1);
    });
    document.title = 'Amy J Lee';
  };

  var detailView = function(projectId) {
    unbindProjectDetailImagesWithSiema();

    var project = projects[projectId];
    $projectDetail.html(Handlebars.templates.projectDetail(project));
    $projectDetailSection.show();
    $projectList.show();

    bindProjectDetailImagesWithSiema();
    document.title = project.title;
  };

  var router = Router({
    '/projects': landingView,
    '/projects/:projectId/:projectSlug': detailView
  });
  router.configure({ html5history: true });
  router.init();

}(jQuery, Router, Handlebars, Siema));

