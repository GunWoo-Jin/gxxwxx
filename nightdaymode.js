document.alinkColor = "grey";
document.linkColor = "black";
document.vlinkColor = "black";

function ArefColor(color){
    var hyperlink = document.querySelectorAll('a');
        var i = 0;
        while(i < hyperlink.length)
            {
            hyperlink[i].style.color = color;
            i = i + 1;
            }
}

function nightDayhandler(self)
{   var target = document.querySelector('body');
    if (self.value === 'night') 
        {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
        ArefColor('white')

        } else 
        {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        ArefColor('black')  
        }

}