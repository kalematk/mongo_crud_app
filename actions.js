import express  from "express";
import mongoose from "mongoose";
 const router = express.Router();
import Game from './models/game.js';
import Genre from './models/gener.js';




router.post('/createGame',async(req,res)=>{
    const {genreId,gameName,gamePrice,gameDescription,gameImge}= req.body;
    const id = new mongoose.Types.ObjectId();

    const _newgenre = new Game({
        _id: id,
        genreId : genreId,
        gameName  : gameName,
        gamePrice:gamePrice,
        gameDescription:gameDescription,
        gameImge:gameImge
    })
    _newgenre.save()
    .then(reasults =>{
        return res.status(200).json({
            message: reasults
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
    })

})
router.post('/createGenre',async(req,res)=>{
    const {genreName,genreDesc}= req.body;
    const id = new mongoose.Types.ObjectId();

    const _newgenre = new Genre({
        _id: id,
        genreName : genreName,
        genreDesc  : genreDesc
    })
    _newgenre.save()
    .then(reasults =>{
        return res.status(200).json({
            message: reasults
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
    })
})
router.get('/readAllGames',async(req,res)=>{
    Game.find()
    .populate('genreId')
      .then(gameList=>{
        return res.status(200).json({
            message: gameList
        })
      })
      .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
      })
})

router.get('/readAllGenres',async(req,res)=>{
      Genre.find()
      .then(genresList=>{
        return res.status(200).json({
            message: genresList
        })
      })
      .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
      })
})
router.delete('/deleteGame/:gid',async(req,res)=>{
    const gid =req.params.gid;
    Game.findByIdAndDelete(gid)
    .then(reasults =>{
        return res.status(200).json({
           // message: reasults
           message:"Delete Game"
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
    })

})

router.put('/updateGame/:gid',async(req,res)=>{
    const gid=req.params.gid;
    const {gamePrice,isAvailable,genreId,gameDescription,gameImge,gameName}= req.body;
    Game.findById(gid)
    .then(game =>{
        game.gamePrice= gamePrice;
        game.isAvailable=isAvailable;
        game.genreId=genreId;
        game.gameDescription=gameDescription;
        game.gameImge=gameImge;
        game.gameName=gameName;


        game.save()
        .then(game_update =>{
            return res.status(200).json({
                message: game_update
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message: error.message
            })
        })

    })
    .catch(error=>{
        return res.status(500).json({
            message: error.message
        })
    })



})

router.get('/readGameById/:gid',async(req,res)=>{
    const gid=req.params.gid;
    Game.findById(gid)
    .populate(`genreId`)
    .then(game =>{
        return res.status(200).json({
            message:game
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/readGameByGenre/:genId',async(req,res)=>{
    const genId =req.params.genreId;
    Game.find({genreId:genId})
    .then(gameList=>{
        return res.status(200).json({
            message: gameList
        })
      })
      .catch(error=>{
        return res.status(500).json({
            message:error.message
        })
      })
})






 export default router;