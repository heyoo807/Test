const express = require('express');
const userDBC = require('./lib/db.js');
const router = express.Router();

router.get('/getSongs', async (req, res)=>
{
    let res_get_songs = 
    {
        status_code : 500,
        songs : [] 
    };

    try
    {
        const rows = await userDBC.getSongs();
        res_get_songs.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((song)=>
            {
                res_get_songs.songs.push
                ({
                    songId : song.songId,
                    title : song.title,
                    singer : song.singer,
                    img_src : song.img_src,
                    mp3_src : song.mp3_src,
                    lyrics : song.lyrics,
                    genre : song.genre
                });
            });
        }
        else
        {
            console.log('곡 없음');
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
    finally
    {

        //응답 
        //res.json(res_get_users);
        var result = '';

        for(var i=0; i < res_get_songs.songs.length; i++)
        {
        result += res_get_songs.songs[i].songId;
        result += res_get_songs.songs[i].title;
        result += res_get_songs.songs[i].singer;
        result += res_get_songs.songs[i].img_src;
        result += res_get_songs.songs[i].mp3_src;
        result += res_get_songs.songs[i].lyrics;
        result += res_get_songs.songs[i].genre;

        result += "<br>";
        }

        res.send(result);
    }
});


module.exports = router;
// https://starlightbox.tistory.com/80