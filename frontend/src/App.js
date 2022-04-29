//pages
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
//styles
import GlobalStyles from "./globalStyles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Dashboard/>
      </Layout>
    </>
  );
};

export default App;
