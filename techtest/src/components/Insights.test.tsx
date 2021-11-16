import React from 'react';
import { render, screen } from '@testing-library/react';
import Insights, { InsightsProps } from './Insights';
import { AxiosResponse } from 'axios';

describe('Insights', () => {
  test('renders Insights component', async () => {
    const testJson = require('../json/mock-report.json');
    const axiosResponse: AxiosResponse = {
      data: testJson,
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    };
    const props: InsightsProps = {
      jsonData: axiosResponse,
      openDrawer: () => {return;},
    }
    render(<Insights {...props} />);
  });
});
