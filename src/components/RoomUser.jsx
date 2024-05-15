function RoomUsers({users})
{
    console.log("RoomUsers", users);
    return (
        <>
        <div className="map-users">
            <h4>Connected User</h4>
            {users.map((u, index) =>
                <h6 key={index} className="user-count">{u}</h6>
            )}
        </div>
        </>
    )

}
export default RoomUsers;