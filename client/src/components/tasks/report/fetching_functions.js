import axios from 'axios';

/**
 * 
 * @param {*} that <Class Copmonent> copmonent to work on.
 * @desc  fetching github user and updates state.github, state.githubLoading
 */
export function fetchUser(that){
    axios.get('https://api.github.com/users/ahmad-ali14')
    .then((res) => {
        let { followers, following, public_repos, public_gists } = res.data;
        let total = followers + following + public_repos + public_gists + 2;
        that.setState({ github: { followers, following, public_repos, public_gists, total, member: 2 } })
    })
    //.then(() => console.log('user'))
    .catch(err => console.log(err))
}

/**
 * 
 * @param {*} that <Class Copmonent> copmonent to work on.
 * @desc  fetching Repos
 */
export function fetchRepos(that){
    axios.get('https://api.github.com/users/ahmad-ali14/repos')
    .then((res) => {
        console.log(res.data)
        that.setState({repos : res.data})
    }).catch(err => console.log(err))
}

