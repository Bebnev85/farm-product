import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantageList from "../../mocks/mocks";
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper qualityList = {advantageList} />
    </>
  )
}

export default App;
