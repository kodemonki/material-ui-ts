import React from 'react';
import { render, screen } from '@testing-library/react';
import { InsightCard, InsightCardProps } from './InsightCard';

describe('InsightCard', () => {
  test('renders InsightCard component', async () => {
    const props: InsightCardProps = {
      onTrack: true,
      title: 'Public Information',
      description: "Bankruptcies and individual voluntary arrangements can damage your score",
      impact: "HIGH IMPACT"
    }
    render(<InsightCard {...props}/>);
    expect(await screen.findByText(props.title)).toBeInTheDocument();
    expect(await screen.findByText(props.description)).toBeInTheDocument();
  });
});
