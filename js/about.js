var mapContainer = document.querySelector('.about .content_sub_location #map');
const branch_btns = document.querySelectorAll(".about .content_sub_location .branch li");
var drag = true;
var zoom = true;


mapOption = { 
    center: new kakao.maps.LatLng(37.5563488,126.9703802),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption); 

var markerOptions =[
    {
        title : "본점", 
        latlng : new kakao.maps.LatLng(37.5563488,126.9703802), 
        imgSrc : "img/marker.png", 
        imgSize : new kakao.maps.Size(100,105), 
        imgPos : {offset : new kakao.maps.Point(0,0)}, 
        button : branch_btns[0] 
    },
    {
        title : "지점1", 
        latlng : new kakao.maps.LatLng(37.51720985347799, 127.04134374625059), 
        imgSrc : "img/marker.png", 
        imgSize : new kakao.maps.Size(100,105), 
        imgPos : {offset : new kakao.maps.Point(0,0)} ,
        button : branch_btns[1]
    },
    {
        title : "지점2", 
        latlng : new kakao.maps.LatLng(37.4762789, 126.6168922), 
        imgSrc : "img/marker.png", 
        imgSize : new kakao.maps.Size(100,105), 
        imgPos : {offset : new kakao.maps.Point(0,0)},
        button : branch_btns[2] 
    },
    {
        title : "지점3", 
        latlng : new kakao.maps.LatLng(37.500075, 127.026296), 
        imgSrc : "img/marker.png", 
        imgSize : new kakao.maps.Size(100,105), 
        imgPos : {offset : new kakao.maps.Point(0,0)},
        button : branch_btns[3] 
    }
];

for(let i=0; i< markerOptions.length; i++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });

    markerOptions[i].button.addEventListener("click", e=>{
        e.preventDefault(); 
        moveTo(markerOptions[i].latlng);
    })
}

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

setDraggable(drag); 
setZoomable(zoom); 

function moveTo(target){
    var moveLatLon = target; 
    map.setCenter(moveLatLon); 
}

function setDraggable(draggable) {
    map.setDraggable(draggable);    
}

function setZoomable(zoomable) {
    map.setZoomable(zoomable);    
}