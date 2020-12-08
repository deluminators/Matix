import React, { useState } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import { IoIosMenu } from 'react-icons/io';
import './sidebar.css';
const Sidebar = () => {
  const [path, setPath] = useState('/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const name = localStorage.getItem('user')
  return (
    <React.Fragment>
      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          {/* <Icon name="burger" className="w-6 h-6" /> */}
          <IoIosMenu fontSize={40} />
        </button>
      </div>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden"
        style={{ display: isSidebarOpen ? 'block' : 'none' }}
      />
      <div
        className={`duration ${
          isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        }`}
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '22%',
          zIndex: 20,
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%' }}>
          <span
            style={{
              fontWeight: '600',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            Hello, {name}!
          </span>
        </div>
        <Navigation
          // you can use your own router's api to get pathname

          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            console.log(itemId);
            history.push(`${itemId}`);
            // maybe push to the route
          }}
          items={[
            {
              title: 'Dashboard',
              itemId: '/dashboard',
              // you can use your own custom Icon component as well
              // icon is optional
              // elemBefore: () => <Icon name="inbox" />,
            },
            {
              title: 'Order',
              itemId: '/order',
              // elemBefore: () => <Icon name="users" />,
            },
            {
              title: 'Laptop Details',
              itemId: '/laptop-details',
            },
            ,{
              title: 'Previous Orders',
              itemId: 'previous-orders',
            },
            {
              title: 'Logout',
              itemId: '/logout',
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
