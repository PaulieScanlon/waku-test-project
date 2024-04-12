import ParentComponent from '../components/parent-component.js';
import SignalCounter from '../components/signal-counter.js';
import StateCounter from '../components/react-component.js';

const Page = async () => {
  return (
    <>
      <SignalCounter />
      <StateCounter />
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
