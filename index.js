#!/usr/bin/env node
const exect = require('child_process').exec;
const progressBar = require('./progressBar');
const path = require('path');
const fs = require('fs');

const playSong = function (receivedSoundPath, receivedSoundTime){
    
    const mainPath = path.dirname(fs.realpathSync(__filename));
    const soundPath = receivedSoundPath ? receivedSoundPath : path.join(mainPath, './musicakarol');
    const soundTime = receivedSoundTime ? receivedSoundTime : 38


    const linuxcmd = 'paplay '+soundPath+'.ogg';
    const windowscmd = '"'+path.join(mainPath, './forWindows.vbs')+'" "'+soundPath+'.mp3"';
    const maccmd = 'afplay '+soundPath+'.mp3';
    
    const platform = process.platform;
    console.log('📰 Para minha Karol: 📰');
    console.log('Oi amor 👩‍❤️‍👩');
    console.log('💚💚💚💚💚');
    console.log('Estou com saudades! 💓💓💓💓💓');
    console.log('💜💜💜💜💜');
    console.log('Aguardo a gente agarradinha para o show de sabádo!');
    console.log(' ❤️❤️ BEIJOS TE AMO!!! ❤️❤️');
    switch(platform){
        case 'linux':
            exec(linuxcmd);
            break;
        case 'win32':
            exec(windowscmd);
            break;
        case 'darwin':
            exec(maccmd);
            break;
    }
    progressBar(soundTime);


    function exec(cmd){
        return exect(cmd, function (error, stdout, stderr) {
           if(error)
               console.error(error);
        });
    }
}

module.exports = playSong;

if (!module.parent) {
  playSong();
}