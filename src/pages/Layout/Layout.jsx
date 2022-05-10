import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from './StyledLayout';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { useGetUserQuery } from 'redux/api/userApiSlice';
import { refresh } from 'redux/auth//authSlice';
import { useDispatch } from 'react-redux';

export default function Layout() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const token = useSelector(authSelectors.getUserToken);
  const { data, isFetching } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) dispatch(refresh(data));
  }, [data, dispatch]);

  return (
    !isFetching && (
      <>
        <Header>
          <StyledLink to="/">Home</StyledLink>

          {isLoggedIn ? (
            <>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink to="/register">Sign up</StyledLink>
              <StyledLink to="/login">Log in</StyledLink>
            </>
          )}
        </Header>

        <Outlet />
      </>
    )
  );
}
