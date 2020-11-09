fetch('../assets/json/ipl2020.json').then((res) => res.json()).then((data) => {
	let output = '';
	data.forEach(function(i,id){
	output += `
	<tr>
		<td class="text-left number">${i.Match} <i class="fa fa-caret-up" aria-hidden="true"></i></td>
		<td class="text-left"><span>${i.Date} - ${i.IST}</span></td>
		<td><a href="/?i=${id}">${i.team_1} vs ${i.team_2}</a></td>
		<td>${(i.team_1_win_prob * 100).toFixed(2)} : ${(i.team_2_win_prob * 100).toFixed(2)}</td>
		<td>${i.Result}</td>
	</tr>`;
	});
	document.getElementById('ipldata').innerHTML = output;
})
