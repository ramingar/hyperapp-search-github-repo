import {h} from 'hyperapp';
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const Search = () => (
    <section className="ph3 ph5-ns pv5">
        <div className="mw8 center">
            <SearchInput/>
            <SearchResults/>
        </div>
    </section>
);

export default Search;