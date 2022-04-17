var container = document.getElementById('map');
const branchBtns = document.querySelectorAll('.branch li');
var drag = true; //지도 이동 가능
var zoom = true; //확대 축소 켜기

options = {
	center: new kakao.maps.LatLng(37.64703960905888, 126.89503893481101), // 지도의 중심좌표
	level: 3, // 지도의 확대 레벨
};

var map = new kakao.maps.Map(container, options);

var markerOptions = [
	{
		title: 'The Ilsan Branch',
		latlng: new kakao.maps.LatLng(37.64703960905888, 126.89503893481101),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(98, 98),
		imgPos: { offset: new kakao.maps.Point(49, 98) },
		button: branchBtns[0],
	},
	{
		title: 'The Bucheon Branch',
		latlng: new kakao.maps.LatLng(37.461487537722576, 126.81399529385989),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(98, 98),
		imgPos: { offset: new kakao.maps.Point(49, 98) },
		button: branchBtns[1],
	},
	{
		title: 'The Seoul Branch',
		latlng: new kakao.maps.LatLng(37.511264342035545, 127.0597881535226),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(98, 98),
		imgPos: { offset: new kakao.maps.Point(49, 98) },
		button: branchBtns[2],
	},
];

for (let i = 0; i < markerOptions.length; i++) {
	new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: new kakao.maps.MarkerImage(
			markerOptions[i].imgSrc,
			markerOptions[i].imgSize,
			markerOptions[i].imgPos
		),
	});

	markerOptions[i].button.addEventListener('click', (e) => {
		e.preventDefault();
		for (let btn of branchBtns) {
			btn.classList.remove('on');
		}
		branchBtns[i].classList.add('on');

		moveTo(markerOptions[i].latlng);
	});
}

window.addEventListener('resize', () => {
	let activeBtn = document.querySelector('.branch li.on');
	let activeIndex = activeBtn.getAttribute('data-index');
	map.setCenter(markerOptions[activeIndex].latlng);
});

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
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
function moveTo(target) {
	var moveLatLon = target;

	map.setCenter(moveLatLon);
}
