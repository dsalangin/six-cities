import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page" style={{height: '100vh'}}>

      <Header />

      <main
        className='page__main page__main--index page__main--index-empty'
        style={{
          textAlign: 'center'
        }}
      >
        <h1>Page not found</h1>
      </main>
    </div>
  );
}

export default NotFoundScreen;
