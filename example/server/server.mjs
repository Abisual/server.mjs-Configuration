/*
    It's ONLY FOR tests!
    Updated 22.11 by BRILLZ
*/
import * as alt from 'alt';

const spawnPos = {
    x: -2639.872,
    y: 1866.812,
    z: 160.135
}

alt.on('playerConnect', (player) => {
    player.model = 'mp_m_freemode_01';
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 5000);

});
