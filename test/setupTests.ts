/**
 * Adds the custom jest matchers thats defined inside the ./matchers folder.
 * They can be used globally in all tests inside this project
 */
import './matchers/setup';

/**
 * jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 * expect(element).toHaveTextContent(/react/i)
 *
 * @see https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';

/**
 * A set of utilities for testing Styled Components with Jest.
 * This package improves the snapshot testing experience and provides a
 * brand new matcher to make expectations on the style rules.
 *
 * @see https://github.com/styled-components/jest-styled-components
 */
import 'jest-styled-components';
