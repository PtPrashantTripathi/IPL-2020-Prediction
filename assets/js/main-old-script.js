fetch("../assets/json/ipl2020.json", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let index = 1;
    function findByKey(key, value) {
      return (item, i) => item[key] === value;
    }
    if (new Date("11/11/2020 00:00") < new Date()) {
      window.location.replace("timetable");
    } else if (window.location.search.indexOf("i") > -1) {
      index = new URLSearchParams(window.location.search).get("i");
    } else {
      var ist = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      });
      var d = new Date(ist);
      var formattedDate = d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      var t = d.getHours() + d.getMinutes() / 60;
      let findParams = findByKey("Date", formattedDate);
      //let findParams = findByKey('Date', '08 Nov 2020');
      index = json.findIndex(findParams);
      //if(index < 0) window.location.replace("timetable");
      if (t > 18.5 && json[index].IST === "3:30 PM") index++;
    }
    document.getElementById("mid").innerHTML =
      "IPL t20 - " + json[index].Match + " of 56";
    document.getElementById("date").innerHTML =
      json[index].Day + ", " + json[index].Date + " " + json[index].IST;
    document.getElementById("ti1").src =
      "assets/images/" + json[index].team_1 + ".jpg";
    document.getElementById("ti2").src =
      "assets/images/" + json[index].team_2 + ".jpg";
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
      json[index].Result +
      "</b>";
    document.getElementById("tpb1").style.width =
      json[index].team_1_win_prob * 100 + "%";
    document.getElementById("tpb2").style.width =
      json[index].team_2_win_prob * 100 + "%";
  });
