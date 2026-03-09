const roomsData = [
{area:"Đông Hòa",price:2000000,address:"Đông Hòa"},
{area:"Dĩ An",price:1800000,address:"Dĩ An"}
];

displayRooms(roomsData);

function searchRoom(){

let area = document.getElementById("areaInput").value.toLowerCase();

let result = roomsData.filter(room =>
room.area.toLowerCase().includes(area)
);

displayRooms(result);

}

function displayRooms(rooms){

let container = document.getElementById("roomContainer");

container.innerHTML="";

rooms.forEach(room=>{

container.innerHTML += `

<div class="room-card">

<img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4">

<p>${room.area}</p>
<p>${room.price}</p>

</div>

`;

});

}
