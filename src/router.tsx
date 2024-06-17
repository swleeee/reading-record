import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Home from './pages';
import Login from './pages/login';
import Book from './pages/book';
import Record from './pages/record';
import Setting from './pages/setting';
import BookDetail from './pages/book/[id]';
import App from './pages/_app';
import { LoadingPage, ScrollToTop } from './components';
import { windowSizeState } from './stores';

const Signup = lazy(() => import('./pages/signup'));
const ResetPassword = lazy(() => import('./pages/resetPassword'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));

export const Router = () => {
  const setWindowSize = useSetRecoilState(windowSizeState);

  useEffect(() => {
    const handleScreenResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, [setWindowSize]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<App />}>
            {/* TODO: 추후 수정 예정 */}
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="/resetPassword"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ResetPassword />
                </Suspense>
              }
            />
            <Route path="/book">
              <Route path="" element={<Book />} />
              <Route path=":id" element={<BookDetail />} />
            </Route>
            <Route path="/record" element={<Record />} />
            <Route path="/setting" element={<Setting />} />
            <Route
              path="/privacy"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Privacy />
                </Suspense>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Terms />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
