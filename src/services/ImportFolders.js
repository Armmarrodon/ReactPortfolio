function ImportFolders(r) {
	let images = [];
	//r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	r.keys().map((item, index) => { images.push(r(item)); });

	return images;
}
export default ImportFolders;




