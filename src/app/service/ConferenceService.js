/**
 * This just an example to validate that the tests are OK
 */
function ConferenceService(httpService){

  function getAll(){
    return httpService.get('/conference');
  }

  function getById(id){
    return httpService.get('/conference/' + id);
  }

  return {
    getAll : getAll,
    getById : getById
  }
}