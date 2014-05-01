var id = 0;

exports.genId = function() {
	return 'gen-' + (++id);
}