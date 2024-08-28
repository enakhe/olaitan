$(document).ready(function() {
    document.getElementById('open').addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "100%";
    })

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "0";
    })
})