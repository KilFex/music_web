let songs = [
    {
        Id: '1',
        name: 'song 1',
        path: 'music/Song 1.mp3',
        artist: 'artist 1',
        time:'4:02',
        album:'Renegados',
        cover: 'image/cover 1.png'
    },
    {
        Id: '2',
        name: 'song 2',
        path: 'music/Song 2.mp3', 
        artist: 'artist 2',
        time:'3:21',
        album:'destroyer',
        cover: 'image/cover 2.png'
    },
    {
        Id: '3',
        name: 'song 3',
        path: 'music/Song 3.mp3',
        artist: 'artist 3',
        time:'4:02',
        album:'magnific',
        cover: 'image/cover 3.png'
    },
    {
        Id: '4',
        name: 'song 4',
        path: 'music/Song 4.mp3',
        artist: 'artist 4',
        time:'4:11',
        album:'Oleilo',
        cover: 'image/cover 4.png'
    },
    {
        Id: '5',
        name: 'song 5',
        path: 'music/Song 5.mp3',
        artist: 'artist 5',
        time:'4:21',
        album:'facheros',
        cover: 'image/cover 5.png'
    },
]

const musicListDiv = document.getElementById('musicList');

songs.forEach((music, index) => {
    const elementListMusic = document.createElement('div');
    elementListMusic.setAttribute('class', 'element_list_music');
    elementListMusic.setAttribute('data-index', index);
    elementListMusic.addEventListener('click', () => {
        setMusic(index);
        playMusic();
        document.querySelector('.imagen-artista img').src = music.cover;
    });

    const idElementListMusic = document.createElement('div');
    idElementListMusic.setAttribute('class', 'id_element_list_music');
    idElementListMusic.textContent = music.Id;

    const imageElementMusic = document.createElement('div');
    imageElementMusic.setAttribute('class', 'image_element_music');
    imageElementMusic.textContent = music.name;

    const playElementMusic = document.createElement('div');
    playElementMusic.setAttribute('class', 'play_element_music');
    playElementMusic.textContent = music.artist;

    const timeElementMusic = document.createElement('div');
    timeElementMusic.setAttribute('class', 'time_element_music');
    timeElementMusic.textContent = music.time;

    const albumElementMusic = document.createElement('div');
    albumElementMusic.setAttribute('class', 'album_element_music');
    albumElementMusic.textContent = music.album;

    musicListDiv.append(elementListMusic);
    elementListMusic.append(idElementListMusic, imageElementMusic, playElementMusic, timeElementMusic, albumElementMusic);
});


