// 所有接口基地址
var BASEURL = 'http://192.168.0.107:8000'
    // 这个都是自己电脑开的服务员器
    // var BASEURL = 'http://localhost:8000'   这个都是自己电脑开的服务员器
    // 老师放在阿里上的 2.4---3.4 一个月时间
    // var BASEURL = 'http://39.99.130.177:8000'   这个是老师买的云端

// 所有接口
var APILIST = {
    // 文档类别
    // 获取文档类别
    category_get: BASEURL + '/admin/category_search',
    // 获取文章
    article_get: BASEURL + '/admin/search',

    // 文章热门排行
    rank: BASEURL + '/rank',
    // 最新资讯
    hot: BASEURL + '/lastest',
    // 各种类型文章获取
    get: BASEURL + '/search',
    // 获取文章详情以及上下篇文章的地址
    article: BASEURL + '/article',
    // 获取文章评论
    comment: BASEURL + '/get_comments',
    // 发表评论
    publish: BASEURL + '/post_comment',
}