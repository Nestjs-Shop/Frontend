import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Header from './AuthHeader';

test('Header test', async () => {
  render(<Header />);
});
