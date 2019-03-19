import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Home Component</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </div>
  );
};

export default Home;
