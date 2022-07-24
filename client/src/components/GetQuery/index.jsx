import { useSearchParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function GetQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(searchParams.get('term'));


  useEffect(() => {
    searchParams.get('term');
  });

  return (

    <Outlet/>
  )
}
