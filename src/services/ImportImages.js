function ImportImages(r) {
	let images = [];
	//r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	r.keys().map((item, index) => { images.push(r(item)); });
	
	return images;
}
export default ImportImages;

const images = ImportImages(require.context('../textures/Model3DImages', false, /\.(png|jpe?g|svg)$/));

<img src={images['doggy.png']} />
