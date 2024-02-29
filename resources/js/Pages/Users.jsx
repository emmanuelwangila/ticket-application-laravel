const Users = ({ users }) => {
    return (
        <div className="bg-slate-200">
            {users.map((user) => (
                <div key={user.id} className="">
                    <div className=" text-blue-500 rounded-md">
                        Name: {user.name}
                    </div>
                    <div className=" text-blue-500 rounded-md">
                        Email: {user.email}
                    </div>
                    <div className=" rounded-md"></div>
                </div>
            ))}
        </div>
    );
};

export default Users;
