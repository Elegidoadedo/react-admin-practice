import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';


 const lista =(props)=> (          
<List title="All users" {...props}>
<Datagrid>
    <TextField source="results" />
    <TextField source="count" />
    <EmailField source="next" />


</Datagrid>
</List>);

export default lista;