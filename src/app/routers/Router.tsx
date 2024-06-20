import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import App from '@/pages/_app';
import { MainPage } from '@/pages/main';
import { BookListPage } from '@/pages/bookList';
import { RecordPage } from '@/pages/record';
import { SettingPage } from '@/pages/setting';
import { BookDetailPage } from '@/pages/bookDetail';
import { LoginPage } from '@/pages/login';
import { LoadingPage, ScrollToTop } from '@/shared/ui';
import { windowSizeState } from '@/shared/stores';

const SignupPage = lazy(() => import('@/pages/signup/ui/Page'));
const ResetPasswordPage = lazy(() => import('@/pages/resetPassword/ui/Page'));
const PrivacyPage = lazy(() => import('@/pages/privacy/ui/Page'));
const TermsPage = lazy(() => import('@/pages/terms/ui/Page'));

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
            <Route index path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <SignupPage />
                </Suspense>
              }
            />
            <Route
              path="/resetPassword"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ResetPasswordPage />
                </Suspense>
              }
            />
            <Route path="/book">
              <Route path="" element={<BookListPage />} />
              <Route path=":id" element={<BookDetailPage />} />
            </Route>
            <Route path="/record" element={<RecordPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route
              path="/privacy"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <PrivacyPage />
                </Suspense>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <TermsPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
