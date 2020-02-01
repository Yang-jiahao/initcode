var article = {
    get: function(page) {
        return $.get(APILIST.article_get, { 'page': page })
    },
}