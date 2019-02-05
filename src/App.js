import {h, app} from 'hyperapp';
import {actions, state} from "./store";
import Search from './components/Search'

const view = () => (
    <Search/>
);

app(state, actions, view, document.body);
