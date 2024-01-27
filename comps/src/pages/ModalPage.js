import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>;
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p>Here is an important agreement for you to accept</p>
	</Modal>

	return(
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante eu enim facilisis aliquet non at libero. Ut nibh neque, maximus nec libero consectetur, auctor eleifend nulla. Praesent et sapien sit amet ante consectetur rhoncus. Sed ut accumsan nunc, sit amet ullamcorper arcu. Nulla consectetur leo mauris. In molestie lorem in laoreet varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sed lorem sollicitudin, sollicitudin metus tincidunt, tristique eros. Curabitur lobortis nulla rutrum erat vestibulum, viverra vestibulum lacus consequat. Praesent id elit tortor. 
			</p>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	);

}

export default ModalPage;