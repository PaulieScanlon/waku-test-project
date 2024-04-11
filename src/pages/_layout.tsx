import '../styles.css';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const data = await getData();

  return (
    <div>
      <meta property='description' content={data.description} />
      <link rel='icon' type='image/png' href={data.icon} />
      <main className='prose'>{children}</main>
    </div>
  );
};

export default RootLayout;

const getData = async () => {
  const data = {
    description: 'Waku Test Project',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
