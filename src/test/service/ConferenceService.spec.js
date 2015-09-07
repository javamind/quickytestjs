
/**
 * In Jasmine you can define suite tests with describe
 */
describe('ConferenceService', function(){

  var service, httpService;

  //Sometimes it's usefull to exec statements before or after a test. For that use beforeEach or AfterEach
  beforeEach(function(){

  });

  //You can stack several describe block to define sub suites. It's a good way to increase readability
  describe('getAll', function(){

    //You can write your individual tests
    it('should return all the conference', function(){
      expect(true).toBeTruthy();
    });

  });

  describe('getById', function(){

  });
});