import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/companies-list';
import HomepageItem from './HomepageItem';
import './HomepageList.css';

const HomepageList = () => {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.companies);
  console.log(companyList);
  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  return (
    <div data-testid="list-of-rockets">
      <ul>
        {companyList.map((company) => (
          <li key={company.id}>
            <HomepageItem
              title={company.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomepageList;
