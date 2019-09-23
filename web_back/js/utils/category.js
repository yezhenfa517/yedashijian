
var category = {
    show: function (callBack) {
        $.get(URLIST.cotegory_show, function (res) {
            callBack(res)
        })
    },
    /**
     * 添加新类别
     * @param {*} name 名字
     * @param {*} slug 别名
     * @param {*} callBack 回调函数
     */
    add: function (name, slug, callBack) {
        $.post(URLIST.cotegory_add, { name: name, slug: slug }, function (res) {
            callBack(res)
        })
    },
    del: function (id, callBack) {
        $.post(URLIST.cotegory_del, { id: id }, function (res) {
            callBack(res)
        })
    },
    edit: function (id, name, slug, callBack) {
        $.post(URLIST.cotegory_edit, { id: id, name: name, slug: slug }, function (res) {
            callBack(res)
        })
    },
}