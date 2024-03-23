import { RecoilRoot } from 'recoil';

import { ThemeProvider, styled } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { Suspense, useEffect } from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingPage from './page/LoadingPage';

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  /* min-width: var(--app-max-width, 375px); */
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const queryClient = new QueryClient();

function App() {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Suspense fallback={<LoadingPage/>}>
              <Router />
            </Suspense>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;
