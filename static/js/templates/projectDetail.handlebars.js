(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projectDetail'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.mainImage || (depth0 != null ? depth0.mainImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mainImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " main image\" class=\"project-main-image project-image image-width-60\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\""
    + alias3(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.mainImage : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"project-detail-header\">\n    <h1 class=\"project-heading\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p class=\"project-metadata\">\n      <span class=\"project-metadata-type\">"
    + alias3(((helper = (helper = helpers.projectType || (depth0 != null ? depth0.projectType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"projectType","hash":{},"data":data}) : helper)))
    + "</span> |\n      <span class=\"project-metadata-medium\">"
    + alias3(((helper = (helper = helpers.medium || (depth0 != null ? depth0.medium : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"medium","hash":{},"data":data}) : helper)))
    + "</span> |\n      <span class=\"project-metadata-year\">"
    + alias3(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "</span>\n    </p>\n  </div>\n  <div class=\"clear-float\"></div>\n  <div class=\"project-details\">\n    "
    + ((stack1 = ((helper = (helper = helpers.projectDetail || (depth0 != null ? depth0.projectDetail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"projectDetail","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true});
})();