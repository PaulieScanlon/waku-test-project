const ChildComponent = async () => {
  const response = await fetch('https://api.github.com/repos/dai-shi/waku');
  const data = await response.json();

  return (
    <>
      <p>RSC Fetch</p>
      <pre className='h-96 overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default ChildComponent;
