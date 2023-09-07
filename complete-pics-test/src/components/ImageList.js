import ImageShow from "./ImageShow";

function ImageList({ images }) {
	const imgObjToCompArr = images.map((image) => {
		return <ImageShow image={image} />
	});
	return(
		<div>
			{imgObjToCompArr}
		</div>
	);
}

export default ImageList;