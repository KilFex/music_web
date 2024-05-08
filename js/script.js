let musicList = [{
    id: '1', urlImage:'',title:'Billie Jean',playing:'1.040.811.041', time:'4:53',album:'thriller' 
},
{   
    id: '2', urlImage:'',title:'Beat it',playing:'1.811.041', time:'4:18',album:'thriller'
},
{
    id: '3', urlImage:'',title:'smooth',playing:'811.041', time:'4:17',album:'thriller'
    
}]

const musicListDiv= document.getElementById('musicList')

musicList.forEach((music)=>{
    const elementListMusic= document.createElement('div')
    elementListMusic.setAttribute('class','element_list_music')
    
    const idElementListMusic= document.createElement('div')
    idElementListMusic.setAttribute('class','id_element_list_music')
    idElementListMusic.textContent=music.id

    const imageElementMusic= document.createElement('div')
    imageElementMusic.setAttribute('class','image_element_music')

    const playElementMusic= document.createElement('div')
    playElementMusic.setAttribute('class','play_element_music')
    playElementMusic.textContent=music.playing

    const timeElementMusic= document.createElement('div')
    timeElementMusic.setAttribute('class','time_element_music')
    timeElementMusic.textContent=music.time

    const albumElementMusic= document.createElement('div')
    albumElementMusic.setAttribute('class','album_element_music')
    albumElementMusic.textContent=music.album

musicListDiv.append(elementListMusic)
elementListMusic.append(idElementListMusic,imageElementMusic,playElementMusic,timeElementMusic,albumElementMusic)
})
/*<div class="detalle-musica">
                <div class="numero"></div>
                <div class="caratula-album"></div>
                <div class="reproducciones"></div>
                <div class="tiempo-musica"></div>
                <div class="album"></div>
            </div>*/