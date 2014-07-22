---
layout: post
date:   2013-01-01 16:25:16
title: CAC Sponsors API
---
<script>
$(function () {
  window.swaggerUi = new SwaggerUi({
  url: "https://connorbode-sponsors-server.herokuapp.com/swagger_doc.json",
  dom_id: "swagger-ui-container",
  supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
  onFailure: function(data) {
    log("Unable to Load SwaggerUI");
  },
    docExpansion: "none"
  });
  window.authorizations.add("key", new ApiKeyAuthorization("AUTH_TOKEN", "key", "header"));
  window.swaggerUi.load();
});
</script>