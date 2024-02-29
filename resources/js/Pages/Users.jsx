const Users = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <div
                    key={user.id}
                    className="relative overflow-x-auto shadow-md sm:rounded-lg"
                >
                    <div className="bg-white text-gray-300 rounded-md">
                        Name: {user.name}
                    </div>
                    <div className="bg-white text-gray-300 rounded-md">
                        Email: {user.email}
                    </div>
                    <div className="bg-white rounded-md"></div>
                </div>
            ))}
        </div>
    );
};

export default Users;
