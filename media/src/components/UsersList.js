import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function useThunk(thunk) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const runThunk = useCallback((arg) => {
		setIsLoading(true);
		dispatch(thunk(arg))
			.unwrap()
			.catch(err => setError(err))
			.finally(() => setIsLoading(false));
	}, [dispatch, thunk]);

	return [ runThunk, isLoading, error ];
}

function UsersList() {
	const [ doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
	const [ doAddUser, isCreatingUser, creatingUserError ] = useThunk(addUser);

	const { data } = useSelector((state) => {
		return state.users;	// { data: [], isLoading: false, error: null }
	});

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doAddUser();
	};

	if (isLoadingUsers) {
		return (
			<Skeleton times={6} className="h-10 w-full" />
		);
	}

	if (loadingUsersError) {
		return (
			<div>
				Error fetching data ...
			</div>
		);
	}

	const renderedUsers = data.map((user) => {
		return (
			<div key={user.id} className="mb-2 border rounded">
				<div className="flex p-2 justify-between items-center cursor-pointer">
					{user.name}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="flex flex-row justify-between m-3">
				<h1 className="m-2 text-xl">Users</h1>
				{
					isCreatingUser ? 'Creating User...'
					: <Button onClick={handleUserAdd}>
							+ Add User
						</Button>
				}
				{creatingUserError && 'Error creating user...'}
			</div>
			{renderedUsers}
		</div>
	);
}

export default UsersList;
