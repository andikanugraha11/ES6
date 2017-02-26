
let dika = {
	'npm' 	: '57414084',
	'cetak'	: function(){
		var self = this;
		setTimeout(()=>{console.log(self.npm)})
	}
}

dika.cetak();