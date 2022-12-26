// Grab the original exports
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Styles from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import options from '../../../src/themes/options'; // I put the theme options separately to be reusable

const makeStyles = func => {
  /**
   * Note: if you want to mock this return value to be
   * different within a test suite then use
   * the pattern defined here:
   * https://jestjs.io/docs/en/manual-mocks
   */

  /**
   * Work around because Shallow rendering does not
   * Hook context and some other hook features.
   * `makeStyles` accept a function as argument (func)
   * and that function accept a theme as argument
   * so we can take that same function, passing it as
   * parameter to the original makeStyles and
   * bind it to our custom theme, created on the go
   *  so that createMuiTheme can be ready
   */
  const theme = createMuiTheme(options);
  return Styles.makeStyles(func.bind(null, theme));
};

module.exports = { ...Styles, makeStyles };