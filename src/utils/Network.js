import axios from 'axios';

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
    })
    .then(successFunction)
    .catch(errorFunction);
}

function GetCreatures(successFunction, errorFunction) {
  MakeGetRequest('/creatures', successFunction, errorFunction);
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
