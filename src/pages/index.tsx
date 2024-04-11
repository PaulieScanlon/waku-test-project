import ParentComponent from '../components/parent-component.js';
import SignalCounter from '../components/signal-counter.js';

const Page = async () => {
  return (
    <>
      <SignalCounter />
      <ParentComponent />
    </>
  );
};

export default Page;

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
