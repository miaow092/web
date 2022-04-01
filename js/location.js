var mapContainer = document.getElementById('map'); // 
const t_on = document.querySelectorAll(".traffic li")[0]; 
const t_off = document.querySelectorAll(".traffic li")[1]; 
const branch_btns = document.querySelectorAll(".branch li"); 
var drag = true; //지도 이동 가능  
var zoom = true; //확대 축소 켜기

 
mapOption = { 
    center: new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


var markerOptions =[
    {
        title : "본점", 
        latlng : new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), 
        imgSrc : "img/marker1.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)}, 
        button : branch_btns[0] 
    },
    {
        title : "지점1", 
        latlng : new kakao.maps.LatLng(37.51720985347799, 127.04134374625059), 
        imgSrc : "img/marker2.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)} ,
        button : branch_btns[1]
    },
    {
        title : "지점2", 
        latlng : new kakao.maps.LatLng(37.585601140947716, 127.02013033711161), 
        imgSrc : "img/marker3.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)},
        button : branch_btns[2] 
    }
]; 

//반복을 돌면서 마커를 특정 이미지로 특정위치에 배치
for(let i=0; i< markerOptions.length; i++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });     

    //branch 버튼 클릭 이벤트 연결 
    markerOptions[i].button.addEventListener("click", e=>{
        e.preventDefault(); 
        for(let btn of branch_btns){
            btn.classList.remove("on"); 
        }
        branch_btns[i].classList.add("on"); 

        moveTo(markerOptions[i].latlng)
    }); 
}

//리사이즈시 현재 활성화되어있는 비튼의 data-index값을 구해서 
//setCenter의 인수값으로 적용 
window.addEventListener("resize", ()=>{
    let active_btn = document.querySelector(".branch li.on"); 
    let active_index = active_btn.getAttribute("data-index"); 
    map.setCenter(markerOptions[active_index].latlng); 
});






//컨트롤 보이기 
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//교통정보 보기/끄기 버튼 이벤트 
t_on.addEventListener("click", e=>{
    e.preventDefault(); 

    if(t_on.classList.contains("on")) return;    
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 

    t_on.classList.add("on"); 
    t_off.classList.remove("on"); 
})

t_off.addEventListener("click", e=>{
    e.preventDefault(); 

    if(t_off.classList.contains("on")) return;    
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  

    t_off.classList.add("on");
    t_on.classList.remove("on"); 
})
 

setDraggable(drag); 
//지도 이동 함수 정의 
function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);    
}


setZoomable(zoom); 
//확대축소 켜기/끄기 
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}

//지도이동함수 
function moveTo(target){
    var moveLatLon = target; 

    map.setCenter(moveLatLon); 
}