import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://192.168.1.110:8080';

function CreateCreature(
  creatureName,
  creatorName,
  strengthPoints,
  attackPoints,
  defencePoints,
  speedPoints,
  successFunction,
  errorFunction
) {
  axios
    .post(baseUrl + '/creature', {
      creatureName,
      creatorName,
      strengthPoints,
      attackPoints,
      defencePoints,
      speedPoints,
      avatarHash: makeAvatarHash(creatureName, creatorName),
    })
    .then(successFunction)
    .catch(errorFunction);
}

function makeAvatarHash(creatureName, creatorName) {
  const avatarString = (creatureName.trim() + creatorName.trim()).toLowerCase();
  return md5(avatarString);
}

function GetCreatures(successFunction, errorFunction) {
  MakeGetRequest('/creature', successFunction, errorFunction);
}

function GetWorld(successFunction, errorFunction) {
  MakeGetRequest('/world', successFunction, errorFunction);
}

function MakeGetRequest(path, successFunction, errorFunction) {
  axios
    .get(baseUrl + path)
    .then(successFunction)
    .catch(errorFunction);
}

export { CreateCreature, GetCreatures, GetWorld };
