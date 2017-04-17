import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';
import { PostCreate } from './posts';

render(
    <Admin restClient={simpleRestClient('http://localhost:3000')}>
      <Resource name="posts" create={PostCreate}/>
    </Admin>,
    document.getElementById('root')
);