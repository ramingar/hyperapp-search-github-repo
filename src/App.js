import {app} from 'hyperapp';
import xhr from 'superagent'

const INITIAL_STATE = [{name: 'Type something cool in the input above...', url: ''}];
const SEARCHING     = [{name: 'Searching...', url: ''}];
const NO_REPOS      = [{name: 'No repos found...', url: ''}];

const state = {
    term : '',
    repos: INITIAL_STATE
};

const actions = {
    input               : ({value}) => state => ({term: value}),
    search              : () => state => {
        const uri = "https://api.github.com/search/repositories?q=" + state.term + "&page=1&per_page=10&sort=stars&order=desc";
        return xhr.get(uri);
    },
    searching           : () => state => ({repos: SEARCHING}),
    responseHandler     : response => response.body.items.map(({name, clone_url}) => ({name, url: clone_url})),
    responseHandlerError: err => ({repos: NO_REPOS}),
    setRepos            : newRepos => state => {
        return newRepos.length > 0 ? ({repos: newRepos}) : NO_REPOS;
    }
};

const view = (state, actions) => (
    <section className="ph3 ph5-ns pv5">
        <div className="mw8 center">
            <input type="text" className="center w-100"
                   placeholder="Type the name of a repo to search and press ENTER..."
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
            <table className="mt3 w-100 center collapse">
                <tbody>
                {state.repos.map(({name, url}) => (
                    <tr>
                        <td className="pv3 pr3 bb b--black-20">{name}</td>
                        <td className="pv3 pr3 bb b--black-20">
                            <a href={url} target="_blank">{url}</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </section>
);

app(state, actions, view, document.body);
