function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}

$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#dataTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  });
  

$("#Obat").ready(function () {
    var tabel = document.getElementById("Obat")
    getAll().then(response => {
        console.log(response)
        for(var i = 0; i <response.length; i++){
            const tr = tabel.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();

        
            console.log(response[i])
            td1.innerHTML = response[i]['Id_Obat'];
            td2.innerHTML = response[i]['Nama_Obat'];
            td3.innerHTML = response[i]['Harga'];
            td4.innerHTML = response[i]['Expired'];
            td5.innerHTML = response[i]['Jumlah'];
            td6.innerHTML = `<div class ="justify content-center">
            <a class="btn ms-2" style="background-color: #858ab3; border:none;" href="updateData.html?id=${response[i].Id_Obat}">Edit</a>
            <button type ="button" class="btn ms-2" style="background-color: #858ab3; border:none;" onclick="del(${response[i].Id_Obat});">Delete</button>
            </div>`
            }
        }
    )
});