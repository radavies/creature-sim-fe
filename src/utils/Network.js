import axios from 'axios';

const baseUrl = 'http://localhost:8080';

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
  axios
    .get(baseUrl + '/creatures')
    .then(successFunction)
    .catch(errorFunction);
}

export { CreateCreature, GetCreatures };
