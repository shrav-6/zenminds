updateonHTML()
function updateonHTML() {
    console.log("inside updateonHTML")
    var array = JSON.parse(localStorage.getItem("profile"));
    console.log("update account")
    console.log(array)

    var nametag = document.getElementById("name")
    nametag.value = array[0];
    var emailtag = document.getElementById("email")
    emailtag.value = array[1];

    var songstag = document.getElementById("songs")
    songstag.value = array[2];
    varsongsout = document.getElementById("songsout")
    songsout.innerHTML = array[2];

    var walktag = document.getElementById("walk")
    walktag.value = array[3];
    varwalkout = document.getElementById("walkout")
    walkout.innerHTML = array[3];

    var talktag = document.getElementById("talk")
    talktag.value = array[4];
    vartalkout = document.getElementById("talkout")
    talkout.innerHTML = array[4];

    var eattag = document.getElementById("eat")
    eattag.value = array[5];
    vareatout = document.getElementById("eatout")
    eatout.innerHTML = array[5];

    var naptag = document.getElementById("nap")
    naptag.value = array[6];
    varnapout = document.getElementById("napout")
    napout.innerHTML = array[6];

    var gazetag = document.getElementById("gaze")
    gazetag.value = array[7];
    vargazeout = document.getElementById("gazeout")
    gazeout.innerHTML = array[7];

    var exercisetag = document.getElementById("exercise")
    exercisetag.value = array[8];
    varexerciseout = document.getElementById("exerciseout")
    exerciseout.innerHTML = array[8];

    var meditatetag = document.getElementById("meditate")
    meditatetag.value = array[9];
    varmeditateout = document.getElementById("meditateout")
    meditateout.innerHTML = array[9];

    var playtag = document.getElementById("play")
    playtag.value = array[10];
    varplayout = document.getElementById("playout")
    playout.innerHTML = array[10];

    var watchtag = document.getElementById("watch")
    watchtag.value = array[11];
    varwatchout = document.getElementById("watchout")
    watchout.innerHTML = array[11];
}

function updateForm() {
    console.log("inside updateform")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var songs = document.getElementById("songs").value;
    var walk = document.getElementById("walk").value;
    var talk = document.getElementById("talk").value;
    var eat = document.getElementById("eat").value;
    var nap = document.getElementById("nap").value;
    var gaze = document.getElementById("gaze").value;
    var exercise = document.getElementById("exercise").value;
    var meditate = document.getElementById("meditate").value;
    var play = document.getElementById("play").value;
    var watch = document.getElementById("watch").value;
    array = [name, email, songs, walk, talk, eat, nap, gaze, exercise, meditate, play, watch];
    localStorage.setItem("profile", JSON.stringify(array));
    console.log(JSON.parse(localStorage.getItem("profile")));
    updateonHTML();    
}