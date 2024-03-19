import React, {useEffect,useState} from 'react';
import axios from 'axios';
export default function Loglist() {
    
    const [logs, setlogs] = useState([]);

    useEffect(() => {
        // Fetch data from backend API when component mounts
        axios.get('http://localhost:5063/api/LogSheet')
          .then(response => {
            setlogs(response.data);
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }, []);

      const fetchLogs = async () => {
        try {
          const response = await axios.get('your-backend-endpoint/logs');
          setlogs(response.data);
        } catch (error) {
          console.error('Error fetching logs:', error);
        }
      };

      const handleDelete = async (id) => {
        try {
          await axios.delete('http://localhost:5063/api/LogSheet/${id}');
          fetchLogs(); // Refresh logs after deletion
        } catch (error) {
          console.error('Error deleting log:', error);
        }
      };
  return (
    
    <div>
      <h1>Logs List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time From</th>
            <th>Time To</th>
            <th>Total Hrs</th>
            <th>Modules</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.date}</td>
              <td>{log.timeFrom}</td>
              <td>{log.timeTo}</td>
              <td>{log.totalHours}</td>
              <td>{log.modules}</td>
              <td>{log.type}</td>
              <td>{log.status}</td>
              <td>
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(log.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
