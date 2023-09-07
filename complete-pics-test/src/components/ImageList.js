import ImageShow from "./ImageShow";
import "../css/ImageList.css";

function ImageList({ images }) {
	const imgObjToCompArr = images.map((image, key) => {
		return <ImageShow key={image.id} image={image} />
	});
	return(
		<div className="image-list">
			{imgObjToCompArr}
		</div>
	);
}

export default ImageList;