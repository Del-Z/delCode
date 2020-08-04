const del = new Del;

function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output").innerHTML = del.cry(input);
}