let songs = [
    {
        Id: '1',
        name: 'I miss you',
        path: 'music/I_Miss_You.mp3',
        artist: 'Blink_182',
        time:'3:49',
        album:'Blindado',
        cover: 'image/Blink_182.jpg'
    },
    {
        Id: '2',
        name: 'Liendrosa',
        path: 'music/Mi_Liendrosa.mp3', 
        artist: 'Carmencita',
        time:'3:00',
        album:'Recuerdos',
        cover: 'image/Carmencita.jpg'
    },
    {
        Id: '3',
        name: 'Fuiste',
        path: 'music/Fuiste.mp3',
        artist: 'Guilda',
        time:'3:00',
        album:'Sola Yo',
        cover: 'image/Gilda.jpg'
    },
    {
        Id: '4',
        name: 'Noches Vacias',
        path: 'music/NOCHES_VACÍAS.mp3',
        artist: 'Guilda',
        time:'3:22',
        album:'Sola Yo',
        cover: 'image/Gilda.jpg'
    },
    {
        Id: '5',
        name: 'Feel Good',
        path: 'music/Feel_Good.mp3',
        artist: 'Gorillaz',
        time:'3:41',
        album:'Feel',
        cover: 'image/Gorillaz.jpg'
    },
    {
        Id: '6',
        name: 'Im Yours',
        path: 'music/Im_Yours.mp3',
        artist: 'Jason Marz',
        time:'4:02',
        album:'Playa',
        cover: 'image/Jason_Marz.jpg'
    },
    {
        Id: '7',
        name: 'Labio Compartidos',
        path: 'music/Mana - LabiosCompartidos.mp3',
        artist: 'Mana',
        time:'4:45',
        album:'Amar es Combatir',
        cover: 'image/Mana.jpg'
    },
    {
        Id: '8',
        name: 'Nunca es suficiente',
        path: 'music/Nunca_Es_Suficiente.mp3',
        artist: 'Natalie',
        time:'3:58',
        album:'El Valle',
        cover: 'image/Natalie.jpg'
    },
    {
        Id: '9',
        name: 'Pill',
        path: 'music/Pill.mp3',
        artist: 'Heuze, Xcrona',
        time:'2:16',
        album:'PILL',
        cover: 'image/Pill.jpg'
    },
    {
        Id: '10',
        name: 'Nuestra Afliccion',
        path: 'music/Nuestra_Aflicción.mp3',
        artist: 'PXNDX',
        time:'5:06',
        album:'Olidada',
        cover: 'image/PXNDX.jpg'
    },
    {
        Id: '11',
        name: 'Silbando',
        path: 'music/Silbando.mp3',
        artist: 'Ribereños',
        time:'3:06',
        album:'Caloreando',
        cover: 'image/Ribereños.jpg'
    },
    {
        Id: '12',
        name: 'Cradles',
        path: 'music/Cradles.mp3',
        artist: 'Sub-Urban',
        time:'3:29',
        album:'Baby-First',
        cover: 'image/Sub_Urban.jpg'
    },
    {
        Id: '13',
        name: 'One Headlight',
        path: 'music/One_Headlight.mp3',
        artist: 'The Walflowers',
        time:'4:38',
        album:'Light',
        cover: 'image/The_Wallflowers.jpg'
    },
    {
        Id: '14',
        name: 'Close to me',
        path: 'music/Close_To_Me.mp3',
        artist: 'The Cure',
        time:'3:23',
        album:'Armary',
        cover: 'image/The_Cure.jpg'
    },
    {
        Id: '15',
        name: 'Just Like Heaven',
        path: 'music/Just_Like_Heaven.mp3',
        artist: 'The Cure',
        time:'3:26',
        album:'Armary',
        cover: 'image/The_Cure.jpg'
    },
    {
        Id: '16',
        name: 'Rosas',
        path: 'music/Rosas.mp3',
        artist: 'Van Gogh',
        time:'3:51',
        album:'Paris',
        cover: 'image/Van_Gogh.jpg'
    },
    {
        Id: '17',
        name: 'Riptide',
        path: 'music/Riptide.mp3',
        artist: 'Vance Joy',
        time:'3:24',
        album:'Joy',
        cover: 'image/Vance _joy.jpg'
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

const buscarCancion = () => {
    const input = document.getElementById('buscar').value.toLowerCase();
    const musicElements = document.querySelectorAll('.element_list_music');

    musicElements.forEach((element) => {
        const musicName = element.querySelector('.image_element_music').textContent.toLowerCase();
        if (musicName.includes(input)) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
};

document.getElementById('buscar').addEventListener('input', buscarCancion);

