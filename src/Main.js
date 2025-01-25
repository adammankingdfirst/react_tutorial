import React from 'react';
import ProfileForm from './ProfileForm';
import Photo from './Photo';

function Main() {
    const content = {
        display: 'flex',
        marginTop: '3rem',
        marginLeft: '4rem',
        marginRight: '4rem'
    }
  return (
    <div style={content}>
        <ProfileForm />
        <Photo />
    </div>
  )
}

export default Main