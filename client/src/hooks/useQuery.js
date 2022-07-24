import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectQuery } from '../features/query/querySlice';

export default function useQuery() {
  const [queryTerm, setQueryTerm] = useState('');

}
