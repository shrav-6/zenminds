var array = ""
function validateForm(btnn) {
    
    console.log("inside validate form")
    console.log(btnn)
    const btn = document.getElementById('createaccount'); 
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (password != confirmpassword || password == null || password =="")
    {   console.log("inside if")
        alert("Passwords do not match! Kindly refill the form!");    
    }
    else 
    {   
        console.log("inside else")
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
        const data = JSON.stringify(array);
        console.log(array)           
        localStorage.setItem("profile", JSON.stringify(array));
        window.location.href = "profilepage.html";            
        
    }
       
}
