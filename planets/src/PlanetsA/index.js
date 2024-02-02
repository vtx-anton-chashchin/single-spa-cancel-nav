import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@react-mf/styleguide';

export default function PlanetsA() {
  const history = useHistory();

  const [mountedTimes, setMountedTimes] = useState(0);

  const [somethingInState, setSomethingInState] = useState('')

  const [isNavBlocked1, setIsNavBlocked1] = useState(false);
  const [isNavBlocked2, setIsNavBlocked2] = useState(false);


  useEffect(() => {
    const prevMountedTimes = Number(window.localStorage.getItem('__PAGE_A_MOUNTED_TIMES') ?? 0)
    const mountedTimes = prevMountedTimes + 1
    window.localStorage.setItem('__PAGE_A_MOUNTED_TIMES', mountedTimes)
    setMountedTimes(mountedTimes)
  }, [])

  useEffect(() => {
    const listener = (e) => {
      if (isNavBlocked1) {
        console.log('Cancel navigation WITHOUT comparison of url')
        e.detail.cancelNavigation();
      }
    }

    window.addEventListener('single-spa:before-routing-event', listener);

    return () => { window.removeEventListener('single-spa:before-routing-event', listener) }
  }, [isNavBlocked1]);


  useEffect(() => {
    const listener = (e) => {
      if (
        new URL(e.detail.oldUrl).pathname === '/planets/a' &&
        new URL(e.detail.newUrl).pathname === '/planets/b'
      ) {
        if (isNavBlocked2) {
          console.log('Cancel navigation WITH comparison of url')
          e.detail.cancelNavigation();
        }
      }
    }

    window.addEventListener('single-spa:before-routing-event', listener);

    return () => { window.removeEventListener('single-spa:before-routing-event', listener) }
  }, [isNavBlocked2]);




  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <h1>
        Planets A
      </h1>

      <p>
        This page mounted {mountedTimes} times.
      </p>


      <div>
        <p>
          Type something to store in component state
        </p>
        <textarea style={{ width: '100%', color: 'black' }} value={somethingInState} onChange={e => setSomethingInState(e.target.value)} />
      </div>


      <a href="/planets/b" style={{ textDecoration: 'underline' }}>
        HTML Anchor to
        <code>
          /planets/b
        </code>
      </a>

      <br />

      <Link to="/planets/b" style={{ textDecoration: 'underline' }}>
        React Router Link to
        <code>
          /planets/b
        </code>
      </Link>

      <br />

      <Button onClick={() => history.push('/planets/b')}>
        Button to
        <code>
          /planets/b
        </code>
      </Button>


      <div>
        <h2>Blocker <b>WITHOUT</b> url comparison</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button
            style={{ margin: 0, backgroundColor: isNavBlocked1 ? 'red' : 'green' }}
            onClick={() => {
              setIsNavBlocked1((prevValue) => !prevValue);
            }}
          >
            {isNavBlocked1 ? 'Unblock' : 'Block'}
          </Button>
          {isNavBlocked1 ? <p color="red">Nav is blocked</p> : <p color="green">Nav is not blocked</p>}
        </div>
      </div>

      <div>
        <h2>Blocker <b>WITH</b> url comparison</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button
            style={{ margin: 0, backgroundColor: isNavBlocked2 ? 'red' : 'green' }}
            onClick={() => {
              setIsNavBlocked2((prevValue) => !prevValue);
            }}
          >
            {isNavBlocked2 ? 'Unblock' : 'Block'}
          </Button>
          {isNavBlocked2 ? <p color="red">Nav is blocked</p> : <p color="green">Nav is not blocked</p>}
        </div>
      </div>
    </div>
  );
}
