fetch("../assets/json/ipl2020.json", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let index = new URLSearchParams(window.location.search).get("i") || 59;
    function findByKey(key, value) {
      return (item, i) => item[key] === value;
    }
    document.getElementById("mid").innerHTML =
      "IPL t20 - " + json[index].Match + " of 60";
    document.getElementById("date").innerHTML =
      json[index].Day + ", " + json[index].Date + " " + json[index].IST;
    document.getElementById("ti1").src =
      "../assets/images/" + json[index].team_1 + ".jpg";
    document.getElementById("ti2").src =
      "../assets/images/" + json[index].team_2 + ".jpg";
    document.getElementById("tn1").innerHTML = json[index].team_1;
    document.getElementById("tn2").innerHTML = json[index].team_2;
    document.getElementById("tnm1").innerHTML = json[index].team_1;
    document.getElementById("tnm2").innerHTML = json[index].team_2;
    document.getElementById("tp1").innerHTML =
      (json[index].team_1_win_prob * 100).toFixed(4) + "%";
    document.getElementById("tp2").innerHTML =
      (json[index].team_2_win_prob * 100).toFixed(4) + "%";
    document.getElementById("win").innerHTML =
      "Probility is higher for : <b style='color:#32CD32'>" +
      json[index].Prediction +
      "</b>";
    document.getElementById("tpb1").style.width =
      json[index].team_1_win_prob * 100 + "%";
    document.getElementById("tpb2").style.width =
      json[index].team_2_win_prob * 100 + "%";
  });
