import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: '#007aff',
        color: 'white' }}
      sceneStyle={{ backgroundColor: 'white' }}
    >
      <Scene key="root" sceneStyle={{ backgroundColor: 'white' }} hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Log In"
            titleStyle={{
              textAlign: 'center',
              flex: 1,
              color: 'white' }}
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            rightButtonStyle={{ marginRight: 5, paddingLeft: 10, backgroundColor: 'white' }}
            onRight={() => Actions.employeeCreate()}
            key="employeelist"
            component={EmployeeList}
            title="Employees"
            titleStyle={{
              textAlign: 'center',
              flex: 1,
              color: 'white' }}
            navigationBarStyle={{
              backgroundColor: '#007aff',
              color: 'white' }}
              initial
          />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
