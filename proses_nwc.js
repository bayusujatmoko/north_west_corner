function proses_nwc(){
	//mengambil data dari form
    var penawaran1 = parseInt(document.getElementById("penawaran1").value);
    var penawaran2 = parseInt(document.getElementById("penawaran2").value);
    var penawaran3 = parseInt(document.getElementById("penawaran3").value);
    var permintaan1 = parseInt(document.getElementById("permintaan1").value);
    var permintaan2 = parseInt(document.getElementById("permintaan2").value);
    var permintaan3 = parseInt(document.getElementById("permintaan3").value);
    var c11 = parseInt(document.getElementById("c11").value);
    var c12 = parseInt(document.getElementById("c12").value);
    var c13 = parseInt(document.getElementById("c13").value);
    var c21 = parseInt(document.getElementById("c21").value);
    var c22 = parseInt(document.getElementById("c22").value);
    var c23 = parseInt(document.getElementById("c23").value);
    var c31 = parseInt(document.getElementById("c31").value);
    var c32 = parseInt(document.getElementById("c32").value);
    var c33 = parseInt(document.getElementById("c33").value);
    //jumlah penawaran dan permintaan
    var jml_penawaran = penawaran1 + penawaran2 + penawaran3;
    var jml_permintaan =  permintaan1 + permintaan2 + permintaan3;

    //inisialisasi array
    var cost = [[c11,c12,c13],[c21,c22,c23],[c31,c32,c33]];
    var barang = [[0,0,0],[0,0,0],[0,0,0]];
    var penawaran = [penawaran1,penawaran2,penawaran3];
    var permintaan = [permintaan1,permintaan2,permintaan3];

    //cek form
    var cekPn1 = document.forms['cekForm']['penawaran1'].value;
    var cekPn2 = document.forms['cekForm']['penawaran2'].value;
    var cekPn3 = document.forms['cekForm']['penawaran3'].value;
    var cekPm1 = document.forms['cekForm']['permintaan1'].value;
    var cekPm2 = document.forms['cekForm']['permintaan2'].value;
	var cekPm3 = document.forms['cekForm']['permintaan3'].value;
	var cekC11 = document.forms['cekForm']['c11'].value;
	var cekC12 = document.forms['cekForm']['c12'].value;
	var cekC13 = document.forms['cekForm']['c13'].value;
	var cekC21 = document.forms['cekForm']['c21'].value;
	var cekC22 = document.forms['cekForm']['c22'].value;
	var cekC23 = document.forms['cekForm']['c23'].value;
	var cekC31 = document.forms['cekForm']['c31'].value;
	var cekC32 = document.forms['cekForm']['c32'].value;
	var cekC33 = document.forms['cekForm']['c33'].value;

    //kondisi input form
    if(penawaran1 < 0 || cekPn1 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai penawaran tidak boleh Kosong atau Negatif";
    }else if(penawaran2 < 0 || cekPn2 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai penawaran tidak boleh Kosong atau Negatif";
    }else if(penawaran3 < 0 || cekPn3 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai penawaran tidak boleh Kosong atau Negatif";
    }else if(permintaan1 < 0 || cekPm1 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai permintaan tidak boleh Kosong atau Negatif";
    }else if(permintaan2 < 0 || cekPm2 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai permintaan tidak boleh Kosong atau Negatif";
    }else if(permintaan3 < 0 || cekPm3 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai permintaan tidak boleh Kosong atau Negatif";
    }else if(c11 < 0 || cekC11 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c12 < 0 || cekC12 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c13 < 0 || cekC13 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c21 < 0 || cekC21 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c22 < 0 || cekC22 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c23 < 0 || cekC23 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c31 < 0 || cekC31 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c32 < 0 || cekC32 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(c33 < 0 || cekC33 == ""){
    	document.getElementById("hasil").innerHTML= "Nilai biaya tidak boleh Kosong atau Negatif";
    }else if(jml_penawaran != jml_permintaan){
    	document.getElementById("hasil").innerHTML= "Jumlah penawaran harus sama dengan jumlah permintaan";
    }else{
    	var i, j, baris = 0, kolom = 0;
        //membandingkan besar penawaran dengan permintaan
    	while (baris != 3){
			if(penawaran[baris] <= permintaan[kolom]){
				barang[baris][kolom] = penawaran[baris];
				permintaan[kolom] = permintaan[kolom] - barang[baris][kolom];
				baris = baris + 1;
			}else{
				barang[baris][kolom] = permintaan[kolom];
				penawaran[baris] = penawaran[baris] - barang[baris][kolom];
				kolom = kolom + 1;
			}
		}
		
        //perhitungan penjumlahan banyak barang dikali biaya
		var biaya = 0;
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				biaya = biaya + (barang[i][j] * cost[i][j]);
			}
		}
        //mencetak hasil biaya
	    document.getElementById("hasil").innerHTML=biaya;

        //kesimpulan
        var text = "Jadi pendistribusian";
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if(barang[i][j] > 0){
                    text = text + " barang dari pabrik "+(i+1)+" ke gudang "+(j+1)+" sebanyak "+barang[i][j]+ ", ";
                }
            }
        }
        document.getElementById("kesimpulan").innerHTML=text;
        document.getElementById("biaya").innerHTML="Sehingga biaya transportasi yang dikeluarkan sebesar Rp "+biaya+",-";
        document.getElementById("table").innerHTML=
        "<table width='40%' border='1' align='center'>"+
        "<tr align='center'>"+
        "<td>"+"Dari/ke"+"</td>"+
        "<td>"+"Gudang 1"+"</td>"+
        "<td>"+"Gudang 2"+"</td>"+
        "<td>"+"Gudang 3"+"</td>"+
        "<td>"+"Penawaran"+"</td>"+
        "</tr>"+
        "<tr align='center'>"+
        "<td>"+"Pabrik 1"+"</td>"+
        "<td>"+barang[0][0]+"</td>"+
        "<td>"+barang[0][1]+"</td>"+
        "<td>"+barang[0][2]+"</td>"+
        "<td>"+penawaran1+"</td>"+
        "</tr>"+
        "<tr align='center'>"+
        "<td>"+"Pabrik 2"+"</td>"+
        "<td>"+barang[1][0]+"</td>"+
        "<td>"+barang[1][1]+"</td>"+
        "<td>"+barang[1][2]+"</td>"+
        "<td>"+penawaran2+"</td>"+
        "</tr>"+
        "<tr align='center'>"+
        "<td>"+"Pabrik 3"+"</td>"+
        "<td>"+barang[2][0]+"</td>"+
        "<td>"+barang[2][1]+"</td>"+
        "<td>"+barang[2][2]+"</td>"+
        "<td>"+penawaran3+"</td>"+
        "</tr>"+
        "<tr align='center'>"+
        "<td>"+"Permintaan"+"</td>"+
        "<td>"+permintaan1+"</td>"+
        "<td>"+permintaan2+"</td>"+
        "<td>"+permintaan3+"</td>"+
        "<td>"+jml_penawaran+"</td>"+
        "</tr>"+
        "</table>";
    }
}