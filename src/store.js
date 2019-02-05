import {searchRepos} from "./github-api";

const CONSTANTS = {
    INITIAL_STATE: [{name: 'Type something cool in the input above...', url: ''}],
    SEARCHING    : [{name: 'Searching...', url: ''}],
    NO_REPOS     : [{name: 'No repos found...', url: ''}]
};

const state = {
    placeholder: 'Type the name of a repo to search and press ENTER...',
    term       : '',
    repos      : CONSTANTS.INITIAL_STATE
};

const actions = {
    input               : ({value}) => state => ({term: value}),
    search              : () => state => searchRepos(state.term),
    searching           : () => state => ({repos: CONSTANTS.SEARCHING}),
    responseHandler     : response => response.body.items.map(({name, clone_url}) => ({name, url: clone_url})),
    responseHandlerError: err => ({repos: CONSTANTS.NO_REPOS}),
    setRepos            : newRepos => state => newRepos.length > 0 ? ({repos: newRepos}) : CONSTANTS.NO_REPOS
};

export {state, actions}