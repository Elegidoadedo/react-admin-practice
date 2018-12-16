import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import lista from './components/list'
let providerUrl = 'https://swapi.co/api';
let dataProvider = jsonServerProvider(providerUrl)
const App = () => (

      <Admin  dataProvider = {dataProvider}>
        <Resource name="people" list={lista}  icon={UserIcon}/>
      </Admin>
)   

export default App;
