import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyledCard, StyledFooter, StyledLoginForm } from '../styles';

function AuthLayout({ children, title }) {
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) Router.push('/');
  }, [isLogin]);

  return (
    !isLogin && (
      <div>
        <StyledLoginForm>
          <StyledCard title={title}>{children}</StyledCard>
        </StyledLoginForm>
        <StyledFooter>@Copyright asci</StyledFooter>
      </div>
    )
  );
}

export default AuthLayout;
