var isProd = window.location.hostname === 'connorbode.me';
var isSecure = window.location.protocol === 'https:';

if (isProd && !isSecure)
  window.location = 'https://connorbode.me' + window.location.pathname + window.location.search;