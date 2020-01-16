// 语义化
var user = {
    back: function() {
        $.post(APILIST.user_loginOut).then(function(res) {
            if (res.code == 200) {
                window.location.href = 'login.html'
            } else {
                alert(res.msg)
            }
        })
    },
    getInfo: function() {
        $.get(APILIST.user_getuser).then(function(res) {
            console.log(res);
            var hh = res.data.nickname;
            $('#lss').text(hh)
            $('.change').attr('src', res.data.user_pic)

        })
    },
    login: function(login, password) {
        $.post(APILIST.user_login, {
            'user_name': login,
            'password': password
        }).then(function(res) {
            console.log(res);
            if (res.code === 200) {
                window.location.href = 'index.html'
            } else {
                alert(res.msg)
            }
        })
    }
}