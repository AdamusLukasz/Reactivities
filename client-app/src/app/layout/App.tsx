import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { Activity } from '../models/activity';
import NavBar from './navbar';

function App() {
const [activities, setActivities] = useState<Activity[]>([]);

useEffect(() => {
  axios.get<Activity[]>('http://localhost:5000/api/activities')
  .then(response => {
    setActivities(response.data);
  })
}, [])

  return (
    <div>
      <NavBar />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
