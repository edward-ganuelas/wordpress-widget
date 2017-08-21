const wordpressSiteUrl = 'edpau.wordpress.com'; //Put wordpress url here.
let apiCall = "https://public-api.wordpress.com/rest/v1.1/sites/"+wordpressSiteUrl+"/posts?per_page=1&orderby=date";

exports.apiCall= apiCall;