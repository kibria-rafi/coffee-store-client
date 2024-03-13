

const User = ({user}) => {
    const {email,createdAt} =user;
    return (
        <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>{email}</td>
        <td>{createdAt}</td>
      </tr>
      
    </tbody>
  </table>
</div>
    );
};

export default User;