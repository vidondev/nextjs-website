import MainLayout from "./MainLayout";

export const withLayout = (options = {}) => PageComponent => {
    const Layout = options.Layout || MainLayout;  
    const Component = (
      props => (
        <>
          <Layout>
            <PageComponent {...props} />
          </Layout>
        </>
      )
    );
  
    return Component;
  };
  
  export default withLayout;