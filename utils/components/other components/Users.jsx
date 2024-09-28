// List of users
import Button from "../../../utils/components/Buttons/Button";

export default function Users({users, button, dashboard=false}) {    
    return (
        <>
        <div className="w-[50%] mt-2 h-96 overflow-y-auto">
          <div className="flex flex-row justify-between">
           { dashboard && <h3 className="text-2xl font-bold ">User List</h3>}
        
           </div>
        <div className="bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Status</th>
                <th className=" text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className=" flex flex-row px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                   <p className="mt-4">{user.name}</p> </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">{user.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
    );
}