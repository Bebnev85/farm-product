import PageWrapper from '../layout/page-wrapper/page-wrapper';
import features from "../../mocks/mocks";
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features = {features} />
    </>
  )
}

export default App;
