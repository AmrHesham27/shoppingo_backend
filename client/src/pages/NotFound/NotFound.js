import Layout from "../../components/layout/Layout/Layout";

function NotFound() {
  return (
    <Layout>
      <div className="my-5 p-5 d-flex flex-column align-items-center mx-auto">
        <div>Error 404</div>
        <div>This page does not exist</div>
      </div>
    </Layout>
  );
}

export default NotFound;
