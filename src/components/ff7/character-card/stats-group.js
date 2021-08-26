import React from 'react';

const Component = ({children}) => {
    return (
    <div style={{'gridArea': 'stats'}}>
        {children}
    </div>)
}

export default Component
