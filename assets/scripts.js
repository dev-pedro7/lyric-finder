function FindLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}


const form = document.getElementById('lyrics_form')
form.addEventListener('submit', el =>{
    el.preventDefault()
    doSubmit()
})


async function doSubmit(){
    const lyricsView = document.getElementById('lyricView')
    const artist = document.querySelector('#artist')
    const song = document.querySelector('#song')



    const responseLyric = await FindLyrics(artist.value, song.value)
    const data = await responseLyric.json()
    lyricsView.innerHTML = data.lyrics
}



/*
async function getLyrics(){
    try{
    const camiseta = await FindLyrics('teto', "zumzumzum")
    console.log(camiseta)
    }
    catch (error){
        console.error("erro ao buscar letra:", error)
    }
}
getLyrics()
*/