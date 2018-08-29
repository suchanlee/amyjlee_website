/**
 * For amyjlee.com
 */

"use strict";

(function($, Router, Handlebars, Siema) {

  // utility function
  // https://gist.github.com/mathewbyrne/1280286
  var slugify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, "-")           // Replace spaces with -
      .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
      .replace(/\-\-+/g, "-")         // Replace multiple - with single -
      .replace(/^-+/, "")             // Trim - from start of text
      .replace(/-+$/, "");            // Trim - from end of text
  };

  // List of projects
  var projects = [
    {
      title         : "Care Plans - Management",
      thumbnail     : "/static/img/thumbnails/mgmt.png",
      projectType   : "End-to-end product design",
      year          : "2017",
      projectDetail : Handlebars.templates.management()
    },
    {
      title         : "Care Plans - Authoring",
      thumbnail     : "/static/img/thumbnails/authoring.png",
      projectType   : "End-to-end product design",
      year          : "2017",
      projectDetail : Handlebars.templates.authoring()
    },
    {
      title         : "Ask Docs",
      thumbnail     : "/static/img/thumbnails/askdocs.png",
      mainImage     : "/static/img/projects/askdocs/shell.png",
      projectType   : "End-to-end product design",
      year          : "2016",
      projectDetail : Handlebars.templates.askDocs()
    },
    {
      title         : "Budget App",
      mainImage     : "/static/img/projects/budget/main.png",
      thumbnail     : "/static/img/thumbnails/budget.png",
      projectType   : "Conceptual mobile app design",
      year          : "2016",
      projectDetail : Handlebars.templates.budget()
    },
    {
      title         : "Rethinking CaltrainMe",
      thumbnail     : "/static/img/thumbnails/caltrain.png",
      mainImage     : "/static/img/projects/caltrainme/caltrainme_main.jpg",
      projectType   : "Conceptual mobile app redesign",
      year          : "2015",
      projectDetail : Handlebars.templates.caltrainMe()
    },
    {
      title         : "Chrome Download Redesign",
      thumbnail     : "/static/img/projects/chromedl/thumbnail-07.png",
      mainImage     : "/static/img/projects/chromedl/chrome.gif",
      projectType   : "Conceptual web app study",
      year          : "2015",
      projectDetail : Handlebars.templates.chromedownload()
    },
    {
      title         : "Japan Trip Icon Alphabet Book",
      thumbnail     : "/static/img/thumbnails/abc.png",
      projectType   : "Icons",
      year          : "2015",
      projectDetail : Handlebars.templates.japanIcons()
    }
  ];

  var getPath = function(id) {
    return "/projects/" + id + "/" + slugify(projects[id].title);
  };

  // Cache commonly used jquery objects
  var $projectList   = $(".project-list");
  var $projectDetail = $(".project-detail");
  var $projectDetailSection = $(".project-detail-section");

  // siema
  // var siema;

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
    var id = parseInt($(event.target).closest("li").attr("data-id"), 10);
    if (window.location.pathname !== getPath(id)) {
      router.setRoute(getPath(id));
    }
    window.scroll(0, 0);

    event.stopPropagation();
    event.preventDefault();
  };

  $(".projects-link").click(function(event) {
    if (window.location.pathname !== "/projects") {
      router.setRoute("/projects");
    }
    event.preventDefault();
    event.stopPropagation();
  });

  $projectList.on("click", ".project-thumbnail", handleDetailViewClick);
  $projectList.on("click", ".project-item-heading", handleDetailViewClick);
  $projectList.on("click", ".project-item-title", handleDetailViewClick);

  var siemas = [];

  function createSlideshows() {
    for (var i = 0; i < siemas.length; i++) {
      siemas[i].destroy();
    }
    siemas = [];

    var slideshowContainers = document.getElementsByClassName("slideshow-container");

    for (var i = 0; i < slideshowContainers.length; i++) {
      var container = slideshowContainers[i];
      var images = container.getElementsByTagName("img");

      var thumbnailContainer = document.createElement("div");
      thumbnailContainer.className = "thumbnail-container";

      var slideshowClassName = "slideshow-" + i;
      var slideshow = document.createElement("div");
      slideshow.className = slideshowClassName;

      var numImages = images.length;
      var thumbnailImages = [];

      for (var j = 0; j < numImages; j++) {
        var image = images[j];

        var thumbnail = document.createElement("img");
        thumbnail.src = image.src;
        thumbnail.className = "slideshow-thumbnail";

        if (j === 0) {
          thumbnail.classList.add("-active");
        }

        thumbnailContainer.appendChild(thumbnail);
        thumbnailImages.push(thumbnail);

        var slideshowImage = document.createElement("img");
        slideshowImage.src = image.src;
        slideshow.appendChild(slideshowImage);
      }

      for (var j = 0; j < numImages; j++) {
        container.removeChild(images[0]);
      }

      container.appendChild(slideshow);

      var figcaption = container.getElementsByTagName("figcaption")[0];
      if (figcaption != null) {
        container.removeChild(figcaption);
        container.appendChild(figcaption);
      }

      container.appendChild(thumbnailContainer);

      var createOnChangeHandler = function(thumbnails) {
        return function() {
          for (var k = 0; k < thumbnails.length; k++) {
            thumbnails[k].classList.remove("-active");
            if (k === this.currentSlide) {
              thumbnails[k].classList.add("-active");
            }
          }
        }
      }

      var createSiemaGoTo = function(siema, index) {
        return function() {
          siema.goTo(index);
        }
      };

      var s = new Siema({
        selector: "." + slideshowClassName,
        onChange: createOnChangeHandler(thumbnailImages)
      });

      siemas.push(s);

      for (var j = 0; j < thumbnailImages.length; j++) {
        thumbnailImages[j].addEventListener("click", createSiemaGoTo(s, j));
      }
    }
  }

  // views
  var landingView = function() {
    $projectDetailSection.hide();
    $projectList.show();
    $projectDetail.html("");
    // closeSiema();
    $(".project-item").css("opacity", 0).each(function(index) {
      $(this).delay((index - 1) * 100).fadeTo(250, 1);
    });
    document.title = "Amy J Lee";
  };

  var detailView = function(projectId) {
    // unbindProjectDetailImagesWithSiema();

    var project = projects[projectId];
    $projectDetail.html(Handlebars.templates.projectDetail(project));
    $projectDetailSection.show();
    $projectList.show();

    createSlideshows();

    document.title = project.title;
  };

  var router = Router({
    "/projects": landingView,
    "/projects/:projectId/:projectSlug": detailView
  });
  router.configure({ html5history: true });
  router.init();

}(jQuery, Router, Handlebars, Siema));

