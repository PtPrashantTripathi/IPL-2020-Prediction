fetch('assets/json/ipl2020.json').then((res) => res.json()).then((data) => {
	let output = '';
	let p=0;
	//console.log(if( data[0].Prediction == data[0].Result ) ? 'Success' : 'Danger');
	data.forEach(function(i,id){
	if(i.Prediction == i.Result) p++;
	output += `
	<tr>
		<td class="text-left number">${i.Match} <i class="fa fa-caret-up" aria-hidden="true"></i></td>
		<td class="text-left"><span>${i.Date} - ${i.IST}</span></td>
		<td><a href="match?i=${id}">${i.team_1} vs ${i.team_2}</a></td>
		<td>${(i.team_1_win_prob * 100).toFixed(2)} : ${(i.team_2_win_prob * 100).toFixed(2)}</td>
		<td class="table-${i.Prediction == i.Result ? 'success' : 'danger'}">${i.Prediction}</td>
		<td>${i.Result}</td>
	</tr>`;
	});
	output += `<tr><td colspan="6" class="text-right"><b>Prediction Precision Per Match was ${(p/60*100).toFixed(2)}% </b></td></tr>`;
	document.getElementById('ipldata').innerHTML = output;
})
