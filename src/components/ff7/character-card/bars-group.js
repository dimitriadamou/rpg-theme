import React from 'react';

const Component = ({children}) => {
    return (
    <div style={{'gridArea': 'bars'}}>
        {children}
    </div>)
}

export default Component
