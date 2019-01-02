import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  componentDidMount() {
  //  const { employeesFetch } = this.props
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee.item} />}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (values, uid) => ({ ...values, uid }));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
