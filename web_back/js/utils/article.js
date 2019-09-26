var article = {
    show: function (param, callBack) {
        $.get(URLIST.article_show, param, function (res) {
            callBack(res)
        })
    },
    del: function (id, callBack) {
        $.get(URLIST.article_del, id, function (res) {
            callBack(res)
        })
    },
    add: function (fd, callBack) {
        // $.post(URLIST.article_add, fd, function (res) {
        $.ajax({
            url: URLIST.article_add,
            type: 'post',
            data: fd,
            processData: false,//不然jquery处理formDate对象，不无法处理
            contentType: false,//请求头为空，他有自己的请求头
            success: function (res) {
                callBack(res);
            }
        })
    },
    edit: function (fd, callBack) {
        $.ajax({
            url: URLIST.article_edit,
            type: 'post',
            data: fd,
            processData: false,//不然jquery处理formDate对象，不无法处理
            contentType: false,//请求头为空，他有自己的请求头
            success: function (res) {
                console.log(fd);
                
                callBack(res);
            }
        })
    },
}
