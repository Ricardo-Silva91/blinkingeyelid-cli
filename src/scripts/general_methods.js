/**
 * Created by Ricardo on 13/06/2017.
 */

const url_base = "https://blinde.herokuapp.com/blindness";

export function getAlbum(cb) {

    const url_rest = 'https://blinde.herokuapp.com/blindness/getRandomAlbum';
    //const url_rest = '/getRandomAlbum';

    fetch(url_rest)
        .then((response) => response.blob())
        .then((responseJson) => {
            //console.log(responseJson.result !== 'fail');
            //return responseJson.result !== 'fail';
            cb(responseJson);
        })
        .catch((error) => {
            //return false;
            cb(false);
        });
};
export function getTotalTracks(cb) {

    const url_rest = 'https://blinde.herokuapp.com/blindness/getTotalTracks';
    //const url_rest = 'getTotalTracks';

    fetch(url_rest)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.result !== 'fail');
            //return responseJson.result !== 'fail';
            cb(responseJson);
        })
        .catch((error) => {
            //return false;
            cb(false);
        });
};
