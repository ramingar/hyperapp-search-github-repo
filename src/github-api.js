import xhr from "superagent";

const searchRepos = term => {
    const uri = "https://api.github.com/search/repositories?q=" + term + "&page=1&per_page=10&sort=stars&order=desc";
    return xhr.get(uri);
};

export {searchRepos}