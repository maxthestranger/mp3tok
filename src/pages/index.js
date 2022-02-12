import Logo from '../components/logo/logo';
import Search from '../components/form/search';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
      <main className="main">
        {/* logo */}
        <Logo />

        {/* search */}
        <Search />

        {/* more info */}
      </main>
      <Footer />
    </>
  );
}
