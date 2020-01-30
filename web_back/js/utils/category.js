var categroy = {
    // 分类获取
    categroy_get: function() {
        return $.get(APILIST.category_get);
    },
    //新增分类
    categroy_add: function(name, slug) {
        return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    },
    //删除分类
    categroy_del: function(id) {
        return $.post(APILIST.category_del, { 'id': id })
    },
    //修改分类
    categroy_revise: function(id, newName, newSlug) {
        return $.post(APILIST.category_edit, { 'id': id, 'name': newName, 'slug': newSlug })

    },
}