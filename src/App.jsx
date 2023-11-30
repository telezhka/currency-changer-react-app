import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Converter from 'pages/Converter/Converter';
import Anything from 'pages/Anything/Anything';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Converter />} />
          <Route path="/anything" element={<Anything />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
