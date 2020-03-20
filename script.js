const video_file = document.getElementById('video');
const pause_button = document.getElementById('pauseButton');
const play_button = document.getElementById('playButton');
const the_time = document.getElementById('the_time');
const progress_bar = document.getElementById('videoProgress');

const play_video =()=>{
    pause_button.classList.remove('hideMe')
    play_button.classList.add('hideMe')
    video_file.play();
}

const pause_video = ()=>{
    pause_button.classList.add('hideMe')
    play_button.classList.remove('hideMe')
    video_file.pause();
}
const convert_time = (time)=>{
    const mins = time/60
    const seconds = time%60
    mins<10?console.log(0+mins.toFixed(0)):console.log(mins.toFixed(0))
    seconds<10?console.log(0+seconds.toFixed(0)):console.log(seconds.toFixed(0))
    return `${mins.toFixed(0)}:${seconds.toFixed(0)}`
}

setTimeout(()=>{
    console.log(video_file.duration)
    the_time.innerHTML = convert_time(video_file.duration)
},500)

const calculate_time = ()=>{
    let mins=0;
    let seconds=0;

    seconds = video_file.currentTime.toFixed(0)

    if(seconds >= 60){
        seconds = video_file.currentTime.toFixed(0)-60
        mins = 1;
    }
    if(seconds<10){
        seconds = '0'+seconds
    }

    return `${mins}:${seconds}`

}




video_file.addEventListener('timeupdate',()=>{
    console.log(video_file.currentTime.toFixed(0))

    the_time.innerHTML = calculate_time()
})

pause_button.addEventListener('click',pause_video)
play_button.addEventListener('click',play_video)