import ImageShow from "./ImageShow";

function ImageList({ images }) {
	const renderedImages = images.map((image) => {
		return <ImageShow image={image}/>
	});

	return(
	<div>
		{/*ImageList: {images.length}*/}
		{renderedImages}	
	</div>
	);
}

export default ImageList;