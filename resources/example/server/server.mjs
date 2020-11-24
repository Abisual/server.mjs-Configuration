/*
    It's ONLY FOR tests!
    Updated 22.11 by BRILLZ
*/
import * as alt from 'alt';
import chat from 'chat';

console.log(chat);

const spawnPos = {
    x: -2639.872,
    y: 1866.812,
    z: 160.135
}

alt.on('playerConnect', (player) => {
    player.model = 'mp_m_freemode_01';
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 0);
});

chat.registerCmd('sethp', (player, arg) => {
    if (!arg || arg.lenght <=0){
        chat.send(player, '/sethp (amount)')
        return;
    }

    let amount = parseInt(arg[0]);
    if (amount < 100) {
        amount += 100;
    }

    if (isNaN(amount)){
        chat.send(player, 'The amount specified; was not a number.');
        return;
    }
    player.health = amount;
})

chat.registerCmd('veh',(player, arg) => {
    if (!arg || arg.lenght <=0){
        chat.send(player, '/veh (model)')
        return;
    }
    try {
        const newVehicle = new alt.Vehicle(
            arg[0], 
            player.pos.x, 
            player.pos.y, 
            player.pos.z, 
            0, 
            0, 
            0
        );
        alt.emitClient(player, 'vehicle:SetInto', newVehicle);
    } catch(err){
        chat.send(player, 'That model was incorrect');
    }
    
});

