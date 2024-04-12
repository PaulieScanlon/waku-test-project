import RSCParentComponent from '../components/rsc-parent-component.js';
import SignalParentComponent from '../components/signal-parent-component.js';
import StateParentComponent from '../components/state-parent-component.js';

const Page = async () => {
  return (
    <>
      <SignalParentComponent />
      <StateParentComponent />
      <RSCParentComponent />
    </>
  );
};

export default Page;

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
