// 语义化
var user = {
    back: function() {
        return $.post(APILIST.user_loginOut)
    },
    getInfo: function() {
        return $.get(APILIST.user_getuser)
    },
    login: function(login, password) {
        return $.post(APILIST.user_login, {
            'user_name': login,
            'password': password
        })
    }
}