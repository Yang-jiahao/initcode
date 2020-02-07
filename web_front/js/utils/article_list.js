var article = {
    get: function(page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 文章编辑的时候通过文章 id  获取文章内容
    getEdit: function(id) {
        return $.get(APILIST.article_get, { 'id': id })
    },
    getFive: function() {
        return $.get(APILIST.article_get, { 'perpage': 5 })
    },
    rank: function() {
        return $.get(APILIST.rank)

    },
    hot: function() {
        return $.get(APILIST.hot)
    },
    getarticle: function(id, curpage) {
        return $.get(APILIST.get, { 'type': id, 'page': curpage })

    },
    article: function(id) {
        return $.get(APILIST.article, { 'id': id })
    },
    comment: function(id) {
        return $.get(APILIST.comment, { 'article_id': id })
    },
    publish: function(name, content, id) {
        return $.post(APILIST.publish, { 'name': name, 'content': content, 'article_id': id })

    }
}