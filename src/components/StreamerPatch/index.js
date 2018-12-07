import React from 'react';

import AvatarPhoto from '../../img/logo-avatar.png'

import WrapPatch from '../../objects/WrapPatch';
import { Streamer, Avatar, Name, Twitch } from './styles';

const StreamerPatch = () => (
    <WrapPatch>
        <Streamer>
            <Avatar>
                <img src={AvatarPhoto} alt="Avatar Marco BrunoBR"></img>
            </Avatar>

            <Name>MarcoBrunoBR</Name>
            <Twitch>
                <a href="https://twitch.tv/marcobrunobr">twitch.tv/marcobrunobr</a>
            </Twitch>
        </Streamer>
    </WrapPatch>

);

export default StreamerPatch;