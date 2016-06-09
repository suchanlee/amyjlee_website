(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projectDetail'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <img src=\""
    + alias4(((helper = (helper = helpers.mainImage || (depth0 != null ? depth0.mainImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " main image\" class=\"project-main-image project-image image-width-60\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mainImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"project-detail-header\">\n    <h1 class=\"project-heading\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p class=\"project-metadata\">\n      <span class=\"project-metadata-type\">"
    + alias4(((helper = (helper = helpers.projectType || (depth0 != null ? depth0.projectType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectType","hash":{},"data":data}) : helper)))
    + "</span> |\n      <span class=\"project-metadata-medium\">"
    + alias4(((helper = (helper = helpers.medium || (depth0 != null ? depth0.medium : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"medium","hash":{},"data":data}) : helper)))
    + "</span> |\n      <span class=\"project-metadata-year\">"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</span>\n    </p>\n  </div>\n  <div class=\"clear-float\"></div>\n  <div class=\"project-details\">\n    "
    + ((stack1 = ((helper = (helper = helpers.projectDetail || (depth0 != null ? depth0.projectDetail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectDetail","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true});
})();