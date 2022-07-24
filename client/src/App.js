import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts';
import {
  HomePage,
  ProductPage,
  ProductItemPage,
  AboutPage,
  NotFoundPage,
  ContactPage,
  LocationPage,
  RegisterPage,
  LoginPage,
  ForgotPasswordPage,
  FaqsPage,
  DashboardPage,
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
          <Route path='menu' element={<ProductPage />}>
            <Route path=':_id' element={<ProductItemPage />} />
         
          </Route>
          <Route path='search' element={<SearchResultsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contactus' element={<ContactPage />} />
          <Route path='faqs' element={<FaqsPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='location' element={<LocationPage />} />
          <Route path='signin' element={<LoginPage />} />
          <Route path='forgotpassword' element={<ForgotPasswordPage />} />
          <Route path='resetpassword/:token' element={<ResetPasswordPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          {/* <Route index element={<GetQuery />}> */}
          {/* </Route> */}
          <Route path='checkout-success' element={<CheckoutSuccessPage />} />
          {/* 404 route */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
