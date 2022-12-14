import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

function Login({providers}) {
  console.log("===================");
  //console.log(providers);

  // const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //     console.log(res);
  //   })();
  // }, []);

  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-5' src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='bg-[#18D860] text-white p-5 rounded-full'
            onClick={() => signIn(provider.id, {callbackUrl: '/'})}
          >Login With {provider.name}</button>
        </div>
      ))}
    </div>


  )
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}