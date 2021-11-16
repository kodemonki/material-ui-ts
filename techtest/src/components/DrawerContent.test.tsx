import React from 'react';
import { render, screen } from '@testing-library/react';
 
import DrawerContent from './DrawerContent';
 
describe('DrawerContent', () => {
  test('renders DrawerContent component', async () => {
    render(<DrawerContent closeDrawer={() => { return; }}/>);
  });
});
