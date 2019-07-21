import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/constants';
import { ThemeProvider } from 'styled-components';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const HomeLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => {
  return (
    <ThemeProvider
      theme={theme => {
        // dark theme
        theme.color = theme.colors.white;
        theme.background = theme.colors.backgroundBlack;
        return theme;
      }}
    >
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        {children}
        <Footer />
        <NormalizeStyles />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
};

export default HomeLayout;