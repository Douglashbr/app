import React, { Fragment } from 'react';

import HeaderPatch from './components/HeaderPatch';
import TitlePatch from './objects/TitlePatch';
import StreamerPatch from './components/StreamerPatch';
import InputText from './objects/InputText';
import FormPatch from './objects/FormPatch';
import InputArea from './objects/InputArea';
import ButtonPatch from './components/ButtonPatch';


const App = () => (
    <Fragment>
        <HeaderPatch />
        <TitlePatch after>Envie uma patch para</TitlePatch>

        <StreamerPatch />

        <FormPatch>
            <InputText placeholder="Seu e-mail" type="email" />
            <InputArea placeholder="Mensagem para MarcoBrunoBr" />
            <ButtonPatch></ButtonPatch>
        </FormPatch>
    </Fragment>
);

export default App;
