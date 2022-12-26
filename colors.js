var Body = {
    setColor : function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroudColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor : function (color) {
        var alist = document.querySelectorAll('a'); // all 임에 주의
        var i = 0;
        while (i < alist.length) {
            // console.log(alist[i]); // 디버깅
            // console.log(color);
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
function setColor(color) {
    // console.log(color);
    
}
function nightDayHandler(self) {
    var target = document.querySelector('body');

    if (self.value === 'night') {
        Body.setBackgroudColor('black');
        //target.style.backgroundColor='black';
        Body.setColor('white');
        // target.style.color='white';
        self.value = 'day';

        Links.setColor('yellow');
        }

    
    else {
        Body.setBackgroudColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}
