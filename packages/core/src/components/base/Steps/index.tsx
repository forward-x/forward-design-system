import Bar, { IStepsBarProps } from './Bar';
import Radial, { IStepsRadialProps } from './Radial';

const Steps = Object.assign(Bar, {
  Bar,
  Radial,
});
export type { IStepsBarProps, IStepsRadialProps };
export default Steps;
