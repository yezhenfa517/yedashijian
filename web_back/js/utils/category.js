
var category = {
    show: function (callBack) {
        $.get(URLIST.cotegory_show, function (res) {
            callBack(res)
        })
    }
}