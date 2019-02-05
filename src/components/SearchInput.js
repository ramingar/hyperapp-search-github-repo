import {h} from 'hyperapp';

const SearchInput = ({}) => (state, actions) => (
    <input type="text" className="center w-100"
           placeholder={state.placeholder}
           value={state.term}
           oninput={e => actions.input({value: e.target.value})}
           onkeyup={
               e => (e.keyCode === 13 ?
                   actions.searching() &&
                   actions
                       .search()
                       .then(actions.responseHandler)
                       .then(actions.setRepos)
                       .catch(actions.responseHandlerError) : '')
           }
    />
);

export default SearchInput;