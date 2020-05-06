

function panggilSort(){
	var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
	console.log('Sebelumnya :', angka.join(", "));
	
	var angka2 = angka.sort();
	console.log('Ascending :', angka2.join(", "));

	var angka3 = angka2.reverse();
	console.log('Descending :', angka3.join(", "));
	
	var angka4 = angka.filter(item => item > 10);
	console.log('Filter > 10 :', angka4.join(", "));

}

panggilSort();


// C:\Users\USER\Documents\JS\javascript>node tugas25.js
// Sebelumnya : 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16
// Ascending : 1, 16, 2, 2, 24, 39, 41, 50, 7, 76, 9
// Descending : 9, 76, 7, 50, 41, 39, 24, 2, 2, 16, 1
// Filter > 10 : 76, 50, 41, 39, 24, 16