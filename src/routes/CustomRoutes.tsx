// const ProtectedRoute = ({
//     user,
//     redirectPath = '/landing',
//     children,
//   }) => {
//     if (!user) {
//       return <Navigate to={redirectPath} replace />;
//     }
  
//     return children ? children : <Outlet />;
//   };
// }

import React from 'react'

function CustomRoutes() {
  return (
    <div>CustomRoutes</div>
  )
}

export default CustomRoutes