function terimainput(){
	var x=document.forms['form']['nama'].value;
	var y=document.forms['form']['alamat'].value;
	var z=document.forms['form']['tempat'].value;
	var a=document.forms['form']['tanggal'].value;
	var b=document.forms['form']['telfon'].value;
	var c=document.forms['form']['email'].value;
	var d=document.forms['form']['namadestinasi'].value;
	var e=document.forms['form']['kategori'].value;
	var f=document.forms['form']['lokasi'].value;
	var g=document.forms['form']['jarak'].value;
	var h=document.forms['form']['harga'].value;
	var i=document.forms['form']['deskripsi'].value;
	
	
	var tabel = document.getElementById("tabelinputan");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);

	
	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
	cell5.innerHTML = b;
	cell6.innerHTML = c;
	cell7.innerHTML = d;
	cell8.innerHTML = e;
	cell9.innerHTML = f;
	cell10.innerHTML = g;
	cell11.innerHTML = h;
	cell12.innerHTML = i;
	
	
	alert("Data Berhasil Dientry");
}
	