function _(query){
	return document.querySelector(query);
}
function _all(query){
	return document.querySelectorAll(query);
}
let songList = [
	{
		thumbnail:"https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		songname:"Into the Future",
		artistname:"Mega Bee"
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
		songname:"erbium bubble",
		artistname:"erbium bubble",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1504992963429-56f2d62fbff0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
		songname:"triolic glob",
		artistname:"triolic glob",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1576670397859-90ea4ec76a3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1595&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
		songname:"emergency shift",
		artistname:"emergency shift",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1498225427886-51df3924bfdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
		songname:"How it Began",
		artistname:"Howl Mea",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1551735066-f4d099712dae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=909&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
		songname:"promethean antigravity",
		artistname:"Jupiter",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1560753091-796299eee765?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
		songname:"zirconium",
		artistname:"Moore's Leap",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1549693578-c58fd3474203?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1656&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
		songname:"Perfect Storm",
		artistname:"Causmic",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1560428969-34a7bb7917f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=882&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
		songname:"Ecstacy of the Heart",
		artistname:"Reams",
	},
	{
		thumbnail:"https://images.unsplash.com/photo-1567750722916-c0096e1ebc67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
		audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
		songname:"Dynamite Touch",
		artistname:"Clove Leaf",
	}
];

let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
			<img src="${song.thumbnail}">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
	let song = songList[songIndex];
	main.thumbnail.setAttribute("src",song.thumbnail);
	document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("${song.thumbnail}") center no-repeat`;
	document.body.style.backgroundSize = "cover";	
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src", `${song.audio}`);
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}
setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});
main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});
main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);
