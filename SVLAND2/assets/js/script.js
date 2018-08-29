
$(document).ready(() => {
	$('form').find('.age').on({
		input: function(event, x) {
			let vals = $('form').find('.age').val();
			for(let i = 0; i < vals.length; i++){
				vals = vals.replace(new RegExp(/[a-zA-Z, \t]/, 'g'), '');
				$('form').find('.age').val(vals);
			}
		}
	})
});
