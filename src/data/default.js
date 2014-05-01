var id = 0;

exports.genId = function() {
	return 'gen-' + (++id);
};

exports.trials = [
    { title: "Java", desc: "Simple Java trial" },
    { title: "Python 3", desc: "Simple Py3 trial" },
    { title: "JavaScript", desc: "Simple JS trial" }
];

exports.steps = [
    { title: "Basic ops", desc: "print 1+1", done: true },
    { title: "Basic ops", desc: "print 1+1", done: true },
    { title: "Basic ops", desc: "print 1+1", active: true },
    { title: "Basic ops", desc: "print 1+1" },
    { title: "Basic ops", desc: "print 1+1" },
    { title: "Basic ops", desc: "print 1+1" },
    { title: "Basic ops", desc: "print 1+1" }
];

exports.step = {
    title: "Basic ops",
    desc: "print 1+1"
};