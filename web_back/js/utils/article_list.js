var article = {
    get: function(page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 文章编辑的时候通过文章 id  获取文章内容
    getEdit: function(id) {
        return $.get(APILIST.article_get, { 'id': id })
    },

    del: function(del) {
        return $.get(APILIST.article_del, { 'id': del })
    },
    add: function(fd) {
        return $.ajax({
            url: APILIST.article_add,
            data: fd,
            type: 'post',
            contentType: false,
            processData: false,
        })
    },
    edit: function(fd) {
        return $.ajax({
            url: APILIST.article_edit,
            data: fd,
            type: 'post',
            contentType: false,
            processData: false,
        })
    }
}