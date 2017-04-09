function addTutorial(text) {
  return {type: ADD_TUTORIAL, text};
}

function editTutorial(id, text) {
  return {type: EDIT_TUTORIAL, id, text};
}

function deleteTutorial(id) {
  return {type: DELETE_TUTORIAL, id};
}


