import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddStu } from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import StudentComponent from './Components/StudentComponent';
import { StudentDetail } from './Components/StudentDetail';
import WrongPage from './Components/WrongPage';
import { data } from './Information/info';


function App() {
  const [user, setUser] = useState(data);

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <StudentComponent
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/addstudent">
          <AddStu
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/edit/:id">
          <EditStudent
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/user/:id">
          <StudentDetail user={user} />
        </Route>

        <Route path="**">
          <WrongPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
