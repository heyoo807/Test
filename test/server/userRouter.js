const express = require('express');
const userDBC = require('./lib/db.js');
const router = express.Router();

router.get('/getUsers', async (req, res)=>
{
    let res_get_users = 
    {
        status_code : 500,
        users : [] 
    };

    try
    {
        const rows = await userDBC.getUsers();
        res_get_users.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((song)=>
            {
                res_get_users.users.push
                ({
                    userId : user.userId,
                    userPassword : user.userPassword,
                    userName : user.userName,
                    userSignUpDate : user.userSignUpDate
                });
            });
        }
        else
        {
            console.log('사용자 없음');
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

        for(var i=0; i < res_get_users.users.length; i++)
        {
        result += res_get_users.users[i].userId;
        result += res_get_users.users[i].userPassword;
        result += res_get_users.users[i].userName;
        result += res_get_users.users[i].userSignUpDate;
        
        result += "<br>";
        }

        res.send(result);
    }
});


module.exports = router;
// https://starlightbox.tistory.com/80