var article = {
    get: function(page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    del: function(del) {
        return $.get(APILIST.article_del, { 'id': del })

    }
}