// 所有接口基地址
var BASEURL = 'http://192.168.0.107:8000'
    // var BASEURL = 'http://localhost:8000'
    // 老师放在阿里上的 2.4---3.4 一个月时间
    // var BASEURL = 'http://39.99.130.177:8000'

// 所有接口
var APILIST = {
    // 用户界面
    user_login: BASEURL + '/admin/login',
    user_loginOut: BASEURL + '/admin/logout',
    user_getuser: BASEURL + '/admin/getuser',

    // 文档类别
    // 获取文档类别
    category_get: BASEURL + '/admin/category_search',
    // 新增文档类别
    category_add: BASEURL + '/admin/category_add',
    // 删除文档类别
    category_del: BASEURL + '/admin/category_delete',
    // 编辑文档类别
    category_edit: BASEURL + '/admin/category_edit',


    // 获取文章
    article_get: BASEURL + '/admin/search',
    // 删除文章
    article_del: BASEURL + '/admin/article_delete',
    // 新增文章 发布
    article_add: BASEURL + '/admin/article_publish',
    // 编辑文章
    article_edit: BASEURL + '/admin/article_edit'


}