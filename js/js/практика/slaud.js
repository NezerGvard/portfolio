window.onload = function (){
    var left = document.getElementById('<')
    var right = document.getElementById('>')
    var i=0
    var image = document.getElementById("image");
    var imgs = new Array('https://pbs.twimg.com/media/Dxk25-8XcAAfBtp.jpg:large','https://ibs-link.ru/upload/iblock/f88/f88838ae49e1d3288b19c875df3d7ba0.jpg','https://media.rbcdn.ru/media/upload_tmp/2018/shutterstock_1451794139.jpg',
        'https://13webstudio.ru/wp-content/uploads/2020/08/redizain_sayta-1170x700.jpg','https://www.pvsm.ru/images/2017/04/15/krivoi-server-ves-cod-portit-chto-sleduet-pomnit-pri-vybore-servernoi-pamyati-2.jpg');
    left.onclick = function () {
        --i
        if (i<0) {
            i=4
        }
        image.src = imgs[i];
    }
    right.onclick = function (){
        ++i
        if (i>4) {
            i=0
        }
        image.src = imgs[i];

    }

        var buttonGlav= document.getElementById('ziro')

        buttonGlav.onclick = function (){
            open('index.html')


    }
}