import * as alt from 'alt';
import * as native from natives;

alt.onServer('Test:Message', (newVehicle) => {
    const localPlayer = alt.Player.local.scriptID;
    alt.setTimeout(() => { //works only at client. For server use only "setTimeout"
    native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1); //position goes from -1 to 2
    }, 100)
});