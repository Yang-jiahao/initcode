// 所有接口基地址
var BASEURL = 'http://192.168.0.107:8000'
    // var BASEURL = 'http://localhost:8000'
    // 老师放在阿里上的 2.4---3.4 一个月时间
    // var BASEURL = 'http://39.99.130.177:8000'

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

}