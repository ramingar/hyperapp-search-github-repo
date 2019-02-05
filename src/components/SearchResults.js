import {h} from 'hyperapp';

const SearchResults = ({}) => (state) => (
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
);

export default SearchResults;