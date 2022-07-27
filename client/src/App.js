import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts';
import { RedirectRoute, RequireAuth } from './components';
import {
  HomePage,
  ProductPage,
  ProductItemPage,
  AboutPage,
  NotFoundPage,
  ContactPage,
  LocationPage,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  FaqsPage,
  AccountPage,
  ResetPasswordPage,
  SearchResultsPage,
  CheckoutSuccessPage,
} from './pages';

const token = 'testing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='menu' element={<ProductPage />} />
          <Route path='menu/:_id' element={<ProductItemPage />} />
          <Route path='search' element={<SearchResultsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='faqs' element={<FaqsPage />} />
          <Route path='location' element={<LocationPage />} />
          <Route element={<RedirectRoute />}>
            <Route path='signup' element={<SignUpPage />} />
            <Route path='signin' element={<SignInPage />} />
          </Route>
          <Route path='forgotpassword' element={<ForgotPasswordPage />} />
          <Route path='resetpassword/:token' element={<ResetPasswordPage />} />
          {/* <Route path='dashboard' element={<DashboardPage />} /> */}
          <Route path='checkout-success' element={<CheckoutSuccessPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route element={<RequireAuth />}>
            <Route path='account' element={<AccountPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
