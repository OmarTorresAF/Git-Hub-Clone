import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useEffect, useState } from "react";
import { getUser,getRepos } from './services/users';
import { useParams } from 'react-router-dom';
import Modal from "./modal";

function App() {
  const params = useParams()
  let username = params.user
  if(!username) {
    username = "TDevtechs";

  }
  console.log(useParams())
  
  const [ user, setUser] = useState({})
  const [ repos, setRepos] = useState([])
  const [ modal, setModal] = useState(false)
  const [ search, setSearch] = useState('')
  const [language, setLanguage] = useState('')


  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("no hemos encontrado a este crack");
        return;
      }
      setUser(data);
    });
  }, [username]);

useEffect(() => {
  getRepos(username).then(({ data, isError }) => {
    if (isError) {
      console.log("no hemos encontrado a los repos de este crack");
      return;
    }
    setRepos(data);
  });
}, [username]);
  
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} setLanguage={setLanguage} repoListCount={repos.length} />
      <RepoList search={search} repoList={repos} language={language}/>
      <Search setModal={setModal} />
    </Layout>
  );
}


export default App;
