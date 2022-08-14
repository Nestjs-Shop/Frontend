import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Header from './MainHeader';

test('Header test', async () => {
  render(<Header />);
});
