import Digits from './Digits';
import Default from './Input';
import Password from './Password';
import Search from './Search';

const Input = Object.assign(Default, { Password, Search, Digits });

export default Input;
