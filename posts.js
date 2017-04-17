import React from 'react';
import {
  Create,
  SimpleForm,
  CheckboxGroupInput
} from 'admin-on-rest/lib/mui';


export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <CheckboxGroupInput
            source='control_points'
            choices={ [{ id: 'one', name: 'First' },
            { id: 'two', name: 'Second' }] }
        />

      </SimpleForm>
    </Create>
);