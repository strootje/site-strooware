document.addEventListener("DOMContentLoaded", e => {
	document.querySelectorAll("link[rel='preload'][as='style']").forEach(ref => {
		ref.rel = 'stylesheet';
	});
});
