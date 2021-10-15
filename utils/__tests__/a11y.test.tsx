/**
 * @jest-environment jsdom
 */

import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import Success from '../../pages/success';

expect.extend(toHaveNoViolations);

it('should not have a11y issues', async () => {
  const html = ReactDomServer.renderToString(<Success />);
  const results = await axe(html);
  expect(results).toHaveNoViolations();
});
