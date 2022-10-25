import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/companies-list';
import './HomepageList.css';
import HomepageItem from './HomepageItem';

const HomepageList = () => {
  const navigate = useNavigate();
  const { companyList } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <div className="context">
      <div className="container">
        {companyList.map((company) => (
          <div
            key={uuidv4()}
            onClick={() => navigate(`/details/${company.symbol}`)}
            aria-hidden="true"
          >
            <HomepageItem title={company.symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageList;
