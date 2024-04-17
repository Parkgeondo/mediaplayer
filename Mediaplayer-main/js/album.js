//손 위치에 따라서 앨범의 위치를 변경


$(function () {
    $('.hand').mouseup(function(){
        $('.album').css('transform',`translate(${-nowMusic*(300+12)}px)`)
    })
})