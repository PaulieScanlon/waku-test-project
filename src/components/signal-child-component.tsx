'use client';

const SignalChildComponent = ({ count, onClick }: any) => {
  return (
    <>
      <div>useSignal count: {count}</div>
      <button type='button' onClick={onClick} className='bg-blue-500 rounded px-4 py-2 text-white font-medium'>
        Update count
      </button>
    </>
  );
};

export default SignalChildComponent;
