/**
 * Created by Ricardo on 13/06/2017.
 */

//const url_base = "http://94.63.5.193:5002";

export function getAlbum(cb) {

    //const url_rest = url_base + '/getRandomAlbum';
    const url_rest = '/getRandomAlbum';

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

    //const url_rest = url_base + '/getTotalTracks';
    const url_rest = '/api/getTotalTracks';

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
