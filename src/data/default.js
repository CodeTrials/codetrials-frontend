var id = 0;

exports.genId = function() {
	return 'gen-' + (++id);
};

exports.trials = [
    { title: "Java", desc: "Simple Java trial" },
    { title: "Python 3", desc: "Simple Py3 trial" },
    { title: "JavaScript", desc: "Simple JS trial" }
];