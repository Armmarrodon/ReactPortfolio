
export default function ForOnImages(images) {
    var rows = [];
    for (let i = 0; i < images.length; i++) {
        rows.push(<img className="gif" src={images[i]} key={i} />);
    }
    return rows;
}