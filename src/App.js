import React, { Fragment } from 'react';

import HeaderPatch from './components/HeaderPatch';
import TitlePatch from './objects/TitlePatch';
import StreamerPatch from './components/StreamerPatch';
import SendPatch from './components/SendPatch';


const App = () => (
    <Fragment>
        <HeaderPatch />
        <TitlePatch after>Envie uma patch para</TitlePatch>

        <StreamerPatch />

        <SendPatch />
    </Fragment>
);

export default App;
